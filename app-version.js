self.addEventListener('message', event => {
  if (event.data?.type === 'GET_APP_VERSION') event.ports[0]?.postMessage({"version":"0.2.5","build":"0.2.5-1791709233604","builtAt":"2026-10-11T09:00:33.604Z"});
});