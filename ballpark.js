//http://stackoverflow.com/questions/30773756/is-it-okay-to-use-babel-node-in-production?lq=1

// only ES5 is allowed in this file
require("babel-register");

// other babel configuration, if necessary

// load your app
var app = require("./app.js");