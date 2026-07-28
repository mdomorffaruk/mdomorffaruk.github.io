/* ============================================================
   MAIN.JS — Mohammad Omor Faruk Portfolio
   All interactions in one place.
   ============================================================ */
(function () {
  'use strict';

  /* ----------------------------------------------------------
     1. THEME MANAGER
     Auto-detect system preference. Manual toggle overrides.
     ---------------------------------------------------------- */
  const ThemeManager = {
    init() {
      const toggle = document.getElementById('themeToggle');
      if (!toggle) return;

      const saved = localStorage.getItem('theme');
      if (saved) {
        document.documentElement.setAttribute('data-theme', saved);
      } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.setAttribute('data-theme', 'dark');
      }

      toggle.addEventListener('click', () => {
        const html = document.documentElement;
        const isDark = html.getAttribute('data-theme') === 'dark';
        if (isDark) {
          html.setAttribute('data-theme', 'light');
          localStorage.setItem('theme', 'light');
        } else {
          html.setAttribute('data-theme', 'dark');
          localStorage.setItem('theme', 'dark');
        }
      });

      // Listen for OS changes
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
          document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
        }
      });
    }
  };

  /* ----------------------------------------------------------
     2. MOBILE NAV
     Hamburger toggle, escape to close, click outside to close.
     ---------------------------------------------------------- */
  const MobileNav = {
    init() {
      const hamburger = document.querySelector('.hamburger');
      const mobileNav = document.querySelector('.mobile-nav');
      if (!hamburger || !mobileNav) return;

      hamburger.addEventListener('click', () => {
        const isOpen = hamburger.classList.toggle('active');
        mobileNav.classList.toggle('open', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
        hamburger.setAttribute('aria-expanded', isOpen);
      });

      // Close on link click
      mobileNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          hamburger.classList.remove('active');
          mobileNav.classList.remove('open');
          document.body.style.overflow = '';
          hamburger.setAttribute('aria-expanded', 'false');
        });
      });

      // Close on Escape
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
          hamburger.classList.remove('active');
          mobileNav.classList.remove('open');
          document.body.style.overflow = '';
          hamburger.setAttribute('aria-expanded', 'false');
        }
      });
    }
  };

  /* ----------------------------------------------------------
     3. SCROLL REVEAL
     IntersectionObserver for .reveal* elements.
     ---------------------------------------------------------- */
  const ScrollReveal = {
    init() {
      const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
      if (!elements.length) return;

      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReduced) {
        elements.forEach(el => el.classList.add('revealed'));
        return;
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

      elements.forEach(el => observer.observe(el));
    }
  };

  /* ----------------------------------------------------------
     4. COUNTER ANIMATION
     Animate numbers when .stat-val or .trust-val enters view.
     ---------------------------------------------------------- */
  const CounterAnimation = {
    init() {
      const counters = document.querySelectorAll('[data-count]');
      if (!counters.length) return;

      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const target = parseInt(el.getAttribute('data-count'), 10);
            const suffix = el.getAttribute('data-suffix') || '';
            const prefix = el.getAttribute('data-prefix') || '';

            if (prefersReduced) {
              el.textContent = prefix + target + suffix;
            } else {
              this.animate(el, target, prefix, suffix);
            }
            observer.unobserve(el);
          }
        });
      }, { threshold: 0.5 });

      counters.forEach(el => observer.observe(el));
    },

    animate(el, target, prefix, suffix) {
      const duration = 1200;
      const start = performance.now();

      const step = (now) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(eased * target);
        el.textContent = prefix + current + suffix;
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }
  };

  /* ----------------------------------------------------------
     5. FAQ ACCORDION
     ---------------------------------------------------------- */
  const FAQAccordion = {
    init() {
      document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', () => {
          const item = btn.closest('.faq-item');
          const answer = item.querySelector('.faq-answer');
          const isOpen = item.classList.contains('open');

          // Close all others
          document.querySelectorAll('.faq-item.open').forEach(openItem => {
            if (openItem !== item) {
              openItem.classList.remove('open');
              openItem.querySelector('.faq-answer').style.maxHeight = '0';
              openItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
            }
          });

          if (isOpen) {
            item.classList.remove('open');
            answer.style.maxHeight = '0';
            btn.setAttribute('aria-expanded', 'false');
          } else {
            item.classList.add('open');
            answer.style.maxHeight = answer.scrollHeight + 'px';
            btn.setAttribute('aria-expanded', 'true');
          }
        });
      });
    }
  };

  /* ----------------------------------------------------------
     6. PROJECT FILTER
     ---------------------------------------------------------- */
  const ProjectFilter = {
    init() {
      const pills = document.querySelectorAll('.filter-pill');
      const cards = document.querySelectorAll('[data-category]');
      if (!pills.length || !cards.length) return;

      pills.forEach(pill => {
        pill.addEventListener('click', () => {
          const filter = pill.getAttribute('data-filter');

          pills.forEach(p => p.classList.remove('active'));
          pill.classList.add('active');

          cards.forEach(card => {
            const cats = card.getAttribute('data-category') || '';
            if (filter === 'all' || cats.includes(filter)) {
              card.style.display = '';
              card.style.opacity = '0';
              card.style.transform = 'translateY(12px)';
              requestAnimationFrame(() => {
                card.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
              });
            } else {
              card.style.opacity = '0';
              card.style.transform = 'translateY(12px)';
              setTimeout(() => { card.style.display = 'none'; }, 300);
            }
          });
        });
      });
    }
  };

  /* ----------------------------------------------------------
     7. BACK TO TOP
     ---------------------------------------------------------- */
  const BackToTop = {
    init() {
      const btn = document.querySelector('.back-to-top');
      if (!btn) return;

      window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 400);
      }, { passive: true });

      btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  };

  /* ----------------------------------------------------------
     8. READING PROGRESS
     ---------------------------------------------------------- */
  const ReadingProgress = {
    init() {
      const bar = document.querySelector('.reading-progress');
      if (!bar) return;

      window.addEventListener('scroll', () => {
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (window.scrollY / docHeight) * 100;
        bar.style.width = progress + '%';
      }, { passive: true });
    }
  };

  /* ----------------------------------------------------------
     9. ACTIVE NAV HIGHLIGHT
     ---------------------------------------------------------- */
  const ActiveNav = {
    init() {
      const sections = document.querySelectorAll('section[id]');
      const navLinks = document.querySelectorAll('.nav-links a');
      if (!sections.length || !navLinks.length) return;

      window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
          const top = section.offsetTop - 100;
          if (window.scrollY >= top) current = section.getAttribute('id');
        });
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + current) link.classList.add('active');
        });
      }, { passive: true });
    }
  };

  /* ----------------------------------------------------------
     10. FORM HANDLER
     ---------------------------------------------------------- */
  const FormHandler = {
    init() {
      const form = document.getElementById('contactForm');
      if (!form) return;

      form.addEventListener('submit', (e) => {
        e.preventDefault();
        let valid = true;

        // Validate required fields
        form.querySelectorAll('[required]').forEach(input => {
          const group = input.closest('.form-group');
          if (!input.value.trim()) {
            group.classList.add('error');
            valid = false;
          } else {
            group.classList.remove('error');
          }

          // Email validation
          if (input.type === 'email' && input.value.trim()) {
            const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRe.test(input.value)) {
              group.classList.add('error');
              valid = false;
            }
          }
        });

        if (!valid) return;

        // Gather form data
        const name = form.querySelector('[name="name"]').value.trim();
        const email = form.querySelector('[name="email"]').value.trim();
        const type = form.querySelector('[name="type"]').value;
        const budget = form.querySelector('[name="budget"]').value;
        const message = form.querySelector('[name="message"]').value.trim();

        // Build mailto link
        const typeLabels = {
          backend: 'Backend Development',
          security: 'Security Assessment',
          automation: 'Automation & Tooling',
          website: 'Website Recovery',
          android: 'Android Development',
          consulting: 'Technical Consulting',
          other: 'Other'
        };
        const subject = encodeURIComponent('Project Inquiry — ' + (typeLabels[type] || 'General'));
        const body = encodeURIComponent(
          'Hi Mohammad,\n\n' +
          'Name: ' + name + '\n' +
          'Email: ' + email + '\n' +
          'Project Type: ' + (typeLabels[type] || 'Not specified') + '\n' +
          'Budget Range: ' + (budget || 'Not specified') + '\n\n' +
          'Project Details:\n' + message + '\n\n' +
          'Looking forward to hearing from you.'
        );

        window.location.href = 'mailto:mdomorffaruk@gmail.com?subject=' + subject + '&body=' + body;
      });

      // Clear error on input
      form.querySelectorAll('input, textarea, select').forEach(input => {
        input.addEventListener('input', () => {
          input.closest('.form-group').classList.remove('error');
        });
      });
    }
  };

  /* ----------------------------------------------------------
     11. COPY TO CLIPBOARD
     ---------------------------------------------------------- */
  const CopyEmail = {
    init() {
      document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const text = btn.getAttribute('data-copy');
          navigator.clipboard.writeText(text).then(() => {
            btn.classList.add('copied');
            setTimeout(() => btn.classList.remove('copied'), 1500);
          });
        });
      });
    }
  };

  /* ----------------------------------------------------------
     12. COMMAND PALETTE (Cmd+K / Ctrl+K)
     ---------------------------------------------------------- */
  const CommandPalette = {
    init() {
      const overlay = document.querySelector('.cmd-overlay');
      if (!overlay) return;

      const input = overlay.querySelector('.cmd-input');
      const items = overlay.querySelectorAll('.cmd-item');
      let activeIndex = 0;

      const open = () => {
        overlay.classList.add('open');
        document.body.style.overflow = 'hidden';
        input.value = '';
        input.focus();
        activeIndex = 0;
        updateActive();
        filterItems('');
      };

      const close = () => {
        overlay.classList.remove('open');
        document.body.style.overflow = '';
      };

      const updateActive = () => {
        items.forEach((item, i) => {
          item.classList.toggle('active', i === activeIndex);
          if (i === activeIndex) item.scrollIntoView({ block: 'nearest' });
        });
      };

      const filterItems = (query) => {
        let visibleCount = 0;
        items.forEach(item => {
          const text = item.textContent.toLowerCase();
          const match = !query || text.includes(query.toLowerCase());
          item.style.display = match ? '' : 'none';
          if (match) visibleCount++;
        });
        // Reset active
        activeIndex = 0;
        updateActive();
      };

      // Keyboard shortcut to open
      document.addEventListener('keydown', (e) => {
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
          e.preventDefault();
          overlay.classList.contains('open') ? close() : open();
        }
        if (e.key === 'Escape' && overlay.classList.contains('open')) {
          close();
        }
      });

      // Click overlay to close
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) close();
      });

      // Input filtering
      input.addEventListener('input', (e) => filterItems(e.target.value));

      // Arrow keys + enter
      input.addEventListener('keydown', (e) => {
        const visible = Array.from(items).filter(i => i.style.display !== 'none');
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          activeIndex = Math.min(activeIndex + 1, visible.length - 1);
          updateActive();
        } else if (e.key === 'ArrowUp') {
          e.preventDefault();
          activeIndex = Math.max(activeIndex - 1, 0);
          updateActive();
        } else if (e.key === 'Enter') {
          e.preventDefault();
          if (visible[activeIndex]) visible[activeIndex].click();
        }
      });

      // Item click
      items.forEach(item => {
        item.addEventListener('click', () => {
          close();
          const href = item.getAttribute('data-href');
          if (href) {
            if (href.startsWith('#')) {
              document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
            } else if (href.startsWith('http')) {
              window.open(href, '_blank', 'noopener');
            } else {
              window.location.href = href;
            }
          }
        });
      });

      // Open button trigger
      document.querySelectorAll('[data-cmd]').forEach(btn => {
        btn.addEventListener('click', open);
      });
    }
  };

  /* ----------------------------------------------------------
     13. MAGNETIC BUTTONS
     Subtle cursor-following effect on primary buttons.
     ---------------------------------------------------------- */
  const MagneticButtons = {
    init() {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      if ('ontouchstart' in window) return; // Skip on touch devices

      document.querySelectorAll('.btn-primary').forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
          const rect = btn.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
        });

        btn.addEventListener('mouseleave', () => {
          btn.style.transform = '';
        });
      });
    }
  };

  /* ----------------------------------------------------------
     14. SMOOTH SCROLL
     Override default anchor behavior for hash links.
     ---------------------------------------------------------- */
  const SmoothScroll = {
    init() {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
          const id = anchor.getAttribute('href');
          if (id === '#') return;
          const target = document.querySelector(id);
          if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        });
      });
    }
  };

  /* ----------------------------------------------------------
     15. TIMELINE TOGGLE (about page)
     ---------------------------------------------------------- */
  const TimelineToggle = {
    init() {
      document.querySelectorAll('.tl-item').forEach(item => {
        item.style.cursor = 'pointer';
        const bullets = item.querySelector('.tl-bullets');
        if (!bullets) return;

        // Collapse by default on mobile
        if (window.innerWidth < 900) {
          bullets.style.maxHeight = '0';
          bullets.style.overflow = 'hidden';
          bullets.style.transition = 'max-height 0.35s ease';
        }

        item.addEventListener('click', () => {
          if (window.innerWidth >= 900) return;
          const isOpen = bullets.style.maxHeight !== '0px' && bullets.style.maxHeight !== '';
          bullets.style.maxHeight = isOpen ? '0' : bullets.scrollHeight + 'px';
        });
      });
    }
  };

  /* ----------------------------------------------------------
     16. AUTO SCROLL CAROUSEL
     Auto-scroll for testimonials & apps. Pauses on hover.
     ---------------------------------------------------------- */
  const AutoScroll = {
    init() {
      const containers = document.querySelectorAll('.auto-scroll');
      if (!containers.length) return;

      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      containers.forEach(container => {
        const speed = parseFloat(container.getAttribute('data-speed')) || 0.8;
        let isPaused = false;
        let rafId = null;

        const scroll = () => {
          if (!isPaused && !prefersReduced) {
            container.scrollLeft += speed;
            if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
              container.scrollLeft = 0;
            }
          }
          rafId = requestAnimationFrame(scroll);
        };

        container.addEventListener('mouseenter', () => { isPaused = true; });
        container.addEventListener('mouseleave', () => { isPaused = false; });

        // Pause while user is dragging/scrolls manually
        let isManual = false;
        container.addEventListener('mousedown', () => { isManual = true; isPaused = true; });
        container.addEventListener('mouseup', () => { isManual = false; isPaused = false; });
        container.addEventListener('scroll', () => {
          if (isManual) return;
          // User scrolled manually — pause briefly
          isPaused = true;
          clearTimeout(container._scrollPause);
          container._scrollPause = setTimeout(() => {
            isPaused = false;
          }, 3000);
        });

        rafId = requestAnimationFrame(scroll);
      });
    }
  };

  /* ----------------------------------------------------------
     17. HERO PARALLAX (subtle)
     ---------------------------------------------------------- */
  const HeroParallax = {
    init() {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      if ('ontouchstart' in window) return;

      const heroBg = document.querySelector('.hero-bg');
      if (!heroBg) return;

      window.addEventListener('scroll', () => {
        const y = window.scrollY;
        heroBg.style.transform = `translateY(${y * 0.08}px)`;
      }, { passive: true });
    }
  };

  /* ----------------------------------------------------------
     INIT ALL MODULES
     ---------------------------------------------------------- */
  document.addEventListener('DOMContentLoaded', () => {
    ThemeManager.init();
    MobileNav.init();
    ScrollReveal.init();
    CounterAnimation.init();
    FAQAccordion.init();
    ProjectFilter.init();
    BackToTop.init();
    ReadingProgress.init();
    ActiveNav.init();
    FormHandler.init();
    CopyEmail.init();
    CommandPalette.init();
    MagneticButtons.init();
    SmoothScroll.init();
    TimelineToggle.init();
    AutoScroll.init();
    HeroParallax.init();
  });

})();
