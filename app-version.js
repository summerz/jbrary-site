self.addEventListener('message', event => {
  if (event.data?.type === 'GET_APP_VERSION') event.ports[0]?.postMessage({"version":"0.2.10","build":"0.2.10-1791711677232","builtAt":"2026-10-11T09:41:17.232Z"});
});