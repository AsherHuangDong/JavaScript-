

/** 
 * require作用:
 *   1.加载文件并执行代码
 *   2.拿到被加载文件导出接口对象
 * import：导入
 * export：导出
*/

var ret = require('./b.js');
console.log(ret.foo);

console.log(ret.add(10,3))
