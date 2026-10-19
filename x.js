// Pentest PoC marker - Leah Agentic OS DAST engagement. Harmless: stamps a marker.
document.documentElement.setAttribute('data-poc-fired', 'LEAH_POC_' + Date.now());
try { window.parent.document.documentElement.setAttribute('data-poc-parent', 'LEAH_POC_PARENT_' + Date.now()); } catch (e) {}
