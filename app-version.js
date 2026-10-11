self.addEventListener('message', event => {
  if (event.data?.type === 'GET_APP_VERSION') event.ports[0]?.postMessage({"version":"0.2.12","build":"0.2.12-1791727130320","builtAt":"2026-10-11T13:58:50.320Z"});
});