/**
 * 递归函数是通过调用自身的情况下构成的
 */
// 递归实现阶乘
function factorial(num) {
  if (num <= 1) {
    return num
  }
  return num * factorial(num - 1)
}

let anotherFactorial = factorial
factorial = null
// console.log(anotherFactorial(5)) // 因为此时 factorial 不再是函数，因此报错 factorial is not a function

/**
 * 1. arugments.callee 是一个指向正在执行的函数的指针，因此可以用它来实现对函数的递归调用
 */
function factorial1(num) {
  if (num <= 1) {
    return 1
  }
  return num * arguments.callee(num - 1)
}
let anotherFactorial1 = factorial1
factorial1 = null
console.log(anotherFactorial1(4))