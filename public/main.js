var inputField = document.getElementById('searchBox');

inputField.addEventListener('input', function () {
  var contents = inputField.value;
  var endpoint = '/get_suggestions';
  request.post(endpoint, contents, function (err, res) {
    if (err) {
      return console.log(err, 'Status code:', response);
    }
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
