// buffer 常用方法
// Buffer 是用来存放内容的 （便是的是内存空间）
// buffer 声明方式需要指定大小
//        长度 / 指定buffer中存放的特定内容 我们可以直接给字符串
// node 中的最小单位是字节
console.log(Buffer.alloc(3));
console.log('Buffer.from([100, 200])', Buffer.from([100, 200])) // 这种方式不常用
console.log(`Buffer.from('shuai')`, Buffer.from('shuai'))
// 内存一旦申请了，无法直接在原内存上进行扩展
// 合并数据
const a1 = Buffer.from('你好');
const a2 = Buffer.from('GYT')
const a3 = Buffer.alloc(12);
console.log('a1', a1)
// 自己实现copy
// 所谓的copy就是循环buffer中的每意向放到大的buffer中
// Buffer.prototype.copy = function (target, targetStart, sourceStart = 0, sourceEnd = this.length) {
//   for (let 1 = 0; 1 < sourceEnd - sourceStart; i++) {
//     console.log('copy')
//     target[targetStart + i] = this[sourceStart + i];
//   }
// }
// target 拷贝的目标
// targetStart 从目标的那个位置进行拷贝
// sourceStart // 从那个字节开始拷贝
// sourceEnd 拷贝到哪个位置
// a1.copy(a3, 0, 0, 6) // api用不到
// a2.copy(a3, 6, 0, 8) // api用不到
// console.log('a3.toString()', a3.toString())
// 实现concat
Buffer.concat = function (list, totalLen = this.reduce((memo, current))) {

}
Buffer.concat([a1, a2])
console.log('Buffer.concat([a1, a2])', Buffer.concat([a1, a2]).toString())
