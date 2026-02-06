// js/app.js - Simplified with Working Navbar Links

/* =========================================================
   BASIC FADE-IN ANIMATIONS ONLY
   ========================================================= */
(function initSimpleAnimations() {
    // Wait for DOM to be ready
    document.addEventListener('DOMContentLoaded', function () {
        // Just fade in hero content
        const heroElements = document.querySelectorAll('.wn-hero__content > *');
        heroElements.forEach((el, i) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            setTimeout(() => {
                el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, 100 + (i * 100));
        });
    });
})();

/* =========================================================
   SIMPLE SMOOTH SCROLL FOR NAVBAR LINKS (NO GSAP)
   ========================================================= */
(function initSmoothScroll() {
    // Apply to ALL anchor links that start with #
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const href = this.getAttribute('href');

            // If it's just "#" or "#wn-top", go to top
            if (href === '#' || href === '#wn-top') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return;
            }

            // Find the target element
            const target = document.querySelector(href);
            if (!target) return;

            // Calculate position considering fixed navbar
            const navbar = document.querySelector('.wn-site-header');
            const navbarHeight = navbar ? navbar.offsetHeight : 0;
            const targetPosition = target.offsetTop - navbarHeight - 20;

            // Smooth scroll to position
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            // Update URL without page jump
            history.pushState(null, null, href);
        });
    });
})();

/* =========================================================
   MOBILE MENU TOGGLE (Keep Simple)
   ========================================================= */
(function initMobileMenu() {
    const hamburger = document.querySelector('.wn-hamburger');
    const mobileMenu = document.getElementById('wn-mobile-menu');
    const closeBtn = document.querySelector('.wn-mobile-menu__close');
    const mobileLinks = document.querySelectorAll('.wn-mobile-menu__link');

    if (!hamburger || !mobileMenu) return;

    // Toggle menu
    function toggleMenu(isOpen) {
        if (isOpen) {
            mobileMenu.classList.add('wn-is-open');
            hamburger.classList.add('wn-is-open');
            document.body.style.overflow = 'hidden';
        } else {
            mobileMenu.classList.remove('wn-is-open');
            hamburger.classList.remove('wn-is-open');
            document.body.style.overflow = '';
        }
    }

    // Hamburger click
    hamburger.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.contains('wn-is-open');
        toggleMenu(!isOpen);
    });

    // Close button
    if (closeBtn) {
        closeBtn.addEventListener('click', () => toggleMenu(false));
    }

    // Mobile links - close menu then scroll
    mobileLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = link.getAttribute('href');

            // Close menu first
            toggleMenu(false);

            // Then scroll to section
            setTimeout(() => {
                if (href && href.startsWith('#')) {
                    const target = document.querySelector(href);
                    if (target) {
                        const navbar = document.querySelector('.wn-site-header');
                        const navbarHeight = navbar ? navbar.offsetHeight : 0;
                        const targetPosition = target.offsetTop - navbarHeight - 20;

                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });

                        history.pushState(null, null, href);
                    }
                }
            }, 300);
        });
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu.classList.contains('wn-is-open')) {
            toggleMenu(false);
        }
    });
})();

