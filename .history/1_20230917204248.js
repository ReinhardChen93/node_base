// 初始化package.json之后，就可以安装模块
// /能在命令行中使用，不是在项目中使用) ，本地安装(在项目中使模块安装有两种方式全局安装(全局安装是只
// (不能再代码中使用)// sudo npm install mime -g
// local/bin// npm config list 查看安装后的目录 /usr放的所有的安装脚本
// windows 想让命令可以再全局下执行 需要配置全局环境变量
// 行对应的命令找PATH对应的路径，如果在里面则执// mime ->
// 自己编写一个全局模块， 需要先起一个包名 唯一的
// 写一个bin作为入口指定执行的文件候我们想测试 可以采用npm link命令将包创建一个软链，连接到全局下 

// 本地包 可以在代码中使用
// --save 就是开发+上线都需要的
//  --save-dev 开发时需要，上线不需要
// 项目依赖dependencies
// 开发依赖devDependencies同等依赖peearDependencies 要求你安装但是不安装也不报错 
// 爱装不装optionDepencies
// 打包依赖 捆绑打包
// 也可以不区分依赖 全部安装成项目依赖(不建议这样

// 1.0.0-alpha.4 内部测试的
// 1.0.0-beta.1 公开测试
// 1.0.0-rc.2 马上可以正式发布了 目前版本是rc
// 版本号标识符~2.2.0 意味着只能是2 不能是1，3~1.1.0 限制了 只能是 1.1开头的
// >=2.2.0 <=2.2.0 1.0.0-2.0.0
// scripts 设置执行脚本 ，设置后可以通过 npm run 来执行脚本
//全局包可以安装到本地(安装到本地好处就是可以防止每个人安装的版本一致)
// 全局包安装到本地 会在node modules下生成bin文件夹有对应的命令
// 通过npm run 命令在执行命令前会将当前的node_modules/.bin目录放置到环境变量中，执行后再移除
// npx 命令是npm 5.2之后提供的(命令不存在会安装使用再销毁) (缺点就是不能保存执行命令)

// nrm npm源管理工具
// nvm node版本工具
/**
 * 发包
 * npm publish 发布当前包
 * 必须将npm 源切换至官方源
 */