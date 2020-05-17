

/**
 * 阻止冒泡: 
 *   w3c: e.stopPropagation()
 *    IE: e.cancelBubble = true
 *   vue: e.prevent
 */

/**
 * 阻止默认事件:
 *   w3c: e.preventDefault()
 *    ie: e.returnValue = false
 *   vue: e.stop()
 */

/**
 * 阻止事件捕获:
 *   w3c: e.stopImmediatePropagation()(阻止冒泡或捕获，还会阻止该元素的其他事件发生) 或者 
 *        e.stopPropagation()(既可以阻止事件冒泡，也可以阻止事件捕获，也可以阻止处于目标阶段。)
 *   IE: 
 */

