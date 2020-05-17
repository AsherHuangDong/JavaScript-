
/** 
 * require: 引入并执行模块代码
 * node模块类型:
 *  1.核心模块,如 fs，os等
 *  2.自定义模块，相对路径必须加 './'
 * 
 * node 没有全局作用域 只有 模块作用域：
 *  内部访问不了外部
 *  外部也访问不了内部
 * 
 * 模块间的通信:
 *   
*/
function add(x,y){
    return x + y;
}
console.log('a start')
require('./b.js');
console.log('a end')