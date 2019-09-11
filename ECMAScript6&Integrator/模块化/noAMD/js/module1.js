(function (window) {
  let name = 'module1'
  let sayName = () =>{
    return name
  }
  window.module1 = {sayName}
})(window)