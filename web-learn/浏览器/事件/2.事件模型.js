/**
 * 1. 监听函数：浏览器的事件模型，就是通过监听函数对时间做出反应。
 *    - 绑定监听函数方法：
 *      - HTML 的 on- 属性：它的值是完整的监听代码，不能是函数名，绑定的方法只会在冒泡阶段触发
 *          正确
 *          <body onload="doSomething()" />
 *          <div onclick="console.log("触发事件")" />
 *          错误
 *          <body onload="doSomething"></body>
 *          el.setAttribute('onclick', 'doSomething()') 同上
 *      - 元素节点的事件属性：它的值是函数名，也只会在冒泡阶段触发
 *          window.onload = doSomething
 *          div.onclick = function (event) {
 *            console.log('触发事件')
 *          }
 *      - EventTarget.addEventListener() (推荐使用)
 *          所有 DOM 节点的实例都有 addEventListener 方法，用来为该父节点定义事件的监听函数
 *          window.addEventListener('load', doSomething, false)
 * 2. this ：监听函数内部的 this 指向触发事件的那个元素节点
 * 3. 事件传播：
 *      第一阶段：事件捕获
 *      第二阶段：触发事件(目标阶段)
 *      第三阶段：事件冒泡
 * 4. 事件代理：由于事件会在冒泡阶段向上传播到父节点，因此可以把子节点的监听函数定义在父节点上
 *       由父节点的监听函数同一处理多个子元素的事件。
 * 5. 阻止冒泡：
 *      1.Event.stopPropagation(): 表示事件到某个节点为止，不在传播
 *      2.Event.stopImmediatePropagation(): 既可以取消冒泡，也可以取消捕获
 *          表示彻底取消该事件，不再出发后面所有 Click 的监听函数。
 */
// 4. 事件代理
var ul = document.querySelector('ul')
ul.addEventListener('click', function (event) {
  if (event.target.tagName.toLowerCase() === 'li') {
    // 执行某些代码
  }
})

// stopPropagation()，输出 1， 2
p.addEventListener('click', function (event) {
  event.stopPropagation()
  console.log(1)
})
p.addEventListener('click', function (event) {
  // 会触发
  console.log(2)
})

// stopImmediatePropagation() ，输出 1， 不会输出 2
p.addEventListener('click', function (event) {
  event.stopImmediatePropagation()
  console.log(1)
})

p.addEventListener('click', function () {
  // 不会触发
  console.log(2)
})