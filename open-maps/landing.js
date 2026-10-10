// Landing page script (ADR 0046), shared by the Polish page and /en/. A file rather
// than an inline script so the pages can run under a Content-Security-Policy without
// 'unsafe-inline' scripts (ADR 0055).
// Progressive enhancement only: the page is complete without this script.
(function () {
  var root = document.documentElement;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Header edge appears once content scrolls under it.
  var top = document.getElementById('top');
  var onScroll = function () {
    top.classList.toggle('is-scrolled', window.scrollY > 8);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Sections settle in as they enter the viewport.
  if ('IntersectionObserver' in window && !reduceMotion) {
    root.classList.add('js');
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    );
    document.querySelectorAll('.reveal').forEach(function (el) {
      io.observe(el);
    });
  }

  // English page offered to browsers that prefer English (or no supported language)
  // over Polish, like the app's own language detection; never a redirect.
  var BANNER_KEY = 'open-maps:landing-language-banner';
  var banner = document.getElementById('lang-banner');
  var prefersEnglish = (function () {
    var tags = navigator.languages && navigator.languages.length ? navigator.languages : [];
    if (!tags.length && navigator.language) tags = [navigator.language];
    for (var i = 0; i < tags.length; i += 1) {
      var primary = String(tags[i]).trim().toLowerCase().split(/[-_]/)[0];
      if (primary === 'pl') return false;
      if (primary === 'en') return true;
    }
    return true;
  })();
  var dismissed = false;
  try {
    dismissed = localStorage.getItem(BANNER_KEY) === 'dismissed';
  } catch (error) {
    // Storage blocked: the banner can come back on the next visit.
  }
  // Only the Polish page has the banner.
  if (banner) {
    if (prefersEnglish && !dismissed) banner.hidden = false;
    document.getElementById('lang-banner-close').addEventListener('click', function () {
      banner.hidden = true;
      try {
        localStorage.setItem(BANNER_KEY, 'dismissed');
      } catch (error) {
        // Storage blocked: hidden for this visit only.
      }
    });
  }

  // Highlight the install steps for this device.
  var ua = navigator.userAgent;
  var isIos = /iPhone|iPad|iPod/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1);
  var platform = isIos ? 'ios' : /Android/.test(ua) ? 'android' : 'desktop';
  var card = document.querySelector('[data-platform="' + platform + '"]');
  if (card) card.classList.add('is-current');

  // Chromium: a real install button („Zainstaluj” / “Install”) when the browser offers it.
  var installButton = document.getElementById('install-button');
  var installLink = document.getElementById('install-link');
  var deferred = null;
  window.addEventListener('beforeinstallprompt', function (event) {
    event.preventDefault();
    deferred = event;
    installButton.hidden = false;
    installLink.hidden = true;
  });
  installButton.addEventListener('click', function () {
    if (!deferred) return;
    deferred.prompt();
    deferred.userChoice.finally(function () {
      deferred = null;
      installButton.hidden = true;
      installLink.hidden = false;
    });
  });
  window.addEventListener('appinstalled', function () {
    installButton.hidden = true;
    installLink.hidden = false;
  });
})();
