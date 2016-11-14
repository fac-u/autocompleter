var fs = require('fs');
var path = require('path');

var dictionary = {};

dictionary.readDictionary = function () {
  dictionary.data = JSON.parse(fs.readFileSync(path.join(__dirname, 'orderedDict.json'), 'utf8'));
};

module.exports = dictionary;
