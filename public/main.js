var inputField = document.getElementById('searchBox');

inputField.addEventListener('input', function () {
  var contents = inputField.value;
  if (/\s/.test(contents)) {
    contents = contents.split(' ').pop();
  }
  var endpoint = '/get_suggestions';
  request.post(endpoint, contents, function (err, res) {
    if (err) {
      console.log(err, 'Status code:', res);
      return;
    }
    var arr = JSON.parse(res);
    var newUl = document.createElement('ul');
    arr.forEach(function (element) {
      var li = document.createElement('li');
      li.textContent = element;
      newUl.appendChild(li);
    });
    document.getElementsByClassName('results')[0].innerHTML = newUl.innerHTML;
  });
});
