var request = {
  get: function (url, cb) {
    makeRequest(url, null, 'GET', cb);
  },
  post: function (url, data, cb) {
    makeRequest(url, data, 'POST', cb);
  }
};

function makeRequest (url, data, method, cb) {
  var httpRequest = new XMLHttpRequest();
  if (!httpRequest) {
    alert('Cannot create a http request.');
    return false;
  }
  httpRequest.onreadystatechange = function () {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if(httpRequest.status === 200) {
        cb(null, httpRequest.response);
      } else {
        cb('There was a problem with the request', httpRequest.status);
      }
    }
  };
  httpRequest.open(method, url);
  httpRequest.setRequestHeader('content-type', 'text/json');
  httpRequest.send(data);
}
