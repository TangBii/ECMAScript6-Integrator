'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _module = require('./module1');

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  sayName: function sayName() {
    console.log(_module2.default.sayName());
    return 'module2';
  }
};