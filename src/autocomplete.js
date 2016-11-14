var fs = require('fs');
var path = require('path');

function autocomplete (str) {
  if (!str) return [];
  var start = Date.now();
  var dictionary = JSON.parse(fs.readFileSync(path.join(__dirname, '../src') + '/orderedDict.json', 'utf8'));
  var results = [];
  for (var i = 0; results.length < 5 && i < dictionary.length; i++) {
    var word = dictionary[i];
    if (word.substring(0, str.length) === str) {
      results.push(word);
    }
  }
  console.log('Results: ' + results);
  console.log('Query took ' + (Date.now() - start).toString() + 'ms to execute');
  return results;
}

module.exports = autocomplete;
