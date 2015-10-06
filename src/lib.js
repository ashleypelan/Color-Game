var express = require('express');
var router = express.Router();

lib = {

  verification: function(email, password, name) {
      var errorArray = [];
      if (email.trim() === "") {
          errorArray.push("Please enter you email");
      } if (password.trim() === "") {
          error = "Please enter a password";
          errorArray.push(error);
      } if (name.trim === "") {
          error = "Please enter your name";
          errorArray.push(error);
      }
      return errorArray;
    }

}

module.exports = lib;
