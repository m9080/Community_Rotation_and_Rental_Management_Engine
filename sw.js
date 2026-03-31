const CACHE_NAME = 'omnitask-fresh';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request).catch(() => {
    if (event.request.mode === 'navigate') {
      return caches.match('/index.html');
    }
  }));
});
