self.addEventListener('message', event => {
  if (event.data?.type === 'GET_APP_VERSION') event.ports[0]?.postMessage({"version":"0.2.14","build":"0.2.14-1791817738899","builtAt":"2026-10-12T15:08:58.899Z"});
});