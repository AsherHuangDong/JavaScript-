
/**
 * 前文谈到了作用域链查找问题，这一点在循环中是尤其需要注意的问题。
 * 如果在循环中需要访问非本作用域下的变量时请在遍历之前用局部变量缓存该变量，
 * 并在遍历结束后再重写那个变量，这一点对全局变量尤其重要，
 * 因为全局变量处于作用域链的最顶端，访问时的查找次数是最多的。
 */

//低效率写法
var globle = 1
function myCallback() {
    for (let i = 1000000; i >= 0; i--) {
        globle += i
    }
}

//更高效率写法
function myCallback1() {
    let local = globle
    for (let i = 0; i <= 1000000; i++) {
        local += i
    }
    globle = local
}
myCallback()
//myCallback1()
console.log(globle)

// 注意:要减少作用域链查找还应该减少闭包的使用。