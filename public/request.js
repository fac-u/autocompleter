function makePostRequest (url, data, cb) {
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
  httpRequest.open('POST', url);
  httpRequest.setRequestHeader('content-type', 'text/xml');
  httpRequest.send(data);
}
