# Autocompleter
[![Build Status](https://travis-ci.org/fac-u/autocompleter.svg?branch=master)](https://travis-ci.org/fac-u/autocompleter)
[![codecov](https://codecov.io/gh/fac-u/autocompleter/branch/master/graph/badge.svg)](https://codecov.io/gh/fac-u/autocompleter)

A simple full-stack text autocompletion implementation.

### What
- Text input box with autocomplete functionality
- Autocomplete suggestions served by server
- Simple front end, allowing users to select a suggestion to automatically complete

### How
- Back end testing in Tape
- Repo badges in README.md (Travis build status and Codecov percentage)
- Modular back end

### Setting up server
- Clone the repo to a local directory
- Run ```npm install``` from the root folder to install dependencies
- Run ```nodemon``` from the terminal to start the server through nodemon, or ```node server.js```
- Access the front end by visiting ```http://localhost:3000```

### Key files
- ```server.js```: Basic server functionality and ping function to keep heroku server awake
- ```src/router.js```: Routes incoming requests to the appropriate handler function
- ```src/handler.js```: Handles all incoming requests and serves responses
- ```src/autocomplete.js```: Takes a string as an input and returns an array of autocomplete suggestions
- ```src/orderedDict.json```: A JSON file containing an array of words in the General Service List, sorted by frequency of use (most frequent to least frequent)
- ```public/index.html```: Homepage
- ```public/main.css```: Main stylesheet
- ```public/main.js```: Front end JavaScript handling DOM events and manipulation
- ```public/request.js```: JavaScript handling front-end XHRs
- ```public/reset.css```: CSS reset stylesheet

### Dependencies
- QUnit
- Tape
- Tap-spec
- Eslint semi-standard
- Nodemon
- *run* ```npm install``` *from root folder to install dependencies*

### Testing:
- Run ```npm test``` to execute tape tests
- Qunit testing of the front end
- Istanbul
- Tape testing of back end
