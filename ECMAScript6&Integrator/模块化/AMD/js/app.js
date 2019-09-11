requirejs.config({
  baseURI:'./js',
  paths:{
    'module1':'./module/module1',
    'module2':'./module/module2',
    'module3':'./module/module3',
    'jquery':'./bin/jquery-1.12.3.min',
    'app.js':'./app'
  }
})



require(['module2','module3','jquery'], function (module2, module3, $ ) {
  let name = 'app'
  let sayName = () =>{
    return name + module3.sayName() + module2.sayName()
  }
  $('body').css('background', 'orange')
  console.log(sayName())
})

