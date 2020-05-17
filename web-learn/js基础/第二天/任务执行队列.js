

/*
  宏任务(macrotask): script, settimeOut, setInterval, setImmidiat(node独有), I/O, requestAnimationFrame(浏览器独有)，UI渲染
  微任务(microtask): Promise.(then catch finally), process.nextTick(node独有),MutationObserver(浏览器独有)
 */

/** requestAnimationFrame:告诉浏览器——你希望执行一个动画，
  * 并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数.
  * 该回调函数会在浏览器下一次重绘之前执行.
  */

//经典提问：setTimeout设置为0的作用,无论延迟事件设置为多少，都为进入宏任务队列


/**
 * 浏览器任务循环机制：
 * 1.执行同步代码，这属于宏任务,执行宏任务时遇到微任务添加到微任务队尾，并在当前循环执行。
 * 2.行栈为空，查询是否有微任务需要执行
 * 3.执行所有微任务，执行中遇到微任务，将微任务添加到当前队列的队尾，并在当前周期执行。
 * 4.必要的话渲染 UI
 * 5.然后开始下一轮 Event loop，执行宏任务中的异步代码
 */

/**
 * node任务循环机制:
 * 宏任务(macrotask)执行队列:
 * 	1.timer阶段: 执行 setTimeout 和 setInterval 的回调函数
 * 	2.I/O阶段: 执行除了 close 事件，定时器和 setImmediate 之外的回调函数
 * 	3.idle, prepare阶段: idle, prepare 阶段内部实现
 * 	4.poll阶段: poll 阶段很重要，这一阶段中，系统会做两件事情
 *            1.执行到点的定时器
 *            2.执行 poll 队列中的事件
 *            并且当 poll 中没有定时器的情况下，会发现以下两件事情:
 * 				1.如果 poll 队列不为空，会遍历回调队列并同步执行，直到队列为空或者系统限制
 * 				2.如果 poll 队列为空，会有两件事发生:
 * 					1.如果有 setImmediate 需要执行，poll 阶段会停止并且进入到 check 阶段执行 setImmediate
 * 					2.如果没有 setImmediate 需要执行，会等待回调被加入到队列中并立即执行回调
 * 	   		  如果有别的定时器需要被执行，会回到 timer 阶段执行回调。
 * 	5.check阶段: 执行setImmidiate 的回调函数
 * 	6.close callbacks阶段: 执行 close 事件
 * 
 * 微任务(microtask)执行队列:
 * 	1.微任务会在以上每个阶段完成后立即执行
 * 	2.process.nextTick 会最先执行。
 */


console.log('start');


setTimeout(() => {          // callback1
	console.log(111);
	setTimeout(() => {        // callback2
		console.log(222);
	}, 0);
	setImmediate(() => {      // callback3
		console.log(333);
	})
	process.nextTick(() => {  // callback4
		console.log(444);
	})
}, 0);

setImmediate(() => {        // callback5
	console.log(555);
	process.nextTick(() => {  // callback6
		console.log(666);
	})
})

setTimeout(() => {          // callback7              
	console.log(777);
	process.nextTick(() => {  // callback8
		console.log(888);
	})
}, 0);

process.nextTick(() => {    // callback9
	console.log(999);
})

console.log('end');