
// 暴力解法
let intersection = function (arr1, arr2) {
    let arr = []
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                arr.push(arr1[i])
            }
        }
    }
    return [...new Set(arr)]
}
let arr1 = [1, 1, 2, 2, 3, 4, 0]
let arr2 = [1, 2, 4, 6, 7, 3, 0]
console.log(intersection(arr1, arr2))

// es6解法
let intersectionLess = function (arr1, arr2) {
    return [...new Set(arr1.filter(function (v) { return arr2.indexOf(v) > -1 }))]
}
console.log(intersectionLess(arr1, arr2))

// 动态规划解法
let intersectionFaster = function (arr1, arr2) {
    let m = arr1.length
    let n = arr2.length
    let dp = new Array(m + 1)
    for (let i = 0; i < m + 1; i++) {
        dp[i] = new Array(n + 1)
    }
    let result = 0
    let arr = []
    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            if (i === 0 || j === 0) {
                dp[i][j] = 0
            } else if (arr1[i - 1] === arr2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
                arr.push(arr1[i - 1])
            } else {
                dp[i][j] = 0
            }
        }
    }
    return [...new Set(arr)]
}
console.log(intersectionFaster(arr1, arr2))