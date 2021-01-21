/**
 * 1. 概述: 事件发生以后，会产生一个事件对象，作为参数传给监听函数。
 *       浏览器提供一个 Event 对象，所有事件都是这个对象的实例。
 *       Event 对象本身就是一个构造函数，可以用来生成新的实例。例：
 *       event = new Event(type, options)
 *       参数：
 *         - type：字符串，表示事件名称。
 *         - options：事件对象的配置，该对象主要有两个属性
 *             - bubbles：布尔值，可选，默认为 false，表示事件对象是否冒泡
 *             - cancelabe：布尔值，可选，默认为 false，表示事件是否可以被取消，
 *                 即能否用 Event.preventDefault() 取消这个事件。
 *             - 注意：如果不是显式指定 bubbles 属性为 true，生成的事件就只能在 “捕获阶段”触发监听函数
 *       例： var event = new Event('look', { bubbles: true, cancelabe: false })
 *           document.dispatchEvent(event)
 *        
 */
// HTML 代码为: <div><p>Hello</p></div>
var div = document.querySelector('div')
var p = document.querySelector('p')

function callback(event) {
  var tag = event.currentTarget.tagName
  console.log('Tag: ' + tag) // 没有任何输出
}

// 在冒泡阶段监听，因此不会触发
div.addEventListener('click', callback, false)

var click = new Event('click')
// p 执行 click 事件，捕获阶段执行
p.dispatchEvent(click)

/**
 * 2. 实例属性：
 *    2.1 Event.bubbles, Event.eventPhase
 *      - bubbles(只读): 返回一个布尔值，表示当前事件是否冒泡
 *      - eventPhase(只读): 返回一个整数常量，表示事件目前所处的阶段。
 *          - 0，事件目前没有发生
 *          - 1，事件处于捕获阶段
 *          - 2，事件到达目标节点，即 Event.target 属性指向的那个节点
 *          - 3，事件处于冒泡阶段
 *    2.2 Event.cancelable, Event.cancelBubble, Event.defaultPrevented
 *      - cancelable(只读): 返回一个布尔值，表示事件是否可以取消。一般用于了解 Event 实例的特性。
 *      - cancelBubble: 是一个布尔值，如果设为 true，相当于执行 Event.stopPropagation()，可以阻止事件传播。
 *      - defaultPrevented: 返回一个布尔值，表示该事件是否调用过 Event.preventDefault() 方法
 *    2.3 Event.currentTarget, Event.target
 *      - currentTarget: 返回事件当前所在的节点，即事件当前正在通过的节点，也就是当前正在执行的监听函数所在的节点。
 *          随着事件的传播，这个属性的值会变。
 *      - target: 返回原始触发事件的那个节点，即事件最初发生的节点。这个属性不会随着事件的传播而改变。
 *    2.4 Event.type(只读): 返回一个字符串，表示事件类型。事件的类型是在生成事件的时候指定的。
 *    2.5 Event.timeStamp: 返回一个毫秒时间戳，表示事件发生的时间。相当于网页加载成功开始计算的。
 *    2.6 Event.isTrusted: 返回一个布尔值，表示改时间是否由真实的用户行为产生。例如：用户点击链接会产生一个Click事件
 *      该事件使用户产生的；Event 构造函数生成的时间，则是脚本产生的:
 *      var evt = Event('foo'); evt.isTrusted // false
 *    2.7 Event.detail: 返回一个数值，表示事件的某种信息。只有浏览器的 UI 事件才具有。具体含义与事件类型相关。
 *      - 例1：对于 click 和 dblclick 事件，detail 表示鼠标按下的次数(1 表示单击，2 表示双击，3 表示三击)
 *      - 例2：对于 鼠标滚轮事件，detail 表示滚轮滚动的距离，返回值总是3的倍数
 */

/**
 * 3. 实例方法：
 *    3.1 Event.preventDefault(): 取消浏览器对当前事件的默认行为。使用该方法的前提是事件对象的 cancelable 属性为 true
 *          该方法只是取消事件对当前元素的默认影响，不会阻止事件的传播。
 *    3.2 Event.stopPropagation(): 阻止事件在 DOM 中继续传播，防止再出发定义在别的节点上的监听函数。
 *          但不包括在当前节点上的其他的事件监听函数。
 *    3.3 Event.stopImmediatePropagation(): 阻止同一个时间的其他监听函数被调用，无论监听函数定义在当前节点还是其他节点。
 *          如果同一个节点指定了多个监听函数，这些函数会根据添加的顺序依次调换用。只要其中有一个监听函数调用了 Event.stopImmediatePropagation()
 *          其他箭筒函数就不再执行了。
 *    3.4 Event.composedPath(): 返回一个数组，成员是事件的最底层节点和依次冒泡经过的所有上层节点。
 */