// js/app.js
/* =========================================================
   Navbar interactions (mobile toggle)
   - Toggle .is-open on the mobile menu
   - Update aria-expanded for accessibility
   - Close menu when clicking a mobile link
   - Close menu when pressing Escape
   ========================================================= */

const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector("#mobile-menu");

/* Safety: if elements are missing, do nothing */
if (hamburger && mobileMenu) {
    // Helper: open/close based on boolean
    const setMenuState = (isOpen) => {
        mobileMenu.classList.toggle("is-open", isOpen);
        hamburger.setAttribute("aria-expanded", String(isOpen));
        hamburger.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    };

    // Toggle on hamburger click
    hamburger.addEventListener("click", () => {
        const isOpen = mobileMenu.classList.contains("is-open");
        setMenuState(!isOpen);
    });

    // Close menu when clicking any link inside the mobile menu
    mobileMenu.addEventListener("click", (e) => {
        const target = e.target;

        // If user clicked a link, close menu (better UX)
        if (target && target.matches("a")) {
            setMenuState(false);
        }
    });

    // Close menu when pressing Escape
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            setMenuState(false);
        }
    });

    // Optional: if screen is resized back to desktop, ensure menu is closed
    window.addEventListener("resize", () => {
        if (window.innerWidth > 992) {
            setMenuState(false);
        }
    });
}
/* ================= HERO BACKGROUND SLIDESHOW =================
   - Uses two layers (.hero__bg--a / .hero__bg--b)
   - Crossfades by toggling .is-active
   - Replace image paths with your own project photos later
============================================================== */

const bgA = document.querySelector(".hero__bg--a");
const bgB = document.querySelector(".hero__bg--b");

if (bgA && bgB) {
    // Put your real images in /assets/hero/ and update paths here
    const images = [
        "./assets/imgs/gallery1.jpeg",
        "./assets/imgs/gallery2.jpeg",
        "./assets/imgs/gallery3.jpeg"
    ];

    let index = 0;
    let showingA = true;

    // Preload images (prevents flashing)
    images.forEach((src) => {
        const img = new Image();
        img.src = src;
    });

    // Initialize first image
    bgA.style.backgroundImage = `url("${images[index]}")`;
    bgA.classList.add("is-active");

    setInterval(() => {
        index = (index + 1) % images.length;

        const nextLayer = showingA ? bgB : bgA;
        const currentLayer = showingA ? bgA : bgB;

        // Set new image on hidden layer then fade it in
        nextLayer.style.backgroundImage = `url("${images[index]}")`;
        nextLayer.classList.add("is-active");
        currentLayer.classList.remove("is-active");

        showingA = !showingA;
    }, 5000); // change every 5 seconds
}
/* =========================================================
   PROJECT DATA (single source of truth)
   - Add / remove projects here only
   - Each project has:
     id, title, category, tag, location, cover, gallery[]
========================================================= */

