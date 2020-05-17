
/**
 * 给定一个非负整数数组，你最初位于数组的第一个位置。

数组中的每个元素代表你在该位置可以跳跃的最大长度。

你的目标是使用最少的跳跃次数到达数组的最后一个位置。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/jump-game-ii
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
*/

// 方法一: 反向查找出发位置，事件复杂度 O(n2)
let jump = function (arr) {

    // 需要寻找的前一个位置，默认为数组末尾位置
    let position = arr.length - 1;
    let step = 0;
    while (position > 0) {
        for (let i = 0; i < position; i++) {
            if (i + arr[i] >= position) {
                position = i;
                step++;
                break;
            }
        }
    }
    return step;
}

let arr = [2, 3, 1, 1, 4]
console.log(jump(arr));

// 方法二: 正向查找可到达的最大位置,事件复杂度 O(n)
let jump1 = function (arr) {

    let length = arr.length;

    // 当前能到达的最大下标位置
    let end = 0;

    // 下一步能跳的最远路径
    let maxposition = 0;

    // 步数
    let steps = 0;

    for (let i = 0; i < length - 1; i++) {
        maxposition = Math.max(maxposition, i + arr[i]);
        if(i == end){
            end = maxposition;
            steps++;
        }
    }
    return steps;
}
let arr1 = [3,2,1,0,4]
console.log(jump(arr1));
console.log(jump1(arr1));