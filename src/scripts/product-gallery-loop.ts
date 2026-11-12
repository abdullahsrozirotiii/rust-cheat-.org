export const PRODUCT_GALLERY_AUTOPLAY_MS = 4500;

type EmblaApi = {
  selectedScrollSnap: () => number;
  scrollTo: (n: number) => void;
  scrollNext: () => void;
  on: (event: string, cb: () => void) => void;
};

type AutoplayPlugin = {
  stop: () => void;
  play: () => void;
};

async function initProductGalleryLoops(root: ParentNode = document) {
  const nodes = [...root.querySelectorAll<HTMLElement>('[data-product-gallery-embla]')].filter(
    (node) => node.dataset.productGalleryReady !== 'true',
  );
  if (!nodes.length) return;

  const [{ createCarousel }, { default: Autoplay }] = await Promise.all([
    import('@starwind-ui/runtime/carousel'),
    import('embla-carousel-autoplay'),
  ]);

  nodes.forEach((carouselRoot) => {
    carouselRoot.dataset.productGalleryReady = 'true';
    const wrap = carouselRoot.closest('[data-product-gallery]');
    if (!wrap) return;

    const thumbs = wrap.querySelectorAll<HTMLButtonElement>('[data-product-gallery-thumb]');
    const slideCount = thumbs.length;
    if (slideCount <= 1) return;

    const autoplay = Autoplay({
      delay: PRODUCT_GALLERY_AUTOPLAY_MS,
      stopOnInteraction: true,
      stopOnMouseEnter: true,
    });

    const instance = createCarousel(carouselRoot, {
      opts: { loop: true, align: 'start', duration: 22 },
      plugins: [autoplay],
    });

    const api = instance.api as EmblaApi;

    const syncThumbs = () => {
      const index = api.selectedScrollSnap();
      thumbs.forEach((thumb, i) => {
        const active = i === index;
        thumb.classList.toggle('is-active', active);
        thumb.setAttribute('aria-selected', active ? 'true' : 'false');
      });
    };

    thumbs.forEach((thumb) => {
      thumb.addEventListener('click', () => {
        const index = Number(thumb.getAttribute('data-index'));
        if (!Number.isNaN(index)) {
          api.scrollTo(index);
          autoplay.stop();
        }
      });
    });

    api.on('select', syncThumbs);
    api.on('reInit', syncThumbs);
    syncThumbs();

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        if (entry.isIntersecting && !document.hidden) autoplay.play();
        else autoplay.stop();
      },
      { threshold: 0.25 },
    );
    io.observe(carouselRoot);

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) autoplay.stop();
      else if (carouselRoot.getBoundingClientRect().top < window.innerHeight) autoplay.play();
    });
  });
}

export function setupProductGalleryLoop() {
  const run = () => void initProductGalleryLoops();
  run();
  document.addEventListener('astro:page-load', run);
}
