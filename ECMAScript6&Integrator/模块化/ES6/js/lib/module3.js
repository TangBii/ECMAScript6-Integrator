'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sayName = sayName;

var _module = require('./module2');

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function sayName() {
  console.log(_module2.default.sayName());
  return 'module3';
}