/* =========================================================
   HERO BACKGROUND SLIDESHOW
========================================================= */
(function initHeroSlideshow() {
    const wnBgA = document.querySelector(".wn-hero__bg--a");
    const wnBgB = document.querySelector(".wn-hero__bg--b");

    if (!wnBgA || !wnBgB) return;

    const images = [
        "./assets/imgs/gallery1.webp",
        "./assets/imgs/gallery2.webp",
        "./assets/imgs/gallery3.webp",
    ];

    let index = 0;
    let showingA = true;

    // Preload images
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
})();

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
        cover: "./assets/imgs/projects/Meadows_6_Street_5_Villa_2/meadows6-cover.webp",
        subtitle: "High-end residential villa executed with refined detailing and premium finishes.",
        facts: ["Residential", "Luxury Villa", "Premium Finishing", "Dubai"],
        gallery: [
            "./assets/imgs/projects/Meadows_6_Street_5_Villa_2/meadows6-1.webp",
            "./assets/imgs/projects/Meadows_6_Street_5_Villa_2/meadows6-2.webp",
            "./assets/imgs/projects/Meadows_6_Street_5_Villa_2/meadows6-3.webp",
            "./assets/imgs/projects/Meadows_6_Street_5_Villa_2/meadows6-4.webp",
            "./assets/imgs/projects/Meadows_6_Street_5_Villa_2/meadows6-5.webp",
            "./assets/imgs/projects/Meadows_6_Street_5_Villa_2/meadows6-6.webp",
            "./assets/imgs/projects/Meadows_6_Street_5_Villa_2/meadows6-7.webp",
            "./assets/imgs/projects/Meadows_6_Street_5_Villa_2/meadows6-8.webp",
            "./assets/imgs/projects/Meadows_6_Street_5_Villa_2/meadows6-9.webp",
            "./assets/imgs/projects/Meadows_6_Street_5_Villa_2/meadows6-10.webp",
            "./assets/imgs/projects/Meadows_6_Street_5_Villa_2/meadows6-11.webp",
            "./assets/imgs/projects/Meadows_6_Street_5_Villa_2/meadows6-12.webp",
            "./assets/imgs/projects/Meadows_6_Street_5_Villa_2/meadows6-13.webp",
            "./assets/imgs/projects/Meadows_6_Street_5_Villa_2/meadows6-14.webp",
            "./assets/imgs/projects/Meadows_6_Street_5_Villa_2/meadows6-15.webp",
            "./assets/imgs/projects/Meadows_6_Street_5_Villa_2/meadows6-16.webp",
            "./assets/imgs/projects/Meadows_6_Street_5_Villa_2/meadows6-20.webp",
            "./assets/imgs/projects/Meadows_6_Street_5_Villa_2/meadows6-21.webp",
            "./assets/imgs/projects/Meadows_6_Street_5_Villa_2/meadows6-22.webp",
            "./assets/imgs/projects/Meadows_6_Street_5_Villa_2/meadows6-23.webp",
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
        cover: "./assets/imgs/projects/Villa_2003_Green_Community_West/green-cover.webp",
        subtitle: "Turnkey villa fit-out delivered with consistent quality control and premium materials.",
        facts: ["Residential", "Fit-Out", "Turnkey", "Dubai"],
        gallery: [
            "./assets/imgs/projects/Villa_2003_Green_Community_West/green-1.webp",
            "./assets/imgs/projects/Villa_2003_Green_Community_West/green-2.webp",
            "./assets/imgs/projects/Villa_2003_Green_Community_West/green-3.webp",
            "./assets/imgs/projects/Villa_2003_Green_Community_West/green-4.webp",
            "./assets/imgs/projects/Villa_2003_Green_Community_West/green-5.webp",
            "./assets/imgs/projects/Villa_2003_Green_Community_West/green-6.webp",
            "./assets/imgs/projects/Villa_2003_Green_Community_West/green-7.webp",
            "./assets/imgs/projects/Villa_2003_Green_Community_West/green-8.webp",
            "./assets/imgs/projects/Villa_2003_Green_Community_West/green-9.webp",
            "./assets/imgs/projects/Villa_2003_Green_Community_West/green-10.webp",
            "./assets/imgs/projects/Villa_2003_Green_Community_West/green-46.webp",
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
   PORTFOLIO FILTERING
========================================================= */
(function initPortfolio() {
    const portfolioGrid = document.getElementById('wn-portfolio-grid');
    const filterChips = document.querySelectorAll('.wn-portfolio__chip');

    if (!portfolioGrid) return;

    function renderPortfolio(filter = 'all') {
        const filtered = PROJECTS.filter(p => filter === 'all' || p.category === filter);

        if (filtered.length === 0) {
            portfolioGrid.innerHTML = '<p style="text-align:center;color:rgba(13,27,27,0.72)">No projects found.</p>';
            return;
        }

        portfolioGrid.innerHTML = filtered.map(p => `
            <article class="wn-pcard">
                <div class="wn-pcard__media">
                    <img src="${p.cover}" alt="${p.title}" loading="lazy" />
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
        `).join('');
    }

    // Initial render
    renderPortfolio('all');

    // Filter chips
    filterChips.forEach(chip => {
        chip.addEventListener('click', () => {
            // Update active state
            filterChips.forEach(c => c.classList.remove('wn-is-active'));
            chip.classList.add('wn-is-active');

            // Filter and render
            const filter = chip.getAttribute('data-filter') || 'all';
            renderPortfolio(filter);
        });
    });
})();

/* =========================================================
   PROJECT PAGE FUNCTIONALITY
========================================================= */
(function initProjectPage() {
    // Get project ID from URL
    function getProjectId() {
        const params = new URLSearchParams(window.location.search);
        return params.get('id');
    }

    const projectId = getProjectId();
    const project = PROJECTS.find(p => p.id === projectId) || PROJECTS[0];

    // Update page content if on project.html
    const heroBg = document.getElementById('wn-project-hero-bg');
    const titleEl = document.getElementById('wn-project-title');
    const subtitleEl = document.getElementById('wn-project-subtitle');
    const factsEl = document.getElementById('wn-project-facts');
    const galleryEl = document.getElementById('wn-project-gallery');

    if (heroBg && titleEl) {
        // Update page title
        document.title = `${project.title} | Custodian Building Contracting`;

        // Update hero
        heroBg.style.backgroundImage = `url("${project.cover}")`;
        titleEl.textContent = project.title;
        subtitleEl.textContent = project.subtitle;

        // Update facts
        if (factsEl) {
            factsEl.innerHTML = project.facts.map(fact =>
                `<span class="wn-pfacts__pill">${fact}</span>`
            ).join('');
        }

        // Update gallery
        if (galleryEl) {
            const gallery = project.gallery.length ? project.gallery : [project.cover];
            galleryEl.innerHTML = gallery.map(img => `
                <div class="wn-pimg">
                    <img src="${img}" alt="${project.title}" loading="lazy" />
                </div>
            `).join('');

            // Lightbox functionality
            const lightbox = document.getElementById('wn-lightbox');
            const lightboxImg = document.getElementById('wn-lightbox-img');
            const closeLightbox = document.querySelector('.wn-lightbox__close');

            if (lightbox && lightboxImg) {
                galleryEl.addEventListener('click', (e) => {
                    const img = e.target.closest('img');
                    if (img) {
                        lightboxImg.src = img.src;
                        lightbox.classList.add('wn-is-open');
                    }
                });

                // Close lightbox
                const closeLightboxFunc = () => lightbox.classList.remove('wn-is-open');

                if (closeLightbox) closeLightbox.addEventListener('click', closeLightboxFunc);
                lightbox.addEventListener('click', (e) => {
                    if (e.target === lightbox) closeLightboxFunc();
                });
                document.addEventListener('keydown', (e) => {
                    if (e.key === 'Escape') closeLightboxFunc();
                });
            }
        }
    }
})();

/* =========================================================
   PROJECT VIDEO FUNCTIONALITY
========================================================= */
/* =========================================================
   PROJECT VIDEO FUNCTIONALITY - FIXED VERSION
========================================================= */
(function initProjectVideo() {
    // Get project ID from URL
    function getProjectId() {
        const params = new URLSearchParams(window.location.search);
        return params.get('id');
    }

    // Video data for projects - ONLY projects with videos go here
    const PROJECT_VIDEOS = {
        'green-community-west-villa': {
            title: "Project in Motion",
            subtitle: "A complete luxury villa renovation journey",
            videos: [
                {
                    src: './assets/imgs/projects/Villa_2003_Green_Community_West/green_community.mp4',
                    poster: './assets/imgs/projects/Villa_2003_Green_Community_West/green-cover.webp',
                    caption: 'Timelapse of the complete villa renovation',
                    label: 'Complete Renovation'
                }
            ]
        }
        // ONLY projects that have videos go here!
        // Projects like 'sienna-views-villa', 'green-community-west-villa', 'reef-winter-garden', 
        // 'outdoor-living-landscape' are NOT listed here, so they won't show video section
    };

    function loadProjectVideo() {
        const videoSection = document.getElementById('wn-project-video-section');
        if (!videoSection) return;

        const projectId = getProjectId();
        const videoData = PROJECT_VIDEOS[projectId];

        // CRITICAL FIX: Only show section if video data exists AND has videos
        if (!videoData || !videoData.videos || videoData.videos.length === 0) {
            // Hide the section completely
            videoSection.style.display = 'none';
            videoSection.remove(); // Optional: remove from DOM entirely
            return; // Exit early - don't show anything
        }

        // Only show if we have videos
        videoSection.style.display = 'block';

        // Build the video section HTML
        let videoHTML = `
            <div class="wn-pvideo__head">
                <h2 class="wn-pvideo__title">${videoData.title}</h2>
                ${videoData.subtitle ? `<p class="wn-pvideo__subtitle">${videoData.subtitle}</p>` : ''}
            </div>
        `;

        // Check if multiple videos
        if (videoData.videos.length === 1) {
            // Single video layout
            const video = videoData.videos[0];
            videoHTML += `
                <div class="wn-pvideo__container">
                    <video class="wn-pvideo__player" controls muted poster="${video.poster || ''}">
                        <source src="${video.src}" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                    ${video.caption ? `
                    <div class="wn-pvideo__caption">
                        <p>${video.caption}</p>
                    </div>
                    ` : ''}
                </div>
            `;
        } else {
            // Multiple videos grid layout
            videoHTML += `<div class="wn-pvideo__grid">`;

            videoData.videos.forEach((video, index) => {
                videoHTML += `
                    <div class="wn-pvideo__item">
                        <video class="wn-pvideo__player--small" controls muted poster="${video.poster || ''}">
                            <source src="${video.src}" type="video/mp4">
                        </video>
                        ${video.label ? `<p class="wn-pvideo__label">${video.label}</p>` : ''}
                        ${video.caption ? `<p class="wn-pvideo__caption">${video.caption}</p>` : ''}
                    </div>
                `;
            });

            videoHTML += `</div>`;
        }

        // Inject the HTML
        videoSection.innerHTML = videoHTML;

        // Add lazy loading to videos
        const videos = videoSection.querySelectorAll('video');
        videos.forEach(video => {
            video.setAttribute('preload', 'metadata');
            video.setAttribute('loading', 'lazy');
        });
    }

    // Initialize on DOM ready
    document.addEventListener('DOMContentLoaded', loadProjectVideo);
})();

/* =========================================================
   BEFORE & AFTER SLIDER
========================================================= */
(function initBeforeAfter() {
    const sliders = document.querySelectorAll('[data-wn-ba]');

    sliders.forEach(slider => {
        const curtain = slider.querySelector('.wn-ba__curtain');
        const handle = slider.querySelector('.wn-ba__handle');
        const knob = handle?.querySelector('.wn-ba__knob');

        if (!curtain || !handle || !knob) return;

        let isDragging = false;

        // Set initial position
        curtain.style.width = '50%';
        handle.style.left = '50%';

        // Start drag
        function startDrag(e) {
            isDragging = true;
            document.addEventListener('mousemove', onDrag);
            document.addEventListener('touchmove', onDrag);
            document.addEventListener('mouseup', stopDrag);
            document.addEventListener('touchend', stopDrag);
            e.preventDefault();
        }

        // During drag
        function onDrag(e) {
            if (!isDragging) return;

            const rect = slider.getBoundingClientRect();
            let x = e.clientX || (e.touches?.[0].clientX);

            if (x < rect.left) x = rect.left;
            if (x > rect.right) x = rect.right;

            const percent = ((x - rect.left) / rect.width) * 100;
            curtain.style.width = percent + '%';
            handle.style.left = percent + '%';
        }

        // Stop drag
        function stopDrag() {
            isDragging = false;
            document.removeEventListener('mousemove', onDrag);
            document.removeEventListener('touchmove', onDrag);
            document.removeEventListener('mouseup', stopDrag);
            document.removeEventListener('touchend', stopDrag);
        }

        // Event listeners
        knob.addEventListener('mousedown', startDrag);
        knob.addEventListener('touchstart', startDrag);
        handle.addEventListener('mousedown', startDrag);
        handle.addEventListener('touchstart', startDrag);

        // Prevent image drag
        slider.querySelectorAll('img').forEach(img => {
            img.addEventListener('dragstart', e => e.preventDefault());
        });
    });
})();

/* =========================================================
   CREDENTIALS MODAL
========================================================= */
(function initCredentialsModal() {
    const modal = document.getElementById('wn-cred-modal');
    const modalImg = document.getElementById('wn-cred-modal-img');
    const modalTitle = document.getElementById('wn-cred-modal-title');
    const openButtons = document.querySelectorAll('[data-wn-doc]');
    const closeButtons = document.querySelectorAll('[data-wn-close="true"]');

    if (!modal) return;

    function openModal(src, title) {
        modalImg.src = src;
        modalTitle.textContent = title;
        modal.classList.add('wn-is-open');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('wn-is-open');
        document.body.style.overflow = '';
    }

    // Open buttons
    openButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const src = btn.getAttribute('data-wn-doc');
            const title = btn.getAttribute('data-wn-title') || 'Document';
            openModal(src, title);
        });
    });

    // Close buttons
    closeButtons.forEach(btn => {
        btn.addEventListener('click', closeModal);
    });

    // Close on backdrop click
    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.classList.contains('wn-cred-modal__backdrop')) {
            closeModal();
        }
    });

    // Close on escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('wn-is-open')) {
            closeModal();
        }
    });
})();

/* =========================================================
   CONTACT FORM
========================================================= */
(function initContactForm() {
    const form = document.getElementById('wn-contact-form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Basic validation
        const name = document.getElementById('wn-name').value.trim();
        const email = document.getElementById('wn-email').value.trim();
        const message = document.getElementById('wn-message').value.trim();

        if (!name || !email || !message) {
            alert('Please fill in all required fields.');
            return;
        }

        // Simple email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Success message (in real app, send to server)
        alert('Thank you for your inquiry! We will contact you within 24 hours.');
        form.reset();
    });
})();

/* =========================================================
   INITIALIZE EVERYTHING ON LOAD
========================================================= */
document.addEventListener('DOMContentLoaded', function () {
    // All functions are self-initializing
    // No additional initialization needed
});