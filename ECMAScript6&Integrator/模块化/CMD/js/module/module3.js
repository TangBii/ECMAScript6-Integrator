define(function (require, exports, module) {
  let name = 'module3'
  let sayName = () =>{

    // 同步
    let module1 = require('./module1')
    console.log(module1.sayName())

    // 异步
    require.async('./module2', function (module2) {
      console.log(module2.sayName())
    })

    return name
  }
  module.exports = {sayName}
})