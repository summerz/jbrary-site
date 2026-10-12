self.addEventListener('message', event => {
  if (event.data?.type === 'GET_APP_VERSION') event.ports[0]?.postMessage({"version":"0.2.13","build":"0.2.13-1791815891215","builtAt":"2026-10-12T14:38:11.215Z"});
});