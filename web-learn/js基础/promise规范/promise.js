/**
 * * promise/A+规范：
 *   1.术语：
 *     1.1. promise 是具有 then 行为符合本规范的防范的对象或函数
 *     1.2. "thenable" 是定义 then 方法的对象或函数
 *     1.3. "value" 是任何合法的 JavaScript 值 (包括 undefined， ableable 或 promise)
 *     1.4. "exception" 是使用该 throw 语句引发的值
 *     1.5. "resion" 是表明拒绝的承诺原因的值
 *   2. 要求
 *    2.1 Promise 状态：
 *      一个承诺必须处于三种状态之一：pendding, resolved 或 rejected
 *      2.1.1. pendding：可以装换为 resolved 或 rejected
 *      2.1.2. resolved：不可过渡到其他状态；必须具有一个值，该值不能更改
 *      2.2.3. rejected：不可过渡到其他状态；必须具有一个理由，不可改变
 *    2.2 then 方法
 *      一个承诺必须提供一种 then 方法访问当前值或最终值或原因的方法。
 *      promise 的 then 方法接受两个参数：
 *      promise.then(onFulfilled, onRejected)
 *      2.2.1. 这两个 onFulfilled 或 onRejected 可选参数:
 *        2.2.1.1. 如果 onFulfilled 不是函数，则必须将其忽略
 *        2.2.1.2. 如果 onRejected 不是函数，则必须将其忽略
 *   
 */
const promise1 = new Promise((resolve, reject) => reject())

const promise2 = promise1.then(function () {
  console.log('123')
}, null)

promise2.then(() => {
  console.log('promise2 已完成')
}, () => {
  console.log('promise2 已拒绝')
})