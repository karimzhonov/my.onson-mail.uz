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
        if (clients.openWindow) return clients.openWindow(`/notification?id=${event.notification.tag}`);
      }),
  );
});
