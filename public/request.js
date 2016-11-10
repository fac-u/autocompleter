var request = (function () {
  function makeRequest (url, data, method, cb) {
    var httpRequest = new XMLHttpRequest();
    if (!httpRequest) {
      alert('Cannot create a http request.');
      return false;
    }
    httpRequest.onreadystatechange = function () {
      if (httpRequest.readyState === 4 && httpRequest.status === 200) {
        return cb(null, httpRequest.response);
      }
      cb('There was a problem with the request', httpRequest.status);
    };
    httpRequest.open(method, url);
    httpRequest.setRequestHeader('content-type', 'text/json');
    httpRequest.send(data);
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