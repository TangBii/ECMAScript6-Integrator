(function (window, module1) {
  let name = 'module2'
  let sayName = ()=>{
    return name +'=>' + module1.sayName()
  }
  window.module2 = {sayName}
})(window, module1)