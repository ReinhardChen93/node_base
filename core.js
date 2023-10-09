// node 中和流量器的差异

// node中的全局对象 global , global中的属性可以直接在任何模块下访问
// 有些人会把musql的实力放在global上.不建议这样使用,会污染全局变量
// 有些属性不在global上也可以直接被访问, wxports module.exports require __dirnam __filename
// console.log('global', global)
// console.log('object.keys', Object.keys(global, { showHidden: true }))
// console.log('object.keys', Object.keys(process, { showHidden: true }))

// process.platform 平台 windows 还是 mac
// nextTIck
// cwd 当前工作目录 process.cwd() , 会随着命令的执行位置而变化 等价方法 path.resolve方法就是根据cwd来解析的
// 不同的平台设置方式不一样 mac export来设置, window 用set来进行设置
// console.log('process.platform', process.platform)
// env 当前运行环境的环境变量 一般使用dotenv

// const dotenv = require('dotenv').config();
// console.log('require(dotenv).config()', require('dotenv').config())
// console.log('process.env', process.env)

// argv 运行参数 两个参数 node的可执行文件 第二个参数是要执行的这个文件是谁
// 简写 -p --port
// 简写-c --config

// console.log('process.argv', process.argv)
// 手动解析参数, 需要根据自己的规范来解析比较麻烦
// const opts = {}
// process.argv.slice(2).reduce((memo, current, currentIndex, array) => {
//   if(current.startsWith('--')) {
//     memo[current.slice(2)] = array[currentIndex + 1]
//   }
//   return memo
// }, opts)
// console.log('opts', opts)
// 推荐使用commander
// 自己编写脚手架 基于commander模块来实现

const {program} = require('commander');
const pkg = require('./package.json') // vue create xxx --a 1 xxx就是项目名称
program.name(pkg.name) // 设置项目名称
// <> 是必传 [] 是可选填
program.usage('<command> [options]')
program
.command('create')
.option('-d , --directory <directory>', 'create project')
.action((args) => {
  console.log('create', args)
})
.on('--help', () => console.log(pkg.name + ' create directory '))
program.parse()


// nextTick node 中实现的微任务 , node 10 以上的版本执行和流量器是一样的

// 一个宏任务执行完毕后会清空所有微任务
/**  我们调用的nodeapi 都是交给我们libuv库来实现的 ,通过阻塞i/o来实现 异步
 *  通吃完成的方式就是事件驱动
   ┌───────────────────────────┐
┌─>│           timers          │ 放定时器
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │     pending callbacks     │ 上一轮没有执行完成的在这里执行
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
│  │       idle, prepare       │ 内部使用
│  └─────────────┬─────────────┘      ┌───────────────┐
│  ┌─────────────┴─────────────┐      │   incoming:   │
│  │           poll            │<─────┤  connections, │ 文件诙谐回调在这里来执行
│  └─────────────┬─────────────┘      │   data, etc.  │
│  ┌─────────────┴─────────────┐      └───────────────┘
│  │           check           │ 执行setImmiedate
│  └─────────────┬─────────────┘
│  ┌─────────────┴─────────────┐
└──┤      close callbacks      │ socket.close()
   └───────────────────────────┘
 */
// 当主栈执行完成后 会按照吮吸一次执行 timer(setTImeout) -> poll(fs.方法的回调) -> check(setImmediate)
// 当代码执行完毕后, 会从timer -> poll 检测poll是否都执行完毕了. 检查一下有没有setImmediate
// 如果有则执行 setImmediate 如果没有则在这里阻塞 也就是回到timers 继续循环 跟浏览器不同
// node 中只是将多个宏任务进行了划分 划分到了不同的宏任务队列中.
// 微任务也是在每个宏任务执行完毕后 才清空

// process.nextTick 并不是微任务, 每个宏任务执行完成后会执行nextTick (微任务比nextTick优先级更高)

// /https://nodejs.org/zh-cn/docs/guides/event-loop-timers-and-nexttick

// 当我们主栈代码执行完毕后, 会一次按照node的事件循环队列进行清空处理

// 检查timers 中是否有已经到达时间的任务
// 进入到poll阶段,主要就是检测是否有文件读写的操作回调, 让他依次执行
// 检测一下是否有用户编写了setImmediate,就去执行setImmediate,如果没有check相关内容, 则会在poll阶段阻塞
// 每个阶段存放的任务都是宏任务, 每个宏任务执行完毕后会清空微任务 (和浏览器事件环一致)
// node10之前是每个阶段执行完后 会清空微任务
// process.nextTick优先级 高于 微任务 (宏任务 -> nextTick -> 清空微任务 -> 下一个宏任务)

// setTimeout 和 setImmediate在使用的时候 (主模块中不知道谁快谁慢)

process.nextTick(() => {

})

setImmediate(() => {

})

const fs = require('fs');
const path = require('path');

fs.readFile(path.resolve(__dirname, 'note.md') , function ()  { // 这个是在poll中,所有优先走setImmediate在使用的时候
  setTimeout(() => {
    
  }, 0);
  // poll -> check -> timer -> poll
  setImmediate(() => {

  })
})
// nextTick 本质上不是异步 就是要给下一队列中要执行的回调 