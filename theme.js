/* Theme switcher — single shared module loaded by every page.
   Reads localStorage['lb-theme'] pre-paint and sets data-theme on <html>
   so there's no flash of un-themed content. Injects a swatch row into
   the left nav (.nav). Click swaps theme + persists. Default = "noir". */

(function() {
  const THEMES = [
    { key: 'noir',     name: 'Noir' },
    { key: 'slate',    name: 'Slate' },
    { key: 'graphite', name: 'Graphite' },
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
      + '<div class="ts-label">Theme</div>'
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

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildSwitcher);
  } else {
    buildSwitcher();
  }
})();
