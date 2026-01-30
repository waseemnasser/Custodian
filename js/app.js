// js/app.js

/* =========================================================
   Navbar interactions (mobile toggle)
========================================================= */
const wnHamburger = document.querySelector(".wn-hamburger");
const wnMobileMenu = document.querySelector("#wn-mobile-menu");

if (wnHamburger && wnMobileMenu) {
    const wnSetMenuState = (isOpen) => {
        wnMobileMenu.classList.toggle("wn-is-open", isOpen);
        wnHamburger.setAttribute("aria-expanded", String(isOpen));
        wnHamburger.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    };

    wnHamburger.addEventListener("click", () => {
        const isOpen = wnMobileMenu.classList.contains("wn-is-open");
        wnSetMenuState(!isOpen);
    });

    wnMobileMenu.addEventListener("click", (e) => {
        const target = e.target;
        if (target && target.matches("a")) wnSetMenuState(false);
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") wnSetMenuState(false);
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 992) wnSetMenuState(false);
    });
}

/* =========================================================
   HERO BACKGROUND SLIDESHOW
========================================================= */
const wnBgA = document.querySelector(".wn-hero__bg--a");
const wnBgB = document.querySelector(".wn-hero__bg--b");

if (wnBgA && wnBgB) {
    const images = [
        "./assets/imgs/gallery1.jpeg",
        "./assets/imgs/gallery2.jpeg",
        "./assets/imgs/gallery3.jpeg",
    ];

    let index = 0;
    let showingA = true;

    images.forEach((src) => {
        const img = new Image();
        img.src = src;
    });

    wnBgA.style.backgroundImage = `url("${images[index]}")`;
    wnBgA.classList.add("wn-is-active");

    setInterval(() => {
        index = (index + 1) % images.length;

        const nextLayer = showingA ? wnBgB : wnBgA;
        const currentLayer = showingA ? wnBgA : wnBgB;

        nextLayer.style.backgroundImage = `url("${images[index]}")`;
        nextLayer.classList.add("wn-is-active");
        currentLayer.classList.remove("wn-is-active");

        showingA = !showingA;
    }, 5000);
}

/* =========================================================
   PROJECT DATA (single source of truth)
========================================================= */
const PROJECTS = [
    {
        id: "meadows-6-villa",
        title: "Meadows 6 • Villa",
        category: "residential",
        tag: "Luxury Villa",
        location: "Dubai",
        cover: "./assets/imgs/projects/Meadows_6_Street_5_Villa_2/meadows6-cover.png",
        subtitle: "High-end residential villa executed with refined detailing and premium finishes.",
        facts: ["Residential", "Luxury Villa", "Premium Finishing", "Dubai"],
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
            "./assets/imgs/projects/Meadows_6_Street_5_Villa_2/meadows6-23.jpeg",
        ],
    },
    {
        id: "sienna-views-villa",
        title: "Sienna Views • Villa Renovation",
        category: "residential",
        tag: "Renovation",
        location: "Jumeirah Golf Estates",
        cover: "./assets/imgs/projects/sienna-cover.jpg",
        subtitle: "Luxury villa renovation blending modern upgrades with elegant craftsmanship.",
        facts: ["Residential", "Renovation", "Luxury Villa", "JGE"],
        gallery: [
            "./assets/imgs/projects/sienna-1.jpg",
            "./assets/imgs/projects/sienna-2.jpg",
            "./assets/imgs/projects/sienna-3.jpg",
            "./assets/imgs/projects/sienna-4.jpg",
        ],
    },
    {
        id: "green-community-west-villa",
        title: "Green Community West • Villa Fit-Out",
        category: "residential",
        tag: "Fit-Out",
        location: "Dubai",
        cover: "./assets/imgs/projects/Villa_2003_Green_Community_West/green-cover.jpeg",
        subtitle: "Turnkey villa fit-out delivered with consistent quality control and premium materials.",
        facts: ["Residential", "Fit-Out", "Turnkey", "Dubai"],
        gallery: [
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
            "./assets/imgs/projects/Villa_2003_Green_Community_West/green-46.jpeg",
        ],
    },
    {
        id: "reef-winter-garden",
        title: "Reef • Winter Garden & Outdoor Living",
        category: "landscape",
        tag: "Landscape",
        location: "Dubai",
        cover: "./assets/imgs/projects/reef-winter-cover.jpg",
        subtitle: "Bespoke winter garden with integrated landscaping, lighting, and outdoor living features.",
        facts: ["Landscape", "Winter Garden", "Outdoor Living", "Dubai"],
        gallery: [
            "./assets/imgs/projects/reef-1.jpg",
            "./assets/imgs/projects/reef-2.jpg",
            "./assets/imgs/projects/reef-3.jpg",
            "./assets/imgs/projects/reef-4.jpg",
        ],
    },
    {
        id: "outdoor-living-landscape",
        title: "Outdoor Living & Landscaping Collection",
        category: "landscape",
        tag: "Landscape",
        location: "UAE",
        cover: "./assets/imgs/projects/land-cover.jpg",
        subtitle: "A curated selection of luxury outdoor spaces designed for lifestyle and longevity.",
        facts: ["Landscape", "Outdoor Living", "UAE"],
        gallery: [
            "./assets/imgs/projects/land-1.jpg",
            "./assets/imgs/projects/land-2.jpg",
            "./assets/imgs/projects/land-3.jpg",
        ],
    },
];

