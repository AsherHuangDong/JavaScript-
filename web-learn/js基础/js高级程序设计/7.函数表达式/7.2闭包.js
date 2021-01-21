/**
 * 1. 闭包定义：指有权访问另一个函数作用域中的变量的函数。
 *      创建闭包的常用方式就是在一个函数内部创建另一个函数，
 */
// 例:
function createComparisonFunction(propertyName) {
  return function (object1, object2) {
    let value1 = object1[propertyName]
    let value2 = object2[propertyName]
    if (value1 < value2) {
      return -1
    } else if (value1 > value2) {
      return 1
    } else {
      return 0
    }
  }
}

/**
 * 2. 闭包与变量
 */
function createFunctions() {
  let result = []
  for (var i = 0; i < 10; i++) {
    result[i] = function (num) {
      return function () {
        return num
      }()
    }(i)
  }
  return result
}
console.log(createFunctions())

/**
 * 3. 关于 this 对象：this 对象是在运行时基于函数的执行环境绑定的。
 */

name = 'The Window'

var object = {
  name: 'my object',
  getNameFunc: function () {
    var that = this
    return function () {
      return that.name
    }
  }
}
console.log(object.getNameFunc()())