/**
 * 升序排列的整数数组 nums 在预先未知的某个点上进行了旋转（例如， [0,1,2,4,5,6,7] 经旋转后可能变为 [4,5,6,7,0,1,2] ）。

请你在数组中搜索 target ，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 。
示例 1：

输入：nums = [4,5,6,7,0,1,2], target = 0
输出：4
示例 2：

输入：nums = [4,5,6,7,0,1,2], target = 3
输出：-1
示例 3：

输入：nums = [1], target = 0
输出：-1

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/search-in-rotated-sorted-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
let search = function (nums, target) {
  let len = nums.length
  if (!len) return -1
  if (len === 1) return nums[0] === target ? 0 : -1
  let left = 0,
    right = len - 1,
    mid
  while (left <= right) {
    mid = left + Math.floor((right - left) / 2)
    if (target === nums[mid]) return mid
    if (nums[0] <= nums[mid]) { // 左边升序的时候
      if (target >= nums[0] && target < nums[mid]) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    } else { // 右边升序的时候
      if (target > nums[mid] && target <= nums[len - 1]) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
  }
  return -1
}
console.log(search([1, 3, 5], 1))
console.log(search([4, 5, 6, 7, 0, 1, 2], 4))