/* =========================================================
   PORTFOLIO (index.html) rendering + filters
========================================================= */
const wnPortfolioGrid = document.querySelector("#wn-portfolio-grid");
const wnFilterChips = document.querySelectorAll(".wn-portfolio__chip");

function wnRenderPortfolio(filter = "all") {
    if (!wnPortfolioGrid) return;

    const list = PROJECTS.filter((p) => (filter === "all" ? true : p.category === filter));

    if (!list.length) {
        wnPortfolioGrid.innerHTML = `<p style="text-align:center;color:rgba(13,27,27,0.72)">No projects found.</p>`;
        return;
    }

    wnPortfolioGrid.innerHTML = list
        .map(
            (p) => `
      <article class="wn-pcard" data-category="${p.category}">
        <div class="wn-pcard__media">
          <img src="${p.cover}" alt="${p.title} cover image" loading="lazy" />
        </div>

        <div class="wn-pcard__body">
          <div class="wn-pcard__top">
            <h3 class="wn-pcard__title">${p.title}</h3>
            <span class="wn-pcard__tag">${p.tag}</span>
          </div>

          <p class="wn-pcard__meta">${p.location} • ${p.subtitle}</p>

          <div class="wn-pcard__actions">
            <a class="wn-pcard__link" href="./project.html?id=${encodeURIComponent(p.id)}">View Project</a>
          </div>
        </div>
      </article>
    `
        )
        .join("");
}

if (wnPortfolioGrid) {
    wnRenderPortfolio("all");

    wnFilterChips.forEach((chip) => {
        chip.addEventListener("click", () => {
            wnFilterChips.forEach((c) => {
                c.classList.remove("wn-is-active");
                c.setAttribute("aria-selected", "false");
            });

            chip.classList.add("wn-is-active");
            chip.setAttribute("aria-selected", "true");

            const filter = chip.dataset.filter || "all";
            wnRenderPortfolio(filter);
        });
    });
}

/* =========================================================
   PROJECT PAGE (project.html)
========================================================= */
function wnGetQueryParam(name) {
    const url = new URL(window.location.href);
    return url.searchParams.get(name);
}

const projectId = wnGetQueryParam("id");
const project = PROJECTS.find((p) => p.id === projectId);

const wnHeroBg = document.querySelector("#wn-project-hero-bg");
const wnTitleEl = document.querySelector("#wn-project-title");
const wnSubEl = document.querySelector("#wn-project-subtitle");
const wnFactsEl = document.querySelector("#wn-project-facts");
const wnGalleryEl = document.querySelector("#wn-project-gallery");

const wnLightbox = document.querySelector("#wn-lightbox");
const wnLightboxImg = document.querySelector("#wn-lightbox-img");
const wnLightboxClose = document.querySelector(".wn-lightbox__close");

function wnOpenLightbox(src) {
    if (!wnLightbox || !wnLightboxImg) return;
    wnLightboxImg.src = src;
    wnLightbox.classList.add("wn-is-open");
    wnLightbox.setAttribute("aria-hidden", "false");
}

function wnCloseLightbox() {
    if (!wnLightbox) return;
    wnLightbox.classList.remove("wn-is-open");
    wnLightbox.setAttribute("aria-hidden", "true");
}