const PROJECTS = [
    {
        id: "meadows-6-villa-2",
        title: "Meadows 6 • Street 5 • Villa 2",
        category: "villa",
        tag: "Villa",
        location: "Dubai",
        cover: "./assets/imgs/projects/Meadows_6_Street_5_Villa_2/meadows6-cover.png",
        subtitle: "Luxury villa execution with refined finishing and clarity-driven site coordination.",
        facts: ["Villa", "Premium Finishing", "Dubai"],
        gallery: [
            "./assets/imgs/projects/Meadows_6_Street_5_Villa_2/meadows6-1.jpeg",
            "./assets/imgs/projects/Meadows_6_Street_5_Villa_2/meadows6-2.jpeg",
            "./assets/imgs/projects/Meadows_6_Street_5_Villa_2/meadows6-3.jpeg",
            "./assets/imgs/projects/Meadows_6_Street_5_Villa_2/meadows6-4.jpeg",
            "./assets/imgs/projects/Meadows_6_Street_5_Villa_2/meadows6-5.jpeg",
            "./assets/imgs/projects/Meadows_6_Street_5_Villa_2/meadows6-6.jpeg",
            "./assets/imgs/projects/Meadows_6_Street_5_Villa_2/meadows6-7.jpeg",
            "./assets/imgs/projects/Meadows_6_Street_5_Villa_2/meadows6-8.jpeg",
            "./assets/imgs/projects/Meadows_6_Street_5_Villa_2/meadows6-9.jpeg",
            "./assets/imgs/projects/Meadows_6_Street_5_Villa_2/meadows6-10.jpeg",
            "./assets/imgs/projects/Meadows_6_Street_5_Villa_2/meadows6-11.jpeg",
            "./assets/imgs/projects/Meadows_6_Street_5_Villa_2/meadows6-12.jpeg",
            "./assets/imgs/projects/Meadows_6_Street_5_Villa_2/meadows6-13.jpeg",
            "./assets/imgs/projects/Meadows_6_Street_5_Villa_2/meadows6-14.jpeg",
            "./assets/imgs/projects/Meadows_6_Street_5_Villa_2/meadows6-15.jpeg",
            "./assets/imgs/projects/Meadows_6_Street_5_Villa_2/meadows6-16.jpeg",
            "./assets/imgs/projects/Meadows_6_Street_5_Villa_2/meadows6-20.jpeg",
            "./assets/imgs/projects/Meadows_6_Street_5_Villa_2/meadows6-21.jpeg",
            "./assets/imgs/projects/Meadows_6_Street_5_Villa_2/meadows6-22.jpeg",
            "./assets/imgs/projects/Meadows_6_Street_5_Villa_2/meadows6-23.jpeg"

        ]
    },
    {
        id: "sienna-views-villa-25",
        title: "Villa 25 • Sienna Views (JGE)",
        category: "renovation",
        tag: "Renovation",
        location: "JGE",
        cover: "./assets/imgs/projects/sienna-cover.jpg",
        subtitle: "Renovation focused on craftsmanship, modern upgrades, and luxury detailing.",
        facts: ["Renovation", "High-End Detailing", "JGE"],
        gallery: [
            "./assets/imgs/projects/sienna-1.jpg",
            "./assets/imgs/projects/sienna-2.jpg",
            "./assets/imgs/projects/sienna-3.jpg",
            "./assets/imgs/projects/sienna-4.jpg"
        ]
    },
    {
        id: "green-community-west",
        title: "Green Community West",
        category: "fitout",
        tag: "Fit-Out",
        location: "Dubai",
        cover: "./assets/imgs/projects/Villa_2003_Green_Community_West/green-cover.jpeg",
        subtitle: "Turnkey fit-out execution with consistent quality control and premium materials.",
        facts: ["Fit-Out", "Turnkey", "Dubai"],
        gallery: [
            "./assets/imgs/projects/Villa_2003_Green_Community_West/green-1.jpeg",
            "./assets/imgs/projects/Villa_2003_Green_Community_West/green-1.jpeg",
            "./assets/imgs/projects/Villa_2003_Green_Community_West/green-2.jpeg",
            "./assets/imgs/projects/Villa_2003_Green_Community_West/green-3.jpeg",
            "./assets/imgs/projects/Villa_2003_Green_Community_West/green-4.jpeg",
            "./assets/imgs/projects/Villa_2003_Green_Community_West/green-5.jpeg",
            "./assets/imgs/projects/Villa_2003_Green_Community_West/green-6.jpeg",
            "./assets/imgs/projects/Villa_2003_Green_Community_West/green-7.jpeg",
            "./assets/imgs/projects/Villa_2003_Green_Community_West/green-8.jpeg",
            "./assets/imgs/projects/Villa_2003_Green_Community_West/green-9.jpeg",
            "./assets/imgs/projects/Villa_2003_Green_Community_West/green-10.jpeg",
            "./assets/imgs/projects/Villa_2003_Green_Community_West/green-11.jpeg",
            "./assets/imgs/projects/Villa_2003_Green_Community_West/green-12.jpeg",
            "./assets/imgs/projects/Villa_2003_Green_Community_West/green-13.jpeg",
            "./assets/imgs/projects/Villa_2003_Green_Community_West/green-14.jpeg",
            "./assets/imgs/projects/Villa_2003_Green_Community_West/green-15.jpeg",
            "./assets/imgs/projects/Villa_2003_Green_Community_West/green-16.jpeg",
            "./assets/imgs/projects/Villa_2003_Green_Community_West/green-17.jpeg",
            "./assets/imgs/projects/Villa_2003_Green_Community_West/green-18.jpeg",
            "./assets/imgs/projects/Villa_2003_Green_Community_West/green-19.jpeg",
            "./assets/imgs/projects/Villa_2003_Green_Community_West/green-20.jpeg",
            "./assets/imgs/projects/Villa_2003_Green_Community_West/green-21.jpeg",
            "./assets/imgs/projects/Villa_2003_Green_Community_West/green-22.jpeg",
            "./assets/imgs/projects/Villa_2003_Green_Community_West/green-23.jpeg",
            "./assets/imgs/projects/Villa_2003_Green_Community_West/green-24.jpeg",
            "./assets/imgs/projects/Villa_2003_Green_Community_West/green-25.jpeg",
            "./assets/imgs/projects/Villa_2003_Green_Community_West/green-26.jpeg",
            "./assets/imgs/projects/Villa_2003_Green_Community_West/green-27.jpeg",
            "./assets/imgs/projects/Villa_2003_Green_Community_West/green-28.jpeg",
            "./assets/imgs/projects/Villa_2003_Green_Community_West/green-29.jpeg",
            "./assets/imgs/projects/Villa_2003_Green_Community_West/green-30.jpeg",
            "./assets/imgs/projects/Villa_2003_Green_Community_West/green-33.jpeg",
            "./assets/imgs/projects/Villa_2003_Green_Community_West/green-34.jpeg",
            "./assets/imgs/projects/Villa_2003_Green_Community_West/green-35.jpeg",
            "./assets/imgs/projects/Villa_2003_Green_Community_West/green-36.jpeg",
            "./assets/imgs/projects/Villa_2003_Green_Community_West/green-37.jpeg",
            "./assets/imgs/projects/Villa_2003_Green_Community_West/green-38.jpeg",
            "./assets/imgs/projects/Villa_2003_Green_Community_West/green-39.jpeg",
            "./assets/imgs/projects/Villa_2003_Green_Community_West/green-40.jpeg",
            "./assets/imgs/projects/Villa_2003_Green_Community_West/green-41.jpeg",
            "./assets/imgs/projects/Villa_2003_Green_Community_West/green-42.jpeg",
            "./assets/imgs/projects/Villa_2003_Green_Community_West/green-43.jpeg",
            "./assets/imgs/projects/Villa_2003_Green_Community_West/green-44.jpeg",
            "./assets/imgs/projects/Villa_2003_Green_Community_West/green-45.jpeg",
            "./assets/imgs/projects/Villa_2003_Green_Community_West/green-46.jpeg",

        ]
    },
    {
        id: "landscaping-outdoor-living",
        title: "Outdoor Living & Landscaping",
        category: "exterior",
        tag: "Exterior",
        location: "UAE",
        cover: "./assets/imgs/projects/land-cover.jpg",
        subtitle: "Exterior spaces designed for luxury lifestyle — clean lines, lighting, and flow.",
        facts: ["Exterior", "Landscaping", "UAE"],
        gallery: [
            "./assets/imgs/projects/land-1.jpg",
            "./assets/imgs/projects/land-2.jpg",
            "./assets/imgs/projects/land-3.jpg"
        ]
    }
];

