/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let left = 1,
    right = num,
    mid
  if (num === 0 || num === 1) return true
  while (left < right) {
    mid = Math.floor((left + right) / 2)
    if (mid * mid === num) return true
    if (mid * mid < num) left = mid + 1
    else right = mid
  }
  return false
};
console.log(isPerfectSquare(9))