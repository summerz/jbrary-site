self.addEventListener('message', event => {
  if (event.data?.type === 'GET_APP_VERSION') event.ports[0]?.postMessage({"version":"0.2.11","build":"0.2.11-1791723175784","builtAt":"2026-10-11T12:52:55.784Z"});
});