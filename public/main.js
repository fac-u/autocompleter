var inputField = document.getElementById('searchBox');

// sends request for popular words every input and updates the dom
inputField.addEventListener('input', function () {
  var contents = inputField.value;
  var lastWord = contents.split(' ').pop().toLowerCase();
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

function updateDom (res) {
  var arr = JSON.parse(res);
  var newUl = document.createElement('ul');
  arr.forEach(function (element) {
    var li = document.createElement('li');
    li.className = 'list';
    li.textContent = element;
    newUl.appendChild(li);
  });
  document.getElementsByClassName('results')[0].innerHTML = newUl.innerHTML;
}

// populates input field with clicked suggested word and clears suggestions
document.querySelector('ul').addEventListener('click', function (event) {
  if (event.target.tagName.toLowerCase() === 'li') {
    document.getElementById('ding').play();
    event.target.className += ' clicked';
    var currentWord = event.target.textContent;
    var words = inputField.value.split(' ').slice(0, -1);
    words.push(currentWord);
    var currentString = words.join(' ') + ' ';
    inputField.value = currentString;
    inputField.focus();
    setTimeout(function () {
      document.getElementsByClassName('results')[0].innerHTML = null;
    }, 300);
  }
});

window.onload = function() {
    document.getElementById('welcomeTrack').play();
}

/*
function redirectToGoogle() {
    var inputValue = (inputField.value).replace(/\s/g, '+');
    if (inputValue) {
      var googleLink = "https://www.google.co.uk/?#q=" + inputValue;
      window.open(googleLink);
    }
  }
  */
