(function () {
  var q = document.getElementById('q');
  var rows = [].slice.call(document.querySelectorAll('.post-row'));
  var groups = [].slice.call(document.querySelectorAll('[data-group]'));
  var count = document.getElementById('count');
  var empty = document.getElementById('empty');
  var active = document.getElementById('active-count');
  var keys = ['event', 'category', 'difficulty', 'lang'];
  var total = rows.length;

  if (matchMedia('(max-width: 640px)').matches && !/[?&](event|category|difficulty|lang)=/.test(location.search)) {
    document.querySelector('.filters').removeAttribute('open');
  }

  function val(k) {
    var c = document.querySelector('input[name="' + k + '"]:checked');
    return c ? c.value : '';
  }

  function apply(updateUrl) {
    var words = q.value.toLowerCase().trim().split(/\s+/).filter(Boolean);
    var st = {}; keys.forEach(function (k) { st[k] = val(k); });
    var shown = 0;
    rows.forEach(function (r) {
      var ok = keys.every(function (k) { return !st[k] || r.dataset[k] === st[k]; }) &&
               words.every(function (w) { return r.dataset.text.indexOf(w) !== -1; });
      r.hidden = !ok;
      if (ok) shown++;
    });
    groups.forEach(function (g) { g.hidden = !g.querySelector('.post-row:not([hidden])'); });
    empty.hidden = shown > 0;
    count.textContent = shown === total ? '' : shown + ' sur ' + total + ' writeups';
    var n = keys.filter(function (k) { return st[k]; }).length;
    active.textContent = n ? '(' + n + ' actif' + (n > 1 ? 's' : '') + ')' : '';
    if (updateUrl) {
      var p = new URLSearchParams();
      if (q.value.trim()) p.set('q', q.value.trim());
      keys.forEach(function (k) { if (st[k]) p.set(k, st[k]); });
      var s = p.toString();
      history.replaceState(null, '', s ? '?' + s : location.pathname);
    }
  }

  var u = new URLSearchParams(location.search);
  q.value = u.get('q') || '';
  keys.forEach(function (k) {
    var v = u.get(k);
    var el = v && document.querySelector('input[name="' + k + '"][value="' + CSS.escape(v) + '"]');
    if (el) el.checked = true;
  });

  q.addEventListener('input', function () { apply(true); });
  document.querySelectorAll('.filter-row input').forEach(function (i) {
    i.addEventListener('change', function () { apply(true); });
  });
  document.getElementById('reset').addEventListener('click', function () {
    q.value = '';
    keys.forEach(function (k) { document.querySelector('input[name="' + k + '"][value=""]').checked = true; });
    apply(true); q.focus();
  });
  apply(false);
})();