/* =========================================================
   PORTFOLIO (index.html) rendering + filters
========================================================= */

const portfolioGrid = document.querySelector("#portfolio-grid");
const filterChips = document.querySelectorAll(".portfolio__chip");

function renderPortfolio(filter = "all") {
    if (!portfolioGrid) return;

    const list = PROJECTS.filter((p) => filter === "all" ? true : p.category === filter);

    // Simple empty state
    if (!list.length) {
        portfolioGrid.innerHTML = `<p style="text-align:center;color:rgba(13,27,27,0.72)">No projects found.</p>`;
        return;
    }

    portfolioGrid.innerHTML = list.map((p) => `
      <article class="pcard" data-category="${p.category}">
        <div class="pcard__media">
          <img src="${p.cover}" alt="${p.title} cover image" loading="lazy" />
        </div>
  
        <div class="pcard__body">
          <div class="pcard__top">
            <h3 class="pcard__title">${p.title}</h3>
            <span class="pcard__tag">${p.tag}</span>
          </div>
          <p class="pcard__meta">${p.location} • ${p.subtitle}</p>
          <div class="pcard__actions">
            <a class="pcard__link" href="./project.html?id=${encodeURIComponent(p.id)}">View Project</a>
          </div>
        </div>
      </article>
    `).join("");
}

