/**
 * * 求幂运算符: '**'
 */
// 基本用法
console.log(3 ** 2) // 9, 表示 3 的 2 次方 Math.pow(3, 2)
console.log(Math.pow(3, 2))

// 由于是运算符，所以可以和 += 一样的用法
let b = 3
b **= 2 // <=> b = b ** 2
console.log(b)