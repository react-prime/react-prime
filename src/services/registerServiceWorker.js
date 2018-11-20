export default () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          if (!__PROD__) {
            console.info(`Service Worker registered! Scope: ${registration.scope}`);
          }
        }).catch((err) => {
          if (!__PROD__) {
            console.error(`Service Worker registration failed: ${err}`);
          }
        });
    });
  }
};
