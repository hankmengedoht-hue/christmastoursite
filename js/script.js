/* Christmas in Charleston Candlelight Tour of Private Homes
   Small, dependency-free behaviours: nav state, mobile menu,
   scroll reveals, active nav link, and the mobile call bar. */
(function () {
  'use strict';

  var nav = document.querySelector('[data-nav]');
  var toggle = document.querySelector('[data-menu-toggle]');
  var menu = document.querySelector('[data-menu]');
  var callbar = document.querySelector('[data-callbar]');
  var hero = document.querySelector('.hero');
  var contact = document.querySelector('#contact');

  /* --- Nav: transparent over the hero, solid after ------------------- */
  function onScroll() {
    var y = window.scrollY;
    nav.classList.toggle('is-solid', y > 40);

    if (callbar) {
      var pastHero = y > hero.offsetHeight * 0.7;
      var atContact = contact.getBoundingClientRect().top < window.innerHeight * 0.6;
      callbar.classList.toggle('is-visible', pastHero && !atContact);
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* --- Mobile menu ---------------------------------------------------- */
  function setMenu(open) {
    toggle.setAttribute('aria-expanded', String(open));
    menu.hidden = !open;
    nav.classList.toggle('is-open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  }
  toggle.addEventListener('click', function () {
    setMenu(toggle.getAttribute('aria-expanded') !== 'true');
  });
  menu.addEventListener('click', function (event) {
    if (event.target.closest('a')) setMenu(false);
  });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && !menu.hidden) {
      setMenu(false);
      toggle.focus();
    }
  });
  window.matchMedia('(min-width: 60.0625rem)').addEventListener('change', function (mq) {
    if (mq.matches) setMenu(false);
  });

  /* --- Scroll reveals -------------------------------------------------- */
  var reveals = document.querySelectorAll('[data-reveal]');
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduced || !('IntersectionObserver' in window)) {
    reveals.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    var revealer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        revealer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.1 });
    reveals.forEach(function (el) { revealer.observe(el); });
  }

  /* --- Active nav link ------------------------------------------------- */
  var links = document.querySelectorAll('.nav__links a');
  if ('IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (link) {
          var current = link.getAttribute('href') === '#' + entry.target.id;
          if (current) link.setAttribute('aria-current', 'true');
          else link.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    document.querySelectorAll('#top, #about, #experience, #details, #contact').forEach(function (s) {
      spy.observe(s);
    });
  }

  /* --- Footer year ----------------------------------------------------- */
  var year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();
})();
