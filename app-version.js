self.addEventListener('message', event => {
  if (event.data?.type === 'GET_APP_VERSION') event.ports[0]?.postMessage({"version":"0.2.15","build":"0.2.15-1791820636318","builtAt":"2026-10-12T15:57:16.318Z"});
});