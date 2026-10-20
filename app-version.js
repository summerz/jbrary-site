self.addEventListener('message', event => {
  if (event.data?.type === 'GET_APP_VERSION') event.ports[0]?.postMessage({"version":"0.3.0","build":"0.3.0-1792477134138","builtAt":"2026-10-20T06:18:54.138Z"});
});