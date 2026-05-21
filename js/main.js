const products = [
  {
    id: 1,
    name: "Pink Peony",
    price: 259,
    image:
      "https://shirohanaflowers.com/cdn/shop/files/2_af9e57ec-fcc7-4177-9d07-1536b5262caf.webp?v=1770177951",
    badge: "new",
    category: "new",
  },
  {
    id: 2,
    name: "Sunset Roses",
    price: 189,
    image:
      "https://shirohanaflowers.com/cdn/shop/files/3_b47a9952-b823-4e8e-92c1-0a5d8ea1b9ec.webp?v=1770178123",
    badge: "sale",
    category: "new",
  },
  {
    id: 3,
    name: "Lavender Dream",
    price: 145,
    image:
      "https://shirohanaflowers.com/cdn/shop/files/3_ce8d92e9-c16b-4897-ab4f-871e200e61b0.webp?v=1770108979",
    badge: null,
    category: "new",
  },
  {
    id: 4,
    name: "Spring Tulips",
    price: 99,
    image:
      "https://shirohanaflowers.com/cdn/shop/files/2_b4f8ca3e-0f02-4d4a-9d81-87ef08aca6ab.webp?v=1770178988",
    badge: "new",
    category: "new",
  },
  {
    id: 5,
    name: "Orchid Elegance",
    price: 320,
    image: "https://shirohanaflowers.com/cdn/shop/files/EXQ.webp?v=1749115669",
    badge: null,
    category: "new",
  },
  {
    id: 6,
    name: "White Lily",
    price: 175,
    image: "https://shirohanaflowers.com/cdn/shop/files/Blush.jpg?v=1749115905",
    badge: "sale",
    category: "featured",
  },
  {
    id: 7,
    name: "Monstera Plant",
    price: 89,
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=500&q=80",
    badge: null,
    category: "featured",
  },
  {
    id: 8,
    name: "Succulent Set",
    price: 65,
    image:
      "https://images.unsplash.com/photo-1459156212016-c812468e2115?w=500&q=80",
    badge: "new",
    category: "featured",
  },
  {
    id: 9,
    name: "Cherry Blossom",
    price: 210,
    image:
      "https://shirohanaflowers.com/cdn/shop/files/BGF-red_web_images_01.jpg?v=1749115639",
    badge: null,
    category: "featured",
  },
  {
    id: 10,
    name: "Fiddle Leaf Fig",
    price: 120,
    image: "https://shirohanaflowers.com/cdn/shop/files/BRB.webp?v=1749115663",
    badge: "sale",
    category: "sellers",
  },
  {
    id: 11,
    name: "Mixed Bouquet",
    price: 155,
    image: "https://shirohanaflowers.com/cdn/shop/files/PC.jpg?v=1749115754",
    badge: null,
    category: "sellers",
  },
  {
    id: 12,
    name: "Peace Lily",
    price: 78,
    image:
      "https://shirohanaflowers.com/cdn/shop/files/BGF-red_web_images_01.jpg?v=1749115639",
    badge: "new",
    category: "sellers",
  },
];

// CSS class lists used to mark a featured tab as active / inactive
const TAB_ACTIVE = ["text-brand", "border-brand"];
const TAB_INACTIVE = ["text-gray-500", "border-transparent"];

// Inline SVG used to render a single star for ratings
const starSvg = `<svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>`;

// Return HTML for a 5-star rating bar (visually static)
function renderStars() {
  return `<div class="flex justify-center gap-0.5 text-amber-400 text-xs mb-2" aria-label="5 out of 5 stars">${starSvg.repeat(5)}</div>`;
}

// Build the HTML for a single product card.
// - `product`: object from `products`
// - `showActions`: if true,i will  show action buttons (wishlist/quick view/cart)
function renderProductCard(product, showActions = false) {
  const badgeHtml = product.badge
    ? `<span class="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-sm text-white ${product.badge === "sale" ? "bg-brand" : "bg-gray-900"}">${product.badge}</span>`
    : "";
  const actionsHtml = showActions
    ? `<div class="absolute right-3 top-1/2 -translate-y-1/2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button type="button" class="w-9 h-9 bg-white rounded-full flex items-center justify-center text-gray-600 hover:bg-brand hover:text-white shadow-md border-0 cursor-pointer transition-colors" aria-label="Add to wishlist">
<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye-icon lucide-eye"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>        </button>
        <button type="button" class="w-9 h-9 bg-white rounded-full flex items-center justify-center text-gray-600 hover:bg-brand hover:text-white shadow-md border-0 cursor-pointer transition-colors" aria-label="Quick view">
<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-plus-icon lucide-heart-plus"><path d="m14.479 19.374-.971.939a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5a5.2 5.2 0 0 1-.219 1.49"/><path d="M15 15h6"/><path d="M18 12v6"/></svg>        </button>
        <button type="button" class="w-9 h-9 bg-white rounded-full flex items-center justify-center text-gray-600 hover:bg-brand hover:text-white shadow-md border-0 cursor-pointer transition-colors" aria-label="Add to cart">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
        </button>
      </div>`
    : "";

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
  // Populate the "new products" and "featured" grids on page load
  const newGrid = document.getElementById("new-products-grid");
  const featuredGrid = document.getElementById("featured-grid");

  if (newGrid) {
    newGrid.innerHTML = products
      .slice(0, 4)
      .map((p, i) => renderProductCard(p, i === 1))
      .join("");
  }

  if (featuredGrid) {
    renderFeatured("all");
  }
}

