var fs = require('fs');
var path = require('path');

function autocomplete (str) {
  console.log(__dirname);
  var dictionary = JSON.parse(fs.readFileSync(path.join(__dirname, '../src') + '/dictionary.json', 'utf8'));
  var results = [];
  dictionary = Object.keys(dictionary);
  for (var i = 0; results.length < 5 && i < dictionary.length; i++) {
    var word = dictionary[i];
    if (word.substring(0, str.length) === str) {
      results.push(word);
    }
  }
  console.log(results);
  return results;
}

module.exports = autocomplete;
