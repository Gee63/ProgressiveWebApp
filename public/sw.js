//ssl needed dor service workers to work!


self.addEventListener('install', function (event){
    console.log('[Service Worker] Installing Service Worker...', event);
});

self.addEventListener('activate', function (event) {
    console.log('[Service Worker] Activating Service Worker...', event);
    return self.clients.claim();
});

self.addEventListener('fetch', function (event) {
   console.log('[Service Worker] fetching something...', event);
    event.respondWith(fetch(event.request));
});
