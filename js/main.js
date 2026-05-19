/* Product data */
const products = [
  { id: 1, name: 'Pink Peony', price: 259, image: 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=500&q=80', badge: 'new', category: 'bouquet' },
  { id: 2, name: 'Sunset Roses', price: 189, image: 'https://images.unsplash.com/photo-1518894781327-630e390d726c?w=500&q=80', badge: 'sale', category: 'bouquet' },
  { id: 3, name: 'Lavender Dream', price: 145, image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=500&q=80', badge: null, category: 'bouquet' },
  { id: 4, name: 'Spring Tulips', price: 99, image: 'https://images.unsplash.com/photo-1520763185295-f1397f4b51db?w=500&q=80', badge: 'new', category: 'bouquet' },
  { id: 5, name: 'Orchid Elegance', price: 320, image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=500&q=80', badge: null, category: 'indoor' },
  { id: 6, name: 'White Lily', price: 175, image: 'https://images.unsplash.com/photo-1591886960571-35d62d4d82c9?w=500&q=80', badge: 'sale', category: 'bouquet' },
  { id: 7, name: 'Monstera Plant', price: 89, image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=500&q=80', badge: null, category: 'indoor' },
  { id: 8, name: 'Succulent Set', price: 65, image: 'https://images.unsplash.com/photo-1459156212016-c812468e2115?w=500&q=80', badge: 'new', category: 'indoor' },
  { id: 9, name: 'Cherry Blossom', price: 210, image: 'https://images.unsplash.com/photo-1525310072745-f49212b5c6db?w=500&q=80', badge: null, category: 'bouquet' },
  { id: 10, name: 'Fiddle Leaf Fig', price: 120, image: 'https://images.unsplash.com/photo-1593482892290-66327db150b8?w=500&q=80', badge: 'sale', category: 'indoor' },
  { id: 11, name: 'Mixed Bouquet', price: 155, image: 'https://images.unsplash.com/photo-1582794543139-688e65fbb39f?w=500&q=80', badge: null, category: 'bouquet' },
  { id: 12, name: 'Peace Lily', price: 78, image: 'https://images.unsplash.com/photo-1593691509546-2e5c40b30ed7?w=500&q=80', badge: 'new', category: 'indoor' },
];

const TAB_ACTIVE = ['text-brand', 'border-brand'];
const TAB_INACTIVE = ['text-gray-500', 'border-transparent'];

const starSvg = `<svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>`;

function renderStars() {
  return `<div class="flex justify-center gap-0.5 text-amber-400 text-xs mb-2" aria-label="5 out of 5 stars">${starSvg.repeat(5)}</div>`;
}

function renderProductCard(product, showActions = false) {
  const badgeHtml = product.badge
    ? `<span class="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm text-white ${product.badge === 'sale' ? 'bg-brand' : 'bg-gray-900'}">${product.badge}</span>`
    : '';
  const actionsHtml = showActions
    ? `<div class="absolute right-3 top-1/2 -translate-y-1/2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button type="button" class="w-9 h-9 bg-white rounded-full flex items-center justify-center text-gray-600 hover:bg-brand hover:text-white shadow-md border-0 cursor-pointer transition-colors" aria-label="Add to wishlist">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
        </button>
        <button type="button" class="w-9 h-9 bg-white rounded-full flex items-center justify-center text-gray-600 hover:bg-brand hover:text-white shadow-md border-0 cursor-pointer transition-colors" aria-label="Quick view">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
        </button>
        <button type="button" class="w-9 h-9 bg-white rounded-full flex items-center justify-center text-gray-600 hover:bg-brand hover:text-white shadow-md border-0 cursor-pointer transition-colors" aria-label="Add to cart">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
        </button>
      </div>`
    : '';

  return `
    <article class="group relative text-center animate-fadeIn" data-category="${product.category}">
      <div class="relative bg-gray-100 rounded-lg overflow-hidden aspect-square mb-4">
        ${badgeHtml}
        <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
        ${actionsHtml}
      </div>
      ${renderStars()}
      <h3 class="font-serif text-base text-gray-900 mb-1">${product.name}</h3>
      <p class="text-brand font-semibold text-sm">$${product.price.toFixed(2)}</p>
    </article>
  `;
}

function initProducts() {
  const newGrid = document.getElementById('new-products-grid');
  const featuredGrid = document.getElementById('featured-grid');

  if (newGrid) {
    newGrid.innerHTML = products.slice(0, 4).map((p, i) => renderProductCard(p, i === 1)).join('');
  }

  if (featuredGrid) {
    renderFeatured('all');
  }
}

function renderFeatured(filter) {
  const grid = document.getElementById('featured-grid');
  if (!grid) return;

  const filtered = filter === 'all'
    ? products.slice(0, 8)
    : products.filter((p) => p.category === filter).slice(0, 8);

  grid.innerHTML = filtered.map((p) => renderProductCard(p)).join('');
}

function setTabActive(tab) {
  document.querySelectorAll('#featured-tabs .featured-tab').forEach((t) => {
    t.classList.remove(...TAB_ACTIVE);
    t.classList.add(...TAB_INACTIVE);
    t.setAttribute('aria-selected', 'false');
  });
  tab.classList.remove(...TAB_INACTIVE);
  tab.classList.add(...TAB_ACTIVE);
  tab.setAttribute('aria-selected', 'true');
}

/* Hero carousel */
function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dotsContainer = document.getElementById('hero-dots');
  const prevBtn = document.getElementById('hero-prev');
  const nextBtn = document.getElementById('hero-next');
  if (!slides.length) return;

  let current = 0;
  let autoplay;

  const dotBase = 'w-2 h-2 rounded-full transition-all cursor-pointer border-0 p-0';
  const dotActive = 'bg-brand w-6';
  const dotInactive = 'bg-gray-300';

  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = `${dotBase} ${i === 0 ? dotActive : dotInactive}`;
    dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
    dot.addEventListener('click', () => goTo(i));
    dotsContainer?.appendChild(dot);
  });

  const dots = dotsContainer?.querySelectorAll('button');

  function goTo(index) {
    slides[current].classList.add('hidden');
    dots?.[current]?.classList.remove(dotActive);
    dots?.[current]?.classList.add(dotInactive);
    current = (index + slides.length) % slides.length;
    slides[current].classList.remove('hidden');
    dots?.[current]?.classList.remove(dotInactive);
    dots?.[current]?.classList.add(dotActive);
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  prevBtn?.addEventListener('click', prev);
  nextBtn?.addEventListener('click', next);

  function startAutoplay() {
    autoplay = setInterval(next, 6000);
  }
  function stopAutoplay() {
    clearInterval(autoplay);
  }

  const heroSection = document.getElementById('hero-slider');
  heroSection?.addEventListener('mouseenter', stopAutoplay);
  heroSection?.addEventListener('mouseleave', startAutoplay);

  startAutoplay();
}

/* Testimonial slider */
function initTestimonialSlider() {
  const slides = document.querySelectorAll('.testimonial-slide');
  const prevBtn = document.getElementById('testimonial-prev');
  const nextBtn = document.getElementById('testimonial-next');
  if (!slides.length) return;

  let current = 0;

  function goTo(index) {
    slides[current].classList.add('hidden');
    current = (index + slides.length) % slides.length;
    slides[current].classList.remove('hidden');
  }

  prevBtn?.addEventListener('click', () => goTo(current - 1));
  nextBtn?.addEventListener('click', () => goTo(current + 1));
}

/* Featured tabs */
function initTabs() {
  const tabs = document.querySelectorAll('#featured-tabs .featured-tab');
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      setTabActive(tab);
      renderFeatured(tab.dataset.filter);
    });
  });
}

/* Mobile menu */
function initMobileMenu() {
  const toggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('mobile-nav');
  const iconOpen = document.getElementById('menu-icon-open');
  const iconClose = document.getElementById('menu-icon-close');

  toggle?.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('hidden') === false;
    toggle.setAttribute('aria-expanded', String(isOpen));
    iconOpen?.classList.toggle('hidden', isOpen);
    iconClose?.classList.toggle('hidden', !isOpen);
  });

  nav?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.add('hidden');
      toggle.setAttribute('aria-expanded', 'false');
      iconOpen?.classList.remove('hidden');
      iconClose?.classList.add('hidden');
    });
  });
}

/* Header scroll shadow */
function initHeaderScroll() {
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    header?.classList.toggle('shadow-md', window.scrollY > 10);
  }, { passive: true });
}

/* Newsletter */
function initNewsletter() {
  const form = document.getElementById('newsletter-form');
  const msg = document.getElementById('newsletter-msg');

  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    msg?.classList.remove('hidden');
    form.reset();
    setTimeout(() => msg?.classList.add('hidden'), 4000);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initProducts();
  initHeroSlider();
  initTestimonialSlider();
  initTabs();
  initMobileMenu();
  initHeaderScroll();
  initNewsletter();
});
