let moduleA;
module.exports = {
  saveModule(module) {
    moduleA = module
  },
  use() {
    console.log('使用a的use方法')
  },
  fn() {
    moduleA.use()
  }
}