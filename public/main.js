var inputField = document.getElementById('searchBox');
var url = '/';

inputField.addEventListener('input', function () {
  var contents = inputField.value;
  var endpoint = '/get_suggestions';
  makePostRequest(endpoint, contents, handleResponse);
});

function handleResponse (err, response) {
  if (err) {
    console.log(err);
    return;
  } else {
    updateDom(response);
  }
}

function updateDom (res) {
  var arr = JSON.parse(res);
  var ul = document.createElement('ul');
  ul.className = 'results';
  arr.forEach(function (element) {
    var li = document.createElement('li');
    li.textContent = element;
    ul.appendChild(li);
  });
  document.getElementById('leftAlign').appendChild(ul);
}
