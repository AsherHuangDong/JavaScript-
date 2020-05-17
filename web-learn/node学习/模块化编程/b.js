
//console.log(add(1,2));//报错，不能访问 a.js 中的方法
console.log('b start');
require('./c.js');
console.log('b end');