if (portfolioGrid) {
    renderPortfolio("all");

    filterChips.forEach((chip) => {
        chip.addEventListener("click", () => {
            filterChips.forEach(c => {
                c.classList.remove("is-active");
                c.setAttribute("aria-selected", "false");
            });

            chip.classList.add("is-active");
            chip.setAttribute("aria-selected", "true");

            const filter = chip.dataset.filter || "all";
            renderPortfolio(filter);
        });
    });
}

/* =========================================================
   PROJECT PAGE (project.html)
   - Reads ?id= from URL
   - Builds hero + facts + gallery
   - Lightbox viewer
========================================================= */

function getQueryParam(name) {
    const url = new URL(window.location.href);
    return url.searchParams.get(name);
}

const projectId = getQueryParam("id");
const project = PROJECTS.find((p) => p.id === projectId);

// Elements exist only on project.html
const heroBg = document.querySelector("#project-hero-bg");
const titleEl = document.querySelector("#project-title");
const subEl = document.querySelector("#project-subtitle");
const factsEl = document.querySelector("#project-facts");
const galleryEl = document.querySelector("#project-gallery");

// Lightbox
const lightbox = document.querySelector("#lightbox");
const lightboxImg = document.querySelector("#lightbox-img");
const lightboxClose = document.querySelector(".lightbox__close");

function openLightbox(src) {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = src;
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
}

function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
}

if (heroBg && titleEl && subEl && factsEl && galleryEl) {
    // If missing id or invalid id, fallback to first project
    const p = project || PROJECTS[0];

    // Hero
    heroBg.style.backgroundImage = `url("${p.cover}")`;
    titleEl.textContent = p.title;
    subEl.textContent = p.subtitle;

    // Facts pills
    factsEl.innerHTML = (p.facts || []).map((f) => `<span class="pfacts__pill">${f}</span>`).join("");

    // Gallery
    const gallery = p.gallery && p.gallery.length ? p.gallery : [p.cover];

    galleryEl.innerHTML = gallery.map((src) => `
      <div class="pimg" data-src="${src}">
        <img src="${src}" alt="${p.title} photo" loading="lazy" />
      </div>
    `).join("");

    // Click to open lightbox
    galleryEl.addEventListener("click", (e) => {
        const card = e.target.closest(".pimg");
        if (!card) return;
        const src = card.getAttribute("data-src");
        if (src) openLightbox(src);
    });

    // Close handlers
    if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
    if (lightbox) {
        lightbox.addEventListener("click", (e) => {
            // Clicking outside image closes
            if (e.target === lightbox) closeLightbox();
        });
    }
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeLightbox();
    });
}
