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
// target 拷贝的目标
// targetState 从目标的那个位置进行拷贝
// sourceStatt // 从那个字节开始拷贝
// sourceEnd 拷贝到哪个位置
a1.copy(a3, 0, 0, 6) // api用不到
a2.copy(a3, 6, 0, 8) // api用不到
console.log('a3.toString()', a3.toString())

