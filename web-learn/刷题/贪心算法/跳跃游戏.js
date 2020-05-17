/** 
 * 给定一个非负整数数组，你最初位于数组的第一个位置。

数组中的每个元素代表你在该位置可以跳跃的最大长度。

你的目标是使用最少的跳跃次数到达数组的最后一个位置。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/jump-game-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/


/** 
 * 思路:初始化最远位置为 0，然后遍历数组，如果当前位置能到达，
 * 并且当前位置+跳数>最远位置，就更新最远位置。最后比较最远位置和数组长度。
*/
let canJump = function (nums) {
    let length = nums.length

    // 当前能到达的最远位置
    let maxpostition = 0
    for (let i = 0; i < length; i++) {
       if(i > maxpostition) return false
       maxpostition = Math.max(maxpostition, i + nums[i])
    }
    return true
}
let arr = [1, 2, 4, 3]
let arr1 = [3, 2, 1, 0, 4]
let arr2 = [1, 0, 1, 0]
console.log(jump(arr))
console.log(jump(arr1))
console.log(jump(arr2))
