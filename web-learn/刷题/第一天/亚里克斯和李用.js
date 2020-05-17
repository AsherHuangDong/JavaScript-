
/** 
 * 亚历克斯和李用几堆石子在做游戏。偶数堆石子排成一行，每堆都有正整数颗石子 piles[i] 。

游戏以谁手中的石子最多来决出胜负。石子的总数是奇数，所以没有平局。

亚历克斯和李轮流进行，亚历克斯先开始。 每回合，玩家从行的开始或结束处取走整堆石头。

这种情况一直持续到没有更多的石子堆为止，此时手中石子最多的玩家获胜。

假设亚历克斯和李都发挥出最佳水平，当亚历克斯赢得比赛时返回 true ，当李赢得比赛时返回 false 。
*/

/** 
 * arr.reduce(function(prev,cur,index,arr){
    ...
    }, init);
    arr 表示原数组；
    prev 表示上一次调用回调时的返回值，或者初始值 init;
    cur 表示当前正在处理的数组元素；
    index 表示当前正在处理的数组元素的索引，若提供 init 值，则索引为0，否则索引为1；
    init 表示初始值。
*/

// 方法：
var stoneGame = function (piles) {
    let num = piles.reduce(function (sum, item) {
        return sum + item;
    })
    if (num % 2 === 0 || piles.length % 2 === 1) {
        return
    }
    return true;
    
};
let arr = [1, 3, 4];
console.log(stoneGame(arr));