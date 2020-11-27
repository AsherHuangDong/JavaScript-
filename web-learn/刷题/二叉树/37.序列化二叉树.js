/**
 * * 请实现两个函数，分别用来序列化和反序列化二叉树。
 *   示例:
      你可以将以下二叉树：

         1
        / \
       2   3
          / \
         4   5

      序列化为 "[1,2,3,null,null,4,5]"

      来源：力扣（LeetCode）
      链接：https://leetcode-cn.com/problems/xu-lie-hua-er-cha-shu-lcof
      著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

// 序列化
var serialize = function (root) {
  if (!root) return ''
  let res = []
  let queue = [root]
  while (queue.length) {
    let node = queue.shift()
    if (node) {
      res.push(node.val)
      queue.push(node.left)
      queue.push(node.right)
    } else {
      res.push(null)
    }
  }
  return res.join(',')
}

// 反序列化
var deserialize = function (data) {
  if (!data) return null
  let arr = data.split(',')
  let root = new TreeNode(arr.shift());
  let list = [root]
  while (list.length) {
    let temp = []
    for (let i = 0; i < list.length; i++) {
      let p = list[i];
      let left = arr.shift()
      if (left) {
        p.left = new TreeNode(left)
      }

      let right = arr.shift()
      if (right) {
        p.right = new TreeNode(right)
      }

      if (p.left) {
        temp.push(p.left)
      }
      if (p.right) {
        temp.push(p.right)
      }
    }
    list = temp
  }
  return root
}