/**
 * 给你一个二进制字符串数组 strs 和两个整数 m 和 n 。

请你找出并返回 strs 的最大子集的大小，该子集中 最多 有 m 个 0 和 n 个 1 。

如果 x 的所有元素也是 y 的元素，集合 x 是集合 y 的 子集 。

示例 1：

输入：strs = ["10", "0001", "111001", "1", "0"], m = 5, n = 3
输出：4
解释：最多有 5 个 0 和 3 个 1 的最大子集是 {"10","0001","1","0"} ，因此答案是 4 。
其他满足题意但较小的子集包括 {"0001","1"} 和 {"10","1","0"} 。{"111001"} 不满足题意，因为它含 4 个 1 ，大于 n 的值 3 。
示例 2：

输入：strs = ["10", "0", "1"], m = 1, n = 1
输出：2
解释：最大的子集是 {"0", "1"} ，所以答案是 2。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/ones-and-zeroes
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
var findMaxForm = function (strs, m, n) {
  if (!strs.length) return 0
  let dp = Array.apply(null, Array(m + 1)).map(() => Array.apply(null, Array(n + 1)).fill(0))

  for (i of strs) {
    let count = timesOfChar(i)
    for (let zeroes = m; zeroes >= count[0]; zeroes--) {
      for (let ones = n; ones >= count[1]; ones--) {
        dp[zeroes][ones] = Math.max(1 + dp[zeroes - count[0]][ones - count[1]], dp[zeroes][ones]);
      }
    }
  }
  return dp[m][n];
};

function timesOfChar(str) {
  res = [0, 0]
  for (let i = 0; i < str.length; i++) {
    res[str[i]]++
  }
  return res
}
console.log(findMaxForm(["10", "0001", "111001", "1", "0"], 5, 3))
console.log(findMaxForm(["10", "0", "1"], 1, 1))
console.log(findMaxForm(["0", "00", "1"], 1, 0))