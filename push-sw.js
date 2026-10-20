/* Loaded by the generated Workbox service worker, including subpath deployments. */
self.addEventListener('push', event => {
  let payload = {};
  try { payload = event.data?.json() ?? {}; } catch { /* Display a generic notification even for an invalid payload. */ }
  const loanId = Number.isSafeInteger(payload.loanId) && payload.loanId > 0 ? payload.loanId : null;
  const updateId = Number.isSafeInteger(payload.updateId) && payload.updateId > 0 ? payload.updateId : null;
  const titleId = Number.isSafeInteger(payload.titleId) && payload.titleId > 0 ? payload.titleId : null;
  const quizAssignmentId = Number.isSafeInteger(payload.quizAssignmentId) && payload.quizAssignmentId > 0 ? payload.quizAssignmentId : null;
  event.waitUntil(self.registration.showNotification('도서관 알림', {
    body: typeof payload.body === 'string' ? payload.body.slice(0, 200) : '신청함에 새로운 소식이 있어요.',
    icon: new URL('icons/icon-192.png', self.registration.scope).href,
    badge: new URL('icons/icon-192.png', self.registration.scope).href,
    tag: quizAssignmentId ? `quiz-${quizAssignmentId}` : loanId ? `loan-${loanId}` : updateId ? `update-${updateId}` : titleId ? `book-${titleId}` : 'library-notification',
    data: { loanId, ...(quizAssignmentId ? { quizAssignmentId } : {}), ...(updateId ? { updateId } : {}), ...(titleId ? { titleId } : {}) },
  }));
});
self.addEventListener('notificationclick', event => {
  event.notification.close();
  const loanId = event.notification.data?.loanId;
  const updateId = event.notification.data?.updateId;
  const titleId = event.notification.data?.titleId;
  const quizAssignmentId = event.notification.data?.quizAssignmentId;
  const path = Number.isSafeInteger(quizAssignmentId) && quizAssignmentId > 0 ? `quizzes/${quizAssignmentId}`
    : Number.isSafeInteger(loanId) && loanId > 0 ? `loans/${loanId}`
    : Number.isSafeInteger(updateId) && updateId > 0 ? `updates/${updateId}`
    : Number.isSafeInteger(titleId) && titleId > 0 ? `titles/${titleId}` : 'loans';
  const target = new URL(path, self.registration.scope);
  event.waitUntil((async () => {
    const windows = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
    const client = windows.find(c => c.url.startsWith(self.registration.scope));
    if (client) { await client.navigate(target.href); await client.focus(); }
    else await self.clients.openWindow(target.href);
  })());
});
