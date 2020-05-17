
function longestStr(str1, str2) {
	let m = str1.length;
	let n = str2.length;
	let cp = new Array(m + 1);
	let result = 0;
	for (let i = 0; i < m + 1; i++) {
		cp[i] = new Array(n + 1);
	}

	let str = ''

	for (let i = 0; i <= m; i++) {
		for (let j = 0; j <= n; j++) {
			if (i === 0 || j === 0) {
				cp[i][j] = 0;
			} else if (str1[i - 1] === str2[j - 1]) {
				cp[i][j] = cp[i - 1][j - 1] + 1;
				result = Math.max(result, cp[i][j]);
				str += str1[i - 1];
			} else {
				//str = '';
				cp[i][j] = 0;
			}
		}
	}
	return str;
}

console.log(longestStr('abcdef', 'adefm'));