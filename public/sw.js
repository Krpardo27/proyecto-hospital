const CACHE_NAME = "pwa-cache-hospital";
const urlsToCache = ["/", "/index.html", "/main.jsx", "/icons/logo.png"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener("activate", (event) => {
  console.log("service worker activated", event.request);
});

// Implementación de la estrategia stale-while-revalidate
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.match(event.request).then((response) => {
        const fetchPromise = fetch(event.request).then((networkResponse) => {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });
        // Si hay una respuesta en la caché, se devuelve, si no, se hace el fetch
        return response || fetchPromise;
      });
    })
  );
});

// Implementación de la estrategia network-first
self.addEventListener("fetch", (event) => {
  console.log("interceptando la solicitud:", event.request.url);
  //cache first
  // event.respondWith(
  //   caches.match(event.request).then(response => {
  //     return response || fetch(event.request);
  //   })
  // )
  //network first
  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        return caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });
      })
      .catch(() => caches.match(event.request))
  );
});
