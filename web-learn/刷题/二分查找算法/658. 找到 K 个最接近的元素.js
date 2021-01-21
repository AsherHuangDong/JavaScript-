/**
 * 给定一个排序好的数组 arr ，两个整数 k 和 x ，从数组中找到最靠近 x（两数之差最小）的 k 个数。返回的结果必须要是按升序排好的。

整数 a 比整数 b 更接近 x 需要满足：

|a - x| < |b - x| 或者
|a - x| == |b - x| 且 a < b
 
示例 1：

输入：arr = [1,2,3,4,5], k = 4, x = 3
输出：[1,2,3,4]
示例 2：

输入：arr = [1,2,3,4,5], k = 4, x = -1
输出：[1,2,3,4]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/find-k-closest-elements
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
var findClosestElements = function (arr, k, x) {
  let left = 0,
    right = arr.length - 1,
    mid
  if (x <= arr[left]) return arr.slice(0, k)
  if (x >= arr[right]) return arr.slice(arr.length - k)
  while (left < right) {
    mid = left + Math.floor((right - left) / 2)
    x - arr[mid] > arr[mid + k] - x ? left = mid + 1 : right = mid
  }
  return arr.slice(left, left + k)
}
console.log(findClosestElements([1, 2, 3, 4, 5], 3, 4))