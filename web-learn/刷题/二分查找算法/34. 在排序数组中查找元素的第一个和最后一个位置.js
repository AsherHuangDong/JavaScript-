/**
 * 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。

如果数组中不存在目标值 target，返回 [-1, -1]。

进阶：

你可以设计并实现时间复杂度为 O(log n) 的算法解决此问题吗？

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
var searchRange = function (nums, target) {
  let start = search(nums, target, true)
  let end = search(nums, target, false) - 1
  if (start <= end && end < nums.length && nums[start] === target && nums[end] === target) {
    return [start, end]
  }
  return [-1, -1]
}
var search = function (nums, target, lower) {
  let left = 0,
    right = nums.length - 1,
    ans = nums.length,
    mid
  while (left <= right) {
    mid = left + Math.floor((right - left) / 2)
    // lower 为 true，则寻找第一个大于等于 target 的数的位置
    // lower 为 false，则寻找第一个大于 target 的位置，则结束位置就是 该位置减 1
    if (nums[mid] > target || (lower && nums[mid] >= target)) {
      right = mid - 1
      ans = mid
    } else {
      left = mid + 1
    }
  }
  return ans
}
console.log(searchRange([5, 7, 7, 8, 8, 8, 10], 5))