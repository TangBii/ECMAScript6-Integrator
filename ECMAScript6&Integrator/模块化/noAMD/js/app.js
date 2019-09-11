(function (window, module) {
  let name = 'app'
  let sayName = () =>{
    return name +'=>' + module.sayName()
  }
  window.app = {sayName}
})(window, module3)