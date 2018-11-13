"use strict";


module.exports = {

  show: function (message, success, failure) {
    var options = {};
    options.message = message;
    cordova.exec(success, failure, 'HelloWorld', 'show', [options]);
  }
}
