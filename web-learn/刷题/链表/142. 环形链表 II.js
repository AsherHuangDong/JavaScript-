/**
 * 给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。

为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。注意，pos 仅仅是用于标识环的情况，并不会作为参数传递到函数中。

说明：不允许修改给定的链表。

进阶：

你是否可以使用 O(1) 空间解决此题？
 

示例 1：
输入：head = [3,2,0,-4], pos = 1
输出：返回索引为 1 的链节表点
解释：链表中有一个环，其尾部连接到第二个节点。

// 来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/linked-list-cycle-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function List(arr) {
  let head = new ListNode(arr.shift())
  let p = head
  while (arr.length) {
    let node = new ListNode(arr.shift())
    if (!p.next) {
      p.next = node
    }
    p = p.next
  }
  return head
}

function ListNode(val) {
  this.val = val
  this.next = null
}

let detectCycle = function (head) {
  let p = head
  let q = head.next
  while (p && q) {
    p = p.next
    q = q.next.next
    if (p === q) return true
  }
  return false
}
let list = List([1, 2, 3, 4, 5])
console.log(list)