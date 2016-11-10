var request = (function () {
  function makeRequest (url, data, method, cb) {
    cb(null, ['aa','ardvark','avocado']);
  }
  return {
    get: function (url, cb) {
      makeRequest(url, null, 'GET', cb);
    },
    post: function (url, data, cb) {
      makeRequest(url, data, 'POST', cb);
    }
  };
})();
