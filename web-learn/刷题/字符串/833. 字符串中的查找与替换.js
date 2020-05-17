
/**
 * 对于某些字符串 S，我们将执行一些替换操作，用新的字母组替换原有的字母组（不一定大小相同）。

每个替换操作具有 3 个参数：起始索引 i，源字 x 和目标字 y。规则是如果 x 从原始字符串 S 中的位置 i 开始，那么我们将用 y 替换出现的 x。如果没有，我们什么都不做。

举个例子，如果我们有 S = “abcd” 并且我们有一些替换操作 i = 2，x = “cd”，y = “ffff”，那么因为 “cd” 从原始字符串 S 中的位置 2 开始，我们将用 “ffff” 替换它。

再来看 S = “abcd” 上的另一个例子，如果我们有替换操作 i = 0，x = “ab”，y = “eee”，以及另一个替换操作 i = 2，x = “ec”，y = “ffff”，那么第二个操作将不执行任何操作，因为原始字符串中 S[2] = 'c'，与 x[0] = 'e' 不匹配。

所有这些操作同时发生。保证在替换时不会有任何重叠： S = "abc", indexes = [0, 1], sources = ["ab","bc"] 不是有效的测试用例。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/find-and-replace-in-string
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

let findReplaceString = function(S, indexes, sources, targets) {
    let str = S
    let strlen = str.length
    let indx = indexes.length
    let slen = sources.length
    let tlen = targets.length
    let i = 0
    let result = ''
    while (i < indx && i < slen && i < tlen) {
       if (indexes[i] < strlen) {
           if (str.includes(sources[indexes[i]], i)) {
               
           }
       }
    }
};