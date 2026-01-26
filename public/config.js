// Runtime konfigurace pro API klíče
// Tento soubor se načte při běhu aplikace
// API klíče se načtou z buildu (NEXT_PUBLIC_ proměnné) nebo z tohoto souboru
window.APP_CONFIG = window.APP_CONFIG || {};
// Pokud není nastaveno z buildu, použij hodnoty z tohoto souboru
if (!window.APP_CONFIG.RESEND_API_KEY) {
  window.APP_CONFIG.RESEND_API_KEY = 're_PYkfyG8H_CXiS3e58fmTQ7e9ztWvJK1tJ'; // Nahraďte skutečným API klíčem, pokud není v buildu
}
if (!window.APP_CONFIG.RESEND_TEST_EMAIL) {
  window.APP_CONFIG.RESEND_TEST_EMAIL = 'info@domypecerady.cz';
}
if (!window.APP_CONFIG.GOOGLE_MAPS_API_KEY) {
  window.APP_CONFIG.GOOGLE_MAPS_API_KEY = '';
}

