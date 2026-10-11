self.addEventListener('message', event => {
  if (event.data?.type === 'GET_APP_VERSION') event.ports[0]?.postMessage({"version":"0.2.9","build":"0.2.9-1791710803554","builtAt":"2026-10-11T09:26:43.554Z"});
});