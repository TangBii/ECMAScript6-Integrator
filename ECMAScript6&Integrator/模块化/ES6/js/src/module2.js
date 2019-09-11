import module1 from'./module1'
export default {
  sayName() {
    console.log(module1.sayName())
    return 'module2'
  }
}