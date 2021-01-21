/**
 * 实现 int sqrt(int x) 函数。
 * 计算并返回 x 的平方根，其中 x 是非负整数。
 * 由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。
 */
let mySqrt = function (x) {
  let left = 0,
    right = x,
    ans = -1,
    mid
  while (left <= right) {
    mid = left + Math.floor((right - left) / 2)
    if (mid * mid <= x) {
      ans = mid
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return ans
}

console.log(mySqrt(8))