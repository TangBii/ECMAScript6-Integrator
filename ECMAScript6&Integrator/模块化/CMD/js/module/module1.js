define(function (require, exports, module) {
  let name = 'module1'
  let sayName = () => {
    return name
  }
  module.exports = {sayName}
})