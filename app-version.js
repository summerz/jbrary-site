self.addEventListener('message', event => {
  if (event.data?.type === 'GET_APP_VERSION') event.ports[0]?.postMessage({"version":"0.2.1","build":"0.2.1-1791707213979","builtAt":"2026-10-11T08:26:53.979Z"});
});