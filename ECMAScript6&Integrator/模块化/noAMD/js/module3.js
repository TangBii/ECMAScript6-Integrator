(function (window,module,$) {
  let name = 'module3'
  let sayName = () =>{
    return name +'=>' + module.sayName()
  }
  $('body').css('background','orange')
  window.module3 = {sayName}

})(window,module2,jQuery)