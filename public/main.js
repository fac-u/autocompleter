var inputField = document.getElementById('searchBox');

inputField.addEventListener('input', function () {
  var contents = inputField.value;
  var lastWord = contents.split(' ').pop();
  postRequest(lastWord);
});

function postRequest (str) {
  var endpoint = '/get_suggestions';
  request.post(endpoint, str, function (err, res) {
    if (err) {
      console.log(err, 'Status code:', res);
      return;
    }
    updateDom(res);
  });
}

document.querySelector('ul').addEventListener('click', function (event) {
  if (event.target.tagName.toLowerCase() === 'li') {
    event.target.style.color = '#000';
    var currentWord = event.target.textContent;
    var words = inputField.value.split(' ').slice(0, -1);
    words.push(currentWord);
    var currentString = words.join(' ') + ' ';
    inputField.value = currentString;
    inputField.focus();
    setTimeout(function () {
      document.getElementsByClassName('results')[0].innerHTML = null;
    }, 200);
  }
});

function updateDom (res) {
  var arr = JSON.parse(res);
  var newUl = document.createElement('ul');
  arr.forEach(function (element) {
    var li = document.createElement('li');
    li.className = "list";
    li.textContent = element;
    newUl.appendChild(li);
  });
  document.getElementsByClassName('results')[0].innerHTML = newUl.innerHTML;
}
