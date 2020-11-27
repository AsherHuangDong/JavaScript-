/**
 * 给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。

百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，
最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

例如，给定如下二叉搜索树:  root = [6,2,8,0,4,7,9,null,null,3,5]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-zui-jin-gong-gong-zu-xian-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

// 迭代法:
let lowestCommonAncestor = function (root, p, q) {
    if (p.val < q.val)[p, q] = [q, p] // 保证 p.val > q.val
    while (root) {
        if (p.val < root.val) {
            root = root.left
        } else if (q.val > root.val) {
            root = root.right
        } else {
            break
        }
    }
    return root
}
// 递归法:

let lowestCommonAncestor1 = function (root, p, q) {
    if (root.val > q.val && root.val > p.val) {
        return lowestCommonAncestor1(root.left, p, q)
    } else if (root.val < q.val && root.val < p.val) {
        return lowestCommonAncestor1(root.right, p, q)
    } else {
        return root
    }
}