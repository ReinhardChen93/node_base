// node 中和流量器的差异

// node中的全局对象 global , global中的属性可以直接在任何模块下访问
// 有些人会把musql的实力放在global上.不建议这样使用,会污染全局变量
// 有些属性不在global上也可以直接被访问, wxports module.exports require __dirnam __filename
console.log('global', global)
console.log('object.keys', Object.keys(global, {showHidden: true}))
console.log('object.keys', Object.keys(process, {showHidden: true}))

// process.platform
console.log('process.platform', process.platform)