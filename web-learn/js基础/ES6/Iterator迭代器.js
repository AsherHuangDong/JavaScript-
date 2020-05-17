
/**
 * JavaScript数据结构: Object  Array  ES6新增: Map  Set
 * 
 * Iterator遍历器作用:
 *   1.为各种数据结构，提供一个统一的、简便的访问接口
 *   2.使得数据结构的成员能够按某种次序排列
 *   3.ES6创造了一种新的遍历命令for...of循环，Iterator接口主要供for...of消费
 */

/**
 * Iterator遍历过程:
 *   1.创建一个指针对象，指向当前数据结构的起始位置。也就是说，遍历器对象本质上，就是一个指针对象
 *   2.第一次调用指针对象的next方法，可以将指针指向数据结构的第一个成员
 *   3.第二次调用指针对象的next方法，指针就指向数据结构的第二个成员
 *   4.不断调用指针对象的next方法，直到它指向数据结构的结束位置
 * Iterator遍历:
 *  每一次调用next方法，都会返回数据结构的当前成员的信息。具体来说，
 *  就是返回一个包含value和done两个属性的对象。
 *  其中，value属性是当前成员的值，done属性是一个布尔值，表示遍历是否结束
 */
// 例


let makeIterator = function(arr) {
    let nextIndex = 0
    // 返回遍历器对象
    /**
     * 对于遍历器对象来说，done: false和value: undefined属性都是可以省略的，
     * 因此上面的makeIterator函数可以简写成下面的形式。
     */
    return {
        next: function() {
            return nextIndex < arr.length ? 
            {value: arr[nextIndex++]} : 
            {done: true}
        }
    }
}
let a1 = [1, 3, 4, 5]
let it = makeIterator(a1)
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())

