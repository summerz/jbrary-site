self.addEventListener('message', event => {
  if (event.data?.type === 'GET_APP_VERSION') event.ports[0]?.postMessage({"version":"0.2.3","build":"0.2.3-1791707460862","builtAt":"2026-10-11T08:31:00.862Z"});
});