self.addEventListener('message', event => {
  if (event.data?.type === 'GET_APP_VERSION') event.ports[0]?.postMessage({"version":"0.2.7","build":"0.2.7-1791709961526","builtAt":"2026-10-11T09:12:41.526Z"});
});