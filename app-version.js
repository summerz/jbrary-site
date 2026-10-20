self.addEventListener('message', event => {
  if (event.data?.type === 'GET_APP_VERSION') event.ports[0]?.postMessage({"version":"0.3.1","build":"0.3.1-1792481841233","builtAt":"2026-10-20T07:37:21.233Z"});
});