/**
 * * Array.prototype.includes()
 * * includes() 的作用是查找一个值是否存在于一个数组中，若存在返回 true，否则返回 false
 * * 接收两个参数，第一个参数是要搜索的值，第二个是索引的开始位置
 */
// 基本用法
let arr = [1, 2, 3, 4]
console.log(arr.includes(1), arr.includes(0))

// 接收两个参数，第一个参数是要搜索的值，第二个是索引的开始位置
console.log(['a', 'b', 'c', 'd'].includes('a', 0))

/**
 * * 与 ES6 中的 indexOf 比较: 
 *   1. 有时候是等效的
 *   2. 在判断 +0 和 -0 时被认为是相同的。
 *   3. 只能判断简单类型的数据，对于复杂类型的数据，比如对象类型的数组，二维数组，这些是无法判断的。
 * * 优缺点比较：
 *   1.简便性：includes 返回的是布尔值，能直接判断数组中存不存在这个值，而 indexOf 返回的索引，因此前者更方便。
 *   2.精确性：两者都是采用 === 的操作符来作比较的，不同之处在于对 NaN 的处理结果不同。
 *           js 中的 NaN === NaN 的结果是 false，indexOf() 也是这样处理的
 *           includes() 则是 NaN === NaN 的结果是 true
 * * 总结：
 *   由于对 NaN 的处理方式不同，如果指向知道某个值是否存在于数组中二不关心它的索引位置，建议使用 includes(),
 *   如果需要获取一个值在数组中的位置，则只能使用 indexOf()
 */
// 1. 有时候是等效的
console.log(['a', 'b', 'c'].includes('a', 0)) // true
console.log(['a', 'b', 'c'].indexOf('a') > -1) // true

// 2. 在判断 +0 和 -0 时被认为是相同的。
console.log([1, -0, 1].indexOf(+0)) // 1
console.log([1, -0, 1].includes(+0)) // true

// 3. 只能判断简单类型的数据，对于复杂类型的数据，比如对象类型的数组，二维数组，这些是无法判断的。
console.log([1, [1, 2], 3].includes([1, 2]))
console.log([1, [1, 2], 3].indexOf([1, 2]))

// js 中的 NaN === NaN 的结果是 false，indexOf() 也是这样处理的
// includes() 则是 NaN === NaN 的结果是 true
console.log([1, NaN, 2].indexOf(NaN)) // -1
console.log([1, 2, NaN].includes(NaN)) // true