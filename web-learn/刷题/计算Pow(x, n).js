/** 
 * 50. Pow(x, n)
 * 实现 pow(x, n) ，即计算 x 的 n 次幂函数。
 */

// 快速幂算法
var fastPow = function (x, n) {
    if (n === 0) {
        return 1.0
    }
    let half = n % 2 === 0 ? n / 2 : (n - 1) / 2
    let cur = fastPow(x, half)
    if (n % 2 === 0) {
        return cur * cur
    } else {
        return cur * cur * x
    }
}
var myPow = function (x, n) {
    if (n < 0) {
        n = -n
        x = 1 / x
    }
    return fastPow(x, n)
}
console.log(myPow(-2.00000, 2))