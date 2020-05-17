
// 递归：暴力解法
function LongestStr(str1, str2) {
	let m = str1.length;
	let n = str2.length;
	let dp = function (i, j) {
		if (i == -1 || j == -1) {
			return 0;
		}
		if (str1[i] == str2[j]) {
			return dp(i - 1, j - 1) + 1;
		} else {
			return Math.max(dp(i - 1, j), dp(i, j - 1));
		}
	}
	return dp(m - 1, n - 1);
}

console.log(LongestStr('abc', 'cbab'));


/*动态规划:
  1.简历dp表；
  2.定义base case
  3。状态转换方程

*/

function longestStr(str1, str2) {
	let m = str1.length;
	let n = str2.length;
	let str = '';
	let dp = new Array(m + 1);
	for (let i = 0; i < dp.length; i++) {
		dp[i] = new Array(n + 1);
		for (let j = 0; j < dp[i].length; j++) {
			dp[i][0] = 0;
			dp[0][j] = 0;
		}
	}
	for (let i = 1; i < m + 1; i++) {
		for (let j = 1; j < n + 1; j++) {
			if (str1[i - 1] == str2[j - 1]) {
				dp[i][j] = dp[i - 1][j - 1] + 1;
			} else {
				dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
			}
		}
	}
	return dp[m][n];
}

console.log(longestStr('abc', 'cba'));