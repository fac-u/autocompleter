var inputField = document.getElementById('searchBox');

inputField.addEventListener('input', function () {
  var contents = inputField.value;
  var endpoint = '/get_suggestions';
  console.log(contents, endpoint);
});

function makePostRequest (url, data, cb) {
  var httpRequest = new XMLHttpRequest();
  if (!httpRequest) {
    alert('Cannot create a http request.');
    return false;
  }
  httpRequest.onreadystatechange = function () {
    if (httpRequest.readyState === 4) {
      if (httpRequest.status === 200) {
        cb(null, httpRequest.responseText);
      } else {
        cb('There was a problem with the request');
      }
    }
  };
  httpRequest.open('POST', url);

  httpRequest.send();
}
