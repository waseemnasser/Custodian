// js/app.js

/* =========================================================
   Navbar interactions (mobile toggle)
========================================================= */
/* =========================================================
   LUXURY MOBILE NAVBAR INTERACTIONS
   ========================================================= */
/* =========================================================
   LUXURY MOBILE NAVBAR INTERACTIONS
   ========================================================= */
/* =========================================================
   LUXURY MOBILE NAVBAR INTERACTIONS
   ========================================================= */
(function initLuxuryMobileNav() {
    const wnHamburger = document.querySelector(".wn-hamburger");
    const wnMobileMenu = document.querySelector("#wn-mobile-menu");
    const wnCloseBtn = document.querySelector(".wn-mobile-menu__close");
    const wnMobileLinks = document.querySelectorAll(".wn-mobile-menu__link");

    if (!wnHamburger || !wnMobileMenu) {
        console.error("Mobile menu elements not found!");
        return;
    }

    // Toggle menu
    const toggleMobileMenu = (isOpen) => {
        if (isOpen) {
            wnMobileMenu.classList.add("wn-is-open");
            wnHamburger.classList.add("wn-is-open");
            document.body.classList.add("wn-no-scroll");
            wnHamburger.setAttribute("aria-expanded", "true");
            wnHamburger.setAttribute("aria-label", "Close menu");

            // Disable scrolling on body
            document.body.style.overflow = "hidden";
            document.body.style.position = "fixed";
            document.body.style.width = "100%";
        } else {
            wnMobileMenu.classList.remove("wn-is-open");
            wnHamburger.classList.remove("wn-is-open");
            document.body.classList.remove("wn-no-scroll");
            wnHamburger.setAttribute("aria-expanded", "false");
            wnHamburger.setAttribute("aria-label", "Open menu");

            // Re-enable scrolling
            document.body.style.overflow = "";
            document.body.style.position = "";
            document.body.style.width = "";
        }
    };

    // Open menu
    wnHamburger.addEventListener("click", (e) => {
        e.stopPropagation();
        const isOpen = wnHamburger.classList.contains("wn-is-open");
        toggleMobileMenu(!isOpen);
    });

    // Close menu with close button
    if (wnCloseBtn) {
        wnCloseBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            toggleMobileMenu(false);
        });
    }

    // Close menu when clicking links AND scroll to section
    wnMobileLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); // Prevent default anchor behavior

            const href = link.getAttribute("href");
            if (!href || href === "#") return;

            // Close the mobile menu
            toggleMobileMenu(false);

            // Allow time for menu to close before scrolling
            setTimeout(() => {
                // Check if it's an anchor link (starts with #)
                if (href.startsWith("#")) {
                    const targetId = href.substring(1);
                    const targetElement = document.getElementById(targetId);

                    if (targetElement) {
                        // Smooth scroll to the target element
                        targetElement.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });

                        // Update URL without page jump
                        window.history.pushState(null, null, href);
                    }
                } else {
                    // It's a regular link, navigate normally
                    window.location.href = href;
                }
            }, 400); // Match this with your CSS transition duration
        });
    });

    // Close with Escape key
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && wnHamburger.classList.contains("wn-is-open")) {
            toggleMobileMenu(false);
        }
    });

    // Close when clicking outside
    document.addEventListener("click", (e) => {
        if (wnHamburger.classList.contains("wn-is-open") &&
            !wnMobileMenu.contains(e.target) &&
            e.target !== wnHamburger &&
            !wnHamburger.contains(e.target)) {
            toggleMobileMenu(false);
        }
    });

    // Handle resize
    window.addEventListener("resize", () => {
        if (window.innerWidth > 992 && wnHamburger.classList.contains("wn-is-open")) {
            toggleMobileMenu(false);
        }
    });
})();

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
/* =========================================================
   BEFORE & AFTER (Draggable Curtain Reveal - Hold & Slide Only)
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
            // Only start dragging if clicking on the handle or very close to it
            const handleRect = handle.getBoundingClientRect();
            const clickX = e.clientX;
            const clickY = e.clientY;

            // Check if click is on handle (with some tolerance)
            const isOnHandle =
                clickX >= handleRect.left - 20 &&
                clickX <= handleRect.right + 20 &&
                clickY >= handleRect.top - 20 &&
                clickY <= handleRect.bottom + 20;

            if (!isOnHandle) {
                // Don't start dragging if not clicking near handle
                return;
            }

            e.preventDefault(); // Prevent text selection
            dragging = true;
            frame.style.cursor = 'grabbing';
            handle.style.cursor = 'grabbing';

            if (frame.setPointerCapture) {
                frame.setPointerCapture(e.pointerId);
            }

            // Update position based on initial click
            setRatio(ratioFromClientX(e.clientX));
        };

        const onPointerMove = (e) => {
            if (!dragging) return;
            e.preventDefault();
            setRatio(ratioFromClientX(e.clientX));
        };

        const endDrag = () => {
            if (!dragging) return;
            dragging = false;
            frame.style.cursor = '';
            handle.style.cursor = '';

            if (frame.releasePointerCapture) {
                frame.releasePointerCapture();
            }
        };

        // Set initial position
        setRatio(ratio);

        // Pointer events for touch and mouse
        handle.addEventListener("pointerdown", onPointerDown);
        frame.addEventListener("pointerdown", onPointerDown);

        frame.addEventListener("pointermove", onPointerMove);

        // End drag events
        document.addEventListener("pointerup", endDrag);
        document.addEventListener("pointercancel", endDrag);

        // Prevent default touch actions on handle
        handle.addEventListener("touchstart", (e) => {
            if (dragging) {
                e.preventDefault();
            }
        }, { passive: false });

        // Disable click-to-slide on the frame
        frame.addEventListener("click", (e) => {
            if (!dragging) {
                e.preventDefault();
                e.stopPropagation();
            }
        });

        // Make sure handle has proper cursor
        handle.style.cursor = 'grab';

        // Add hover effect for handle
        handle.addEventListener("mouseenter", () => {
            if (!dragging) {
                handle.style.cursor = 'grab';
            }
        });

        handle.addEventListener("mouseleave", () => {
            if (!dragging) {
                handle.style.cursor = '';
            }
        });
    });
}

wnInitBeforeAfterCurtain();