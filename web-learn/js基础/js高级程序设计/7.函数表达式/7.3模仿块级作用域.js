/**
 * * JavaScript 没有块级作用域的概念。这意味着在块语句中定义的变量，实际上是在包含
 *   函数中而非语句中创建的
 * * JavaScript 将 function 关键字当做是一个函数声明的开始，而函数声明后面不能跟圆括号。
 *    函数声明转换为函数表达式，只需要给整个 function 加上圆括号即可。
 * * 函数表达式后面可以跟圆括号。
 */
function outputNumbers(count) {
  for (var i = 0; i < count; i++) {
    console.log(i)
  }
  var i // 错误地重新声明没有初始化的同名变量，也不会改变i的值
  console.log(i)
}
// outputNumbers(5)

// 块级作用域语法如下
(function () {
  // 这里是块级作用域
  var i = 1
  console.log(i)
})();

(function fun() {
  console.log(1)
  return 1
})(); // 函数声明转换上表达式

// 使用块级作用域(闭包)，重写第一个函数
function outputNumbers(count) {
  (function () {
    for (var i = 0; i < count; i++) {
      console.log(i)
    }
  })();
  console.log(i) // 报错, i is not defined
}
outputNumbers(4)