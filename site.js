(function () {
  var root = document.documentElement;
  var toggles = document.querySelectorAll('[data-theme-toggle]');
  toggles.forEach(function (b) {
    b.addEventListener('click', function () {
      root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', root.dataset.theme);
    });
  });

  var side = document.getElementById('sidebar'), open = document.getElementById('menu-btn'),
      close = document.getElementById('menu-close'), scrim = document.getElementById('scrim');
  function menu(on) {
    side.classList.toggle('open', on);
    scrim.hidden = !on;
    open.setAttribute('aria-expanded', String(on));
    document.body.style.overflow = on ? 'hidden' : '';
    (on ? close : open).focus();
  }
  open.addEventListener('click', function () { menu(true); });
  close.addEventListener('click', function () { menu(false); });
  scrim.addEventListener('click', function () { menu(false); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && side.classList.contains('open')) menu(false);
    if (e.key !== '/' || e.ctrlKey || e.metaKey || e.altKey) return;
    if (e.target.closest('input, textarea, select, [contenteditable]')) return;
    e.preventDefault();
    var q = document.querySelector('[data-search-input]');
    if (q) q.focus(); else location.href = document.querySelector('.avatar').href;
  });
})();
