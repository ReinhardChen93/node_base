const a = require('./cic-a');
const b = require('./cic-b');
a.saveModule(b);
b.saveModule(a);

// 找a中使用b的方法
a.fn() // a使用b
b.fn() // b使用a
