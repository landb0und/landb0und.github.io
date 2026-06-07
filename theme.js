/* Theme switcher — single shared module loaded by every page.
   Reads localStorage['lb-theme'] pre-paint and sets data-theme on <html>
   so there's no flash of un-themed content. Injects a swatch row into
   the left nav (.nav). Click swaps theme + persists. Default = "slate". */

(function() {
  const THEMES = [
    { key: 'slate',    name: 'Slate' },
    { key: 'noir',     name: 'Noir' },
    { key: 'phosphor', name: 'Phosphor' },
    { key: 'graphite', name: 'Graphite' },
    { key: 'ember',    name: 'Ember' },
    { key: 'neonoir',  name: 'Neonoir' }
  ];

  function getSaved() {
    try { return localStorage.getItem('lb-theme') || 'slate'; }
    catch (e) { return 'slate'; }
  }
  function save(t) {
    try { localStorage.setItem('lb-theme', t); } catch (e) {}
  }
  function apply(t) {
    document.documentElement.setAttribute('data-theme', t || 'slate');
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
      +   THEMES.map(t => '<button type="button" class="ts-sw' + (current === t.key ? ' active' : '') + '" data-theme="' + t.key + '" title="' + t.name + '" aria-label="Switch to ' + t.name + ' theme"></button>').join('')
      + '</div>'
      + '<div class="ts-name" data-current>' + (THEMES.find(t => t.key === current) || THEMES[0]).name + '</div>';
    nav.appendChild(wrap);

    wrap.querySelectorAll('.ts-sw').forEach(btn => {
      btn.addEventListener('click', () => {
        const t = btn.dataset.theme;
        apply(t);
        save(t);
        wrap.querySelectorAll('.ts-sw').forEach(b => b.classList.toggle('active', b.dataset.theme === t));
        const nameEl = wrap.querySelector('[data-current]');
        if (nameEl) nameEl.textContent = (THEMES.find(x => x.key === t) || THEMES[0]).name;
      });
      btn.addEventListener('mouseenter', () => {
        const nameEl = wrap.querySelector('[data-current]');
        if (nameEl) nameEl.textContent = (THEMES.find(x => x.key === btn.dataset.theme) || THEMES[0]).name;
      });
      btn.addEventListener('mouseleave', () => {
        const nameEl = wrap.querySelector('[data-current]');
        const cur = getSaved();
        if (nameEl) nameEl.textContent = (THEMES.find(x => x.key === cur) || THEMES[0]).name;
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildSwitcher);
  } else {
    buildSwitcher();
  }
})();
