self.addEventListener('message', event => {
  if (event.data?.type === 'GET_APP_VERSION') event.ports[0]?.postMessage({"version":"0.2.0","build":"0.2.0-1791706012066","builtAt":"2026-10-11T08:06:52.066Z"});
});