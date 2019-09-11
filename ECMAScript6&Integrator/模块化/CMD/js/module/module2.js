define(function (exports, require, module) {
  let name = 'module2'
  let sayName = () =>{
    return name
  }
  module.exports = {sayName}
})