
/**
 * 给定一个非空二叉树, 返回一个由每层节点平均值组成的数组.

示例 1:

输入:
    3
   / \
  9  20
    /  \
   15   7
输出: [3, 14.5, 11]
解释:
第0层的平均值是 3,  第1层是 14.5, 第2层是 11. 因此返回 [3, 14.5, 11].

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/average-of-levels-in-binary-tree
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

// 广度优先搜索
let averageOfLevels = function (root) {
    let queue = []
    let result = []
    queue.push(root)
    while (queue.length) {
        let sum = 0, count = 0
        let temp = []
        while (queue.length) {
            let node = queue.shift()
            sum += node.value
            count++
            if (node.left) {
                temp.push(node.left)
            }
            if (node.right) {
                temp.push(node.right)
            }
        }
        queue = temp
        result.push(sum * 1.0 / count)
    }
    return result
}

// 深度优先搜索
let averageOfLevels1 = function (root) {
    let sum = []
    let count = []
    if (!root) {
        return 
    }
} 