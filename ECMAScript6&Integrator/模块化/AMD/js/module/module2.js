define(['module1'],function (module1) {
  let name = 'module2'
  let sayName = () =>{
    return '=> module2' + module1.sayName()
  }
  return{sayName}
})