if (wnHeroBg && wnTitleEl && wnSubEl && wnFactsEl && wnGalleryEl) {
    const p = project || PROJECTS[0];

    wnHeroBg.style.backgroundImage = `url("${p.cover}")`;
    wnTitleEl.textContent = p.title;
    wnSubEl.textContent = p.subtitle;

    wnFactsEl.innerHTML = (p.facts || []).map((f) => `<span class="wn-pfacts__pill">${f}</span>`).join("");

    const gallery = p.gallery && p.gallery.length ? p.gallery : [p.cover];

    wnGalleryEl.innerHTML = gallery
        .map(
            (src) => `
      <div class="wn-pimg" data-src="${src}">
        <img src="${src}" alt="${p.title} photo" loading="lazy" />
      </div>
    `
        )
        .join("");

    wnGalleryEl.addEventListener("click", (e) => {
        const card = e.target.closest(".wn-pimg");
        if (!card) return;
        const src = card.getAttribute("data-src");
        if (src) wnOpenLightbox(src);
    });

    if (wnLightboxClose) wnLightboxClose.addEventListener("click", wnCloseLightbox);
    if (wnLightbox) {
        wnLightbox.addEventListener("click", (e) => {
            if (e.target === wnLightbox) wnCloseLightbox();
        });
    }
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") wnCloseLightbox();
    });
}

/* =========================================================
   BEFORE & AFTER (Curtain Reveal)
========================================================= */
function wnClamp(n, min, max) {
    return Math.max(min, Math.min(max, n));
}

function wnInitBeforeAfterCurtain() {
    const frames = document.querySelectorAll("[data-wn-ba]");

    frames.forEach((frame) => {
        const curtain = frame.querySelector(".wn-ba__curtain");
        const handle = frame.querySelector(".wn-ba__handle");
        if (!curtain || !handle) return;

        let ratio = 0.5;
        let dragging = false;

        const setRatio = (r) => {
            ratio = wnClamp(r, 0, 1);
            const pct = (ratio * 100).toFixed(2) + "%";
            curtain.style.width = pct;
            handle.style.left = pct;
        };

        const ratioFromClientX = (clientX) => {
            const rect = frame.getBoundingClientRect();
            const x = clientX - rect.left;
            return rect.width ? x / rect.width : 0.5;
        };

        const onPointerDown = (e) => {
            dragging = true;
            frame.setPointerCapture?.(e.pointerId);
            setRatio(ratioFromClientX(e.clientX));
        };

        const onPointerMove = (e) => {
            if (!dragging) return;
            setRatio(ratioFromClientX(e.clientX));
        };

        const endDrag = () => {
            dragging = false;
        };

        setRatio(ratio);

        frame.addEventListener("pointerdown", onPointerDown);
        frame.addEventListener("pointermove", onPointerMove);
        frame.addEventListener("pointerup", endDrag);
        frame.addEventListener("pointercancel", endDrag);
        frame.addEventListener("pointerleave", endDrag);
    });
}

wnInitBeforeAfterCurtain();

/* =========================================================
   CREDENTIALS MODAL (document preview)
========================================================= */
(function wnInitCredentialsModal() {
    const modal = document.querySelector("#wn-cred-modal");
    const modalImg = document.querySelector("#wn-cred-modal-img");
    const modalTitle = document.querySelector("#wn-cred-modal-title");

    if (!modal || !modalImg || !modalTitle) return;

    const open = (src, title) => {
        modalImg.src = src;
        modalTitle.textContent = title || "Document";
        modal.classList.add("wn-is-open");
        modal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
    };

    const close = () => {
        modal.classList.remove("wn-is-open");
        modal.setAttribute("aria-hidden", "true");
        modalImg.src = "";
        document.body.style.overflow = "";
    };

    document.addEventListener("click", (e) => {
        const btn = e.target.closest(".wn-cred__btn");
        if (!btn) return;

        const src = btn.getAttribute("data-wn-doc");
        const title = btn.getAttribute("data-wn-title");
        if (!src) return;

        open(src, title);
    });

    modal.addEventListener("click", (e) => {
        const closeTarget = e.target.closest("[data-wn-close='true']");
        if (closeTarget) close();
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal.classList.contains("wn-is-open")) {
            close();
        }
    });
})();
