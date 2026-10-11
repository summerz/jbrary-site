/* Loaded by the generated Workbox service worker, including subpath deployments. */
self.addEventListener('push', event => {
  let payload = {};
  try { payload = event.data?.json() ?? {}; } catch { /* Display a generic notification even for an invalid payload. */ }
  const loanId = Number.isSafeInteger(payload.loanId) && payload.loanId > 0 ? payload.loanId : null;
  event.waitUntil(self.registration.showNotification('도서관 알림', {
    body: typeof payload.body === 'string' ? payload.body.slice(0, 200) : '신청함에 새로운 소식이 있어요.',
    icon: new URL('icons/icon-192.png', self.registration.scope).href,
    badge: new URL('icons/icon-192.png', self.registration.scope).href,
    tag: loanId ? `loan-${loanId}` : 'library-notification',
    data: { loanId },
  }));
});
self.addEventListener('notificationclick', event => {
  event.notification.close();
  const loanId = event.notification.data?.loanId;
  const path = Number.isSafeInteger(loanId) && loanId > 0 ? `loans/${loanId}` : 'loans';
  const target = new URL(path, self.registration.scope);
  event.waitUntil((async () => {
    const windows = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
    const client = windows.find(c => c.url.startsWith(self.registration.scope));
    if (client) { await client.navigate(target.href); await client.focus(); }
    else await self.clients.openWindow(target.href);
  })());
});
