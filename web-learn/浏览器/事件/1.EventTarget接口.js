/**
 * * 事件：本质是程序各个组成部分之间的一种通信方式，也是异步编程的一种实现。
 * 1. 概述：DOM 的事件操作(监听和触发)，都定义在了 EventTarget 接口。所有节点对象都部署了这个接口，
 *        其他一些事件通信的浏览器内置对象(比如，XMLHttpRequest， AudioNode， AudioContext)也部署了这个接口
 *        该接口主要提供三种实例方法：
 *        - addEventListener：添加事件监听
 *        - removeEventListener：移除事件监听
 *        - dispatchEvent：触发事件
 */

/**
 * 2. EventTarget.addEventListener()
 *    - 作用：用于当前节点或对象上，定义一个特定的事件监听函数。一旦这个事件发生，就会执行执行监听函数。该方法没有返回值。
 *    - 使用方式： target.addEventListener(type, listener[, useCapture])
 *    - 参数：* type: 事件名称，区分大小写
 *           * listener：监听函数。事件发生时，会调用该监听函数。(该处还可以具有一个 handleEvent 方法的对象)
 *           * useCapture：布尔值，表示监听函数是否在捕获阶段触发。默认为 false，(表示只在冒泡阶段触发)。
 *               还可以是一个属性配置对象。该对象有一下属性：
 *               - capture: 布尔值，表示表示监听函数是否在捕获阶段触发
 *               - once：布尔值，表示监听函数是否只执行一次
 *               - passive：布尔值，表示监听函数不会调用事件 preventDefault 方法。
 *                   如果调用了，浏览器将忽略这个要求，并在控制台输出一行警告
 *     -注意：addEventListener 方法可以为针对当前对象的同一事件，添加多个不同的监听函数。
 *         这些函数按照添加顺序触发，即先添加先触发。如果为同一个时间多次添加同一个监听函数，该函数只会执行一次，
 *         多余的添加将自动被去除(不必使用 removeEventListener 移除)
 *   
 */
// 例
function hello() {
  console.log('Hello World')
}
let button = document.getElementById('btn')
button.addEventListener('click', hello, false)

// handleEvent 对象
buttonElement.addEventListener('click', {
  handleEvent: function (event) {
    console.log('click')
  }
})
// once
Element.addEventListener('click', function (event) {
  // 只执行一次的代码
}, {
  once: true
})
// 注册多个事件
button.addEventListener('click', hello, false)

/**
 * 3. removeEventListener: 移除监听
 *    注意：移除的监听函数，必须是 addEventListener 方法添加的那个监听函数，而且必须在同一个节点上，否则无效
 *         第一个参数事件类型，区分大小写
 */
// 例1：有效移除
div.addEventListener('click', listener, false) // 添加监听
div.removeEventListener('click', listener, false) // 移除监听

// 例2：无效移除，因为监听函数不是同一个匿名函数
div.addEventListener('click', function (e) {}, false)
div.removeEventListener('click', function (e) {}, false)

// 例3：无效移除，因为第三个参数不同
Element.addEventListener('mousedown', handleMouseDown, true)
Element.removeEventListener('mousedown', handleMouseDown, false)

/**
 * 4. EventTarget.dispatchEvent()
 *    - 作用：在当前节点上触发指定事件，从而触发监听函数的执行。该方法返回一个布尔值，只要有一个监听函数调用了
 *         Event.preventDefault(), 则返回值为 false，否则为 true
 *    - 使用方式：target.dispatchEvent(event)
 *    - 参数：一个 Event 对象，如果为空或者不是一个有效的事件对象，将报错。
 */
// 例1：触发 Click 事件
para.addEventListener('click', hello, false)
var event = new Event('click')
para.dispatchEvent(event)

// 例2：根据 dispatchEvent 方法的返回值，判断事件是否被取消了
var canceled = !cb.dispatchEvent(event)
if (canceled) {
  console.log('事件取消')
} else {
  console.log('事件未取消')
}