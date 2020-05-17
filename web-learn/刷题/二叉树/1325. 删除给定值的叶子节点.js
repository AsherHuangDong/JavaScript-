/** 
给你一棵以 root 为根的二叉树和一个整数 target ，请你删除所有值为 target 的叶子节点 。
注意，一旦删除值为 target 的叶子节点，它的父节点就可能变成叶子节点；
如如果新叶子节点的值恰好也是 target ，那么这个节点也应该被删除。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/delete-leaves-with-a-given-value
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

// 分析: 二叉树的 后序遍历
var removeLeafNodes = function (root, target) {
    if (root === null) {
        return null;
    }
    root.left = removeLeafNodes(root.left, target);
    root.right = removeLeafNodes(root.right, target);
    if (root.left === null && root.right === null && root.val === target) {
        return null;
    }
    return root;
}