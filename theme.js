/* Theme switcher — single shared module loaded by every page.
   Reads localStorage['lb-theme'] pre-paint and sets data-theme on <html>
   so there's no flash of un-themed content. Injects a swatch row into
   the left nav (.nav). Click swaps theme + persists. Default = "noir". */

(function() {
  const THEMES = [
    { key: 'noir',     name: 'Noir' },
    { key: 'ember',    name: 'Ember' },
    { key: 'neonoir',  name: 'Neonoir' }
  ];
  const VALID = new Set(THEMES.map(t => t.key));
  const DEFAULT_THEME = 'noir';

  // One-time migration: when the default theme changed from Slate to Noir,
  // existing users who never picked a theme had 'slate' saved from the old
  // default. Clear that saved value so they get the new default. Users who
  // explicitly picked anything else (graphite, ember, etc.) are untouched.
  try {
    if (!localStorage.getItem('lb-theme-default-v2')) {
      if (localStorage.getItem('lb-theme') === 'slate') {
        localStorage.removeItem('lb-theme');
      }
      localStorage.setItem('lb-theme-default-v2', '1');
    }
  } catch (e) {}

  function getSaved() {
    try {
      const t = localStorage.getItem('lb-theme') || DEFAULT_THEME;
      // Fallback for users who had a now-removed theme saved (e.g. phosphor)
      return VALID.has(t) ? t : DEFAULT_THEME;
    } catch (e) { return DEFAULT_THEME; }
  }
  function save(t) {
    try { localStorage.setItem('lb-theme', t); } catch (e) {}
  }
  function apply(t) {
    document.documentElement.setAttribute('data-theme', t || DEFAULT_THEME);
  }

  // Apply ASAP — this script should be in <head> so it runs before paint
  apply(getSaved());

  function buildSwitcher() {
    const nav = document.querySelector('.nav');
    if (!nav || nav.querySelector('.theme-switcher')) return;
    const current = getSaved();
    const wrap = document.createElement('div');
    wrap.className = 'theme-switcher';
    wrap.innerHTML = ''
      + '<div class="ts-label">Color Palettes</div>'
      + '<div class="ts-row">'
      +   THEMES.map(t => '<button type="button" class="ts-sw' + (current === t.key ? ' active' : '') + '" data-theme="' + t.key + '" title="' + t.name + '" aria-label="Switch to ' + t.name + ' theme"><span class="ts-dot"></span><span class="ts-text">' + t.name + '</span></button>').join('')
      + '</div>';
    nav.appendChild(wrap);

    wrap.querySelectorAll('.ts-sw').forEach(btn => {
      btn.addEventListener('click', () => {
        const t = btn.dataset.theme;
        apply(t);
        save(t);
        wrap.querySelectorAll('.ts-sw').forEach(b => b.classList.toggle('active', b.dataset.theme === t));
      });
    });
  }


  /* ---- Mobile floating menu button (bottom-left) --------------------------
     Injected on every page so no page markup has to change. Toggles
     body.nav-open, which mobile.css turns into an expanding tab panel.
     Styling/visibility is entirely CSS — hidden above 820px. */
  function buildNavFab() {
    if (document.querySelector(".nav-fab")) return;
    var nav = document.querySelector(".nav");
    if (!nav) return;

    var scrim = document.createElement("div");
    scrim.className = "nav-scrim";

    var fab = document.createElement("button");
    fab.className = "nav-fab";
    fab.type = "button";
    fab.setAttribute("aria-label", "Open menu");
    fab.setAttribute("aria-expanded", "false");
    fab.innerHTML = '<span class="nav-fab-bars"><i></i><i></i><i></i></span>';

    document.body.appendChild(scrim);
    document.body.appendChild(fab);

    // The mobile menu panel (.nav) uses a transform for its spring animation,
    // which would make it the containing block for the "fixed" color-swatch
    // pill — causing the pill to ride the panel from the button then snap to
    // the top. Reparent the switcher to <body> while open so its fixed
    // positioning is viewport-relative (stable), and restore it on close.
    var mqMobile = function () { return window.matchMedia && window.matchMedia("(max-width: 820px)").matches; };
    function reparentSwitcher(toBody) {
      var sw = document.querySelector(".theme-switcher");
      if (!sw) return;
      if (toBody) { if (sw.parentNode !== document.body) document.body.appendChild(sw); }
      else if (sw.parentNode === document.body && nav) { nav.appendChild(sw); }
    }
    function close() {
      document.body.classList.remove("nav-open");
      fab.setAttribute("aria-expanded", "false");
      fab.setAttribute("aria-label", "Open menu");
      reparentSwitcher(false);
    }
    function open() {
      if (mqMobile()) reparentSwitcher(true);
      document.body.classList.add("nav-open");
      fab.setAttribute("aria-expanded", "true");
      fab.setAttribute("aria-label", "Close menu");
      // Once used, stop the attention animation for good.
      document.body.classList.add("nav-seen");
      try { localStorage.setItem("navSeen", "1"); } catch (e) {}
    }
    fab.addEventListener("click", function (e) {
      e.stopPropagation();
      document.body.classList.contains("nav-open") ? close() : open();
    });
    scrim.addEventListener("click", close);
    nav.addEventListener("click", function (e) { if (e.target.closest(".nav-item")) close(); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });

    try { if (localStorage.getItem("navSeen")) document.body.classList.add("nav-seen"); } catch (e) {}

    // First load of a visit: draw the eye to the button with a pop + glow pulse
    // on the button ITSELF — no longer auto-expanding the menu, which collided
    // with the page's own intro animations and read as distracting.
    function introFab() {
      var seen = false;
      try { seen = !!sessionStorage.getItem("navIntro"); } catch (e) {}
      if (seen) return;
      try { sessionStorage.setItem("navIntro", "1"); } catch (e) {}
      if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      if (!window.matchMedia || !window.matchMedia("(max-width: 820px)").matches) return;
      setTimeout(function () {
        if (document.body.classList.contains("nav-open")) return;
        fab.classList.add("fab-intro");
        setTimeout(function () { fab.classList.remove("fab-intro"); }, 1600);
      }, 650);
    }
    introFab();
  }

  function initChrome() { buildSwitcher(); buildNavFab(); }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initChrome);
  } else {
    initChrome();
  }
})();
