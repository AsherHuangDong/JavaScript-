
/**
 * 有 n个人，编号为 1-n，围成一圈，数数从 1开始到k ,每数到k的人就退出队伍，下一个人接着从1 数到k
 * 请计算出编号顺序
 */


 // 方法一: 数组法
let Shushu = function (n, k) {
    let arr = new Array(n)
    let result = []
    let flag = 0
    let i = 0
    let j = 0
    let index = 1
    while (i < n) {
        arr[i] = i + 1
        i++
    }
    while (1) {
        j = j >= arr.length ? j - arr.length : j // <=> j = j % arr.length
        if (arr[j] !== 0) {
            arr[j] = index
            index++
        }
        j++
        if (index === k + 1) {
            arr[j-1] = 0
            index = 1
            flag++
        }
        if (flag === n) {
            return j
        }
    }
}
console.log(Shushu(3, 2))