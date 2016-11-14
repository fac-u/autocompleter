var dictionary = require('./read-dictionary.js');

function autocomplete (str) {
  if (!str) return [];
  var start = Date.now();
  var results = [];
  for (var i = 0; results.length < 5 && i < dictionary.data.length; i++) {
    var word = dictionary.data[i];
    if (word.substring(0, str.length) === str) {
      results.push(word);
    }
  }
  console.log('Results: ' + results);
  console.log('Query took ' + (Date.now() - start).toString() + 'ms to execute');
  return results;
}

module.exports = autocomplete;
