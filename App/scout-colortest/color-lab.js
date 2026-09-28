/* ============================================================================
   SCOUT — COLOUR LAB  (preview build only — never ships)
   A floating panel to flip the candidate colours live, in the real app, so they
   can be judged by feel. Writes data-hold / data-chip / data-pass onto <html>;
   color-overrides.css does the rest. Lives outside #app, so the app's own
   re-renders never touch it. Choice persists in localStorage.
   ============================================================================ */
(function () {
  var KEY = 'scout-colorlab';
  var DEFAULTS = { hold: 'amber', chip: 'blue', pass: 'off' };

  var saved;
  try { saved = JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { saved = {}; }
  var state = Object.assign({}, DEFAULTS, saved);

  function apply() {
    var r = document.documentElement;
    r.setAttribute('data-hold', state.hold);
    r.setAttribute('data-chip', state.chip);
    r.setAttribute('data-pass', state.pass);
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {}
  }
  apply(); // before first paint, no flash

  var GROUPS = [
    { key: 'hold', label: 'Watch verb', opts: [
      { v: 'brown', t: 'Brown (current)' }, { v: 'amber', t: 'Amber' },
      { v: 'gold', t: 'Gold' }, { v: 'blue', t: 'Blue' } ] },
    { key: 'chip', label: 'Filter chip (on)', opts: [
      { v: 'teal', t: 'Teal (current)' }, { v: 'ink', t: 'Ink' }, { v: 'blue', t: 'Blue' } ] },
    { key: 'pass', label: 'Pass verb', opts: [
      { v: 'off', t: 'Grey (current)' }, { v: 'red', t: 'Red' } ] }
  ];

  function build() {
    if (document.getElementById('clab')) return;

    var css = document.createElement('style');
    css.textContent =
      '#clab{position:fixed;right:16px;bottom:16px;z-index:99999;font-family:var(--ui,"Be Vietnam Pro",system-ui,sans-serif);}' +
      '#clab-toggle{appearance:none;border:1px solid rgba(0,0,0,.14);cursor:pointer;font:inherit;font-size:12.5px;font-weight:700;' +
        'padding:9px 14px;border-radius:999px;background:#1C1B23;color:#fff;box-shadow:0 6px 20px rgba(0,0,0,.22);display:inline-flex;align-items:center;gap:8px;}' +
      '#clab-toggle .dot{width:9px;height:9px;border-radius:50%;background:linear-gradient(120deg,#F7DE93,#2E67CC);}' +
      '#clab-panel{position:absolute;right:0;bottom:48px;width:236px;background:#fff;color:#1C1B23;border:1px solid rgba(0,0,0,.12);' +
        'border-radius:16px;padding:16px;box-shadow:0 16px 44px rgba(0,0,0,.26);display:none;}' +
      '#clab.open #clab-panel{display:block;}' +
      '#clab h4{margin:0 0 2px;font-size:13.5px;font-weight:800;letter-spacing:-.01em;}' +
      '#clab .hint{margin:0 0 12px;font-size:10.5px;line-height:1.45;color:#8A8794;}' +
      '#clab .grp{margin-top:12px;}' +
      '#clab .grp > span{display:block;font-size:10px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:#8A8794;margin-bottom:6px;}' +
      '#clab .seg{display:flex;flex-wrap:wrap;gap:5px;}' +
      '#clab .seg button{appearance:none;border:1px solid rgba(0,0,0,.14);cursor:pointer;font:inherit;font-size:11.5px;font-weight:600;' +
        'padding:5px 9px;border-radius:8px;background:#F4F2EF;color:#55525f;}' +
      '#clab .seg button[aria-pressed="true"]{background:#1C1B23;border-color:#1C1B23;color:#fff;}' +
      '#clab .reset{margin-top:14px;width:100%;appearance:none;border:0;cursor:pointer;font:inherit;font-size:11.5px;font-weight:700;' +
        'padding:8px;border-radius:8px;background:#F4F2EF;color:#55525f;}';
    document.head.appendChild(css);

    var wrap = document.createElement('div');
    wrap.id = 'clab';
    var rows = GROUPS.map(function (g) {
      var btns = g.opts.map(function (o) {
        return '<button data-g="' + g.key + '" data-v="' + o.v + '" aria-pressed="' +
          (state[g.key] === o.v) + '">' + o.t + '</button>';
      }).join('');
      return '<div class="grp"><span>' + g.label + '</span><div class="seg">' + btns + '</div></div>';
    }).join('');

    wrap.innerHTML =
      '<div id="clab-panel">' +
        '<h4>Colour Lab</h4>' +
        '<p class="hint">Preview only — not in the shipped app. Flip options and judge by feel.</p>' +
        rows +
        '<button class="reset">Reset to proposed set</button>' +
      '</div>' +
      '<button id="clab-toggle"><span class="dot"></span>Colour Lab</button>';
    document.body.appendChild(wrap);

    document.getElementById('clab-toggle').addEventListener('click', function () {
      wrap.classList.toggle('open');
    });
    wrap.querySelector('#clab-panel').addEventListener('click', function (e) {
      var b = e.target.closest('button'); if (!b) return;
      if (b.classList.contains('reset')) {
        state = Object.assign({}, DEFAULTS); apply(); refresh(); return;
      }
      if (!b.dataset.g) return;
      state[b.dataset.g] = b.dataset.v; apply(); refresh();
    });
  }

  function refresh() {
    var panel = document.getElementById('clab-panel'); if (!panel) return;
    panel.querySelectorAll('.seg button').forEach(function (b) {
      b.setAttribute('aria-pressed', String(state[b.dataset.g] === b.dataset.v));
    });
  }

  if (document.body) build();
  else document.addEventListener('DOMContentLoaded', build);
})();
