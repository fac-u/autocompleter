var inputField = document.getElementById('searchBox');

inputField.addEventListener('input', function () {
  var contents = inputField.value;
  var endpoint = '/get_suggestions';
  request.p(endpoint, contents, function (err, res) {
    if (err) {
      return console.log(err, 'Status code:', res);
    }
    var ul = document.getElementsByClassName('results')[0];
    ul.innerHTML = '';
    JSON.parse(res).forEach(function (element) {
      var li = document.createElement('li');
      li.textContent = element;
      ul.appendChild(li);
    });
  });
});
