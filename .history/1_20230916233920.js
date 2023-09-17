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