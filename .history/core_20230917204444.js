// node 中和流量器的差异

// node中的全局对象 global , global中的属性可以直接在任何模块下访问
// 有些人会把musql的实力放在global上.不建议这样使用,会污染全局变量
globalThis.a = 1
console.log('a', a)