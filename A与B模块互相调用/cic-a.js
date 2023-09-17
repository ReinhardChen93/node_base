let moduleB;
module.exports = {
  saveModule(module) {
    moduleB = module
  },
  fn() {
    moduleB.use(); // 在a中使用b
  },
  use() {
    console.log('在b中使用a')
  }
}