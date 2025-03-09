self.addEventListener('push', function (event) {
  const options = event.data.json()

  let promise = self.registration.showNotification(options.head, options);

  event.waitUntil(promise);
});

self.addEventListener('notificationclick', function (event) {
  event.notification.close();

  event.waitUntil(
    clients.matchAll()
      .then((clientList) => {
        for (const client of clientList) {
          if (client.url === "/" && "focus" in client) return client.focus();
        }
        if (clients.openWindow) return clients.openWindow(event.notification.tag);
      }),
  );
});

const CACHE_NAME = 'pwa-cache-v1'; // Название кэша
const urlsToCache = [
  '/',
];

// Установка Service Worker и кеширование файлов
self.addEventListener('install', (event) => {
  console.log('[SW] Installing Service Worker...');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] Caching app shell');
      return cache.addAll(urlsToCache);
    })
  );
});

// Активация и удаление старого кеша
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating Service Worker...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((name) => {
          if (name !== CACHE_NAME) {
            console.log('[SW] Deleting old cache:', name);
            return caches.delete(name);
          }
        })
      );
    })
  );
});

// Перехват запросов и выдача из кеша
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        console.log('[SW] Serving from cache:', event.request.url);
        return response; // Возвращаем кешированный ответ
      }
      console.log('[SW] Fetching:', event.request.url);
      return fetch(event.request); // Иначе загружаем с сервера
    })
  );
});