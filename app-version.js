self.addEventListener('message', event => {
  if (event.data?.type === 'GET_APP_VERSION') event.ports[0]?.postMessage({"version":"0.2.14","build":"0.2.14-1791817894002","builtAt":"2026-10-12T15:11:34.002Z"});
});