function renderFeatured(filter) {
  // Render up to 8 featured products matching `filter` ("all" or category)
  const grid = document.getElementById("featured-grid");
  if (!grid) return;

  const filtered =
    filter === "all"
      ? products.slice(0, 8)
      : products.filter((p) => p.category === filter).slice(0, 8);

  grid.innerHTML = filtered.map((p) => renderProductCard(p)).join("");
}

function setTabActive(tab) {
  // Toggle active/inactive classes for all featured tabs and mark the selected one
  document.querySelectorAll("#featured-tabs .featured-tab").forEach((t) => {
    t.classList.remove(...TAB_ACTIVE);
    t.classList.add(...TAB_INACTIVE);
    t.setAttribute("aria-selected", "false");
  });
  tab.classList.remove(...TAB_INACTIVE);
  tab.classList.add(...TAB_ACTIVE);
  tab.setAttribute("aria-selected", "true");
}

/* Initialize hero carousel (Swiper.js) with fade + subtle zoom effect */
function initHeroSlider() {
  const heroEl = document.querySelector(".hero-swiper");
  if (!heroEl) return;

  new Swiper(".hero-swiper", {
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    pagination: {
      el: ".hero-swiper .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".hero-swiper .swiper-button-next",
      prevEl: ".hero-swiper .swiper-button-prev",
    },
    on: {
      slideChangeTransitionStart: function () {
        // Reset all slide-bg transforms for the zoom effect
        document.querySelectorAll(".hero-swiper .slide-bg").forEach((bg) => {
          bg.style.transform = "scale(1)";
        });
      },
      slideChangeTransitionEnd: function () {
        // Trigger zoom on the active slide background
        const activeBg = document.querySelector(
          ".hero-swiper .swiper-slide-active .slide-bg",
        );
        if (activeBg) {
          activeBg.style.transform = "scale(1.08)";
        }
      },
    },
  });
}

/* Simple testimonial slider (no external lib) */
function initTestimonialSlider() {
  const slides = document.querySelectorAll(".testimonial-slide");
  const prevBtn = document.getElementById("testimonial-prev");
  const nextBtn = document.getElementById("testimonial-next");
  if (!slides.length) return;

  let current = 0;

  function goTo(index) {
    slides[current].classList.add("hidden");
    current = (index + slides.length) % slides.length;
    slides[current].classList.remove("hidden");
  }

  prevBtn?.addEventListener("click", () => goTo(current - 1));
  nextBtn?.addEventListener("click", () => goTo(current + 1));
}

/* Featured tabs: wire up click handlers to filter products */
function initTabs() {
  const tabs = document.querySelectorAll("#featured-tabs .featured-tab");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      setTabActive(tab);
      renderFeatured(tab.dataset.filter);
    });
  });
}

/* Mobile menu toggle and link handling */
function initMobileMenu() {
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("mobile-nav");
  const iconOpen = document.getElementById("menu-icon-open");
  const iconClose = document.getElementById("menu-icon-close");

  toggle?.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("hidden") === false;
    toggle.setAttribute("aria-expanded", String(isOpen));
    iconOpen?.classList.toggle("hidden", isOpen);
    iconClose?.classList.toggle("hidden", !isOpen);
  });

  nav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.add("hidden");
      toggle.setAttribute("aria-expanded", "false");
      iconOpen?.classList.remove("hidden");
      iconClose?.classList.add("hidden");
    });
  });
}

/* Add/remove header shadow based on page scroll position */
function initHeaderScroll() {
  const header = document.getElementById("header");
  window.addEventListener(
    "scroll",
    () => {
      header?.classList.toggle("shadow-md", window.scrollY > 10);
    },
    { passive: true },
  );
}

/* Newsletter form: show a brief confirmation message on submit */
function initNewsletter() {
  const form = document.getElementById("newsletter-form");
  const msg = document.getElementById("newsletter-msg");

  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    msg?.classList.remove("hidden");
    form.reset();
    setTimeout(() => msg?.classList.add("hidden"), 4000);
  });
}

// Entry point — initialize all UI modules after DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  initProducts();
  initHeroSlider();
  initTestimonialSlider();
  initTabs();
  initMobileMenu();
  initHeaderScroll();
  initNewsletter();
});
