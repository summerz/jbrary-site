self.addEventListener('message', event => {
  if (event.data?.type === 'GET_APP_VERSION') event.ports[0]?.postMessage({"version":"0.2.8","build":"0.2.8-1791710056985","builtAt":"2026-10-11T09:14:16.985Z"});
});