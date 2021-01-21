/**
 * 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，
 * 写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。
 */
var search = function (nums, target) {
  let left = 0,
    right = nums.length - 1
  let pivot = 0
  while (left <= right) {
    pivot = left + Math.floor((right - left) / 2)
    if (nums[pivot] === target) return pivot
    if (target < nums[pivot]) right = pivot - 1
    else left = pivot + 1
  }
  return -1
}
console.log(search([-1, 0, 3, 5, 9, 12], 9))