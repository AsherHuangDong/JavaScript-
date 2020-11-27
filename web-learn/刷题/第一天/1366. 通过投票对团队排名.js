var rankTeams = function (votes) {
	let n = votes.length;
	if (n > 1000) return;
	let k = 0;
	//let h = 0;
	//let o = 0
	let m = votes[0].length;
	for (let i = 0; i < n; i++) {
		if (votes[i].match(/[^A-Z]/g) !== null) {
			//console.log(votes[i].match(/[^A-Z]/g))
			k++;
			break;
		}
		if (votes[i].length !== m) {
			k++;
			break;
			//o = votes[i].length;
		}
		for (let j = 0; j < votes[i].length; j++) {
			if (votes[i].split(votes[i][j]).length - 1 !== 1) {
				k++;
			}
			//h = votes[i].split(votes[i][j]).length-1;
		}

	}
	if (k !== 0) return false;
	return true;
	//return (k+'+'+h+'+'+0)

};
var rankTeams1 = function (votes) {
	if (votes.length === 0) return '';

	let teams = votes[0].split(''),
		arr = [];
	//获取排名记录
	for (let i = 0; i < votes.length; i++) {
		let vote = votes[i],
			rank = 1;
		for (let j = 0; j < vote.length; j++) {
			if (arr[rank] === undefined) arr[rank] = {}
			let team = vote.charAt(j); //获取位置j对应的元素
			if (arr[rank][team] === undefined) {
				arr[rank][team] = 1;
			} else {
				arr[rank][team]++;
			}
			rank++;
		}
	}
	console.log(arr);
	//排序
	teams.sort((a, b) => {
		let rank = 1,
			res = 0;
		while (res === 0) {
			if (arr[rank] === undefined) {
				if (a < b) res = -1;
				if (a > b) res = 1;
			} else {
				let l = arr[rank][a] || 0,
					r = arr[rank][b] || 0;
				if (l > r) res = -1;
				if (l < r) res = 1;
			}
			rank++;
		}
		return res
	})
	console.log(teams)
	return teams.join('');
};

let a = 'abaacEF'
let b = ["ABC", "ACB", "ABC", "ACB", "ACB"];
let c = ['ABC']
console.log(a.match(/[^A-Z]/g));
console.log(rankTeams(['EF']))
console.log(a.split('a').length - 1);
console.log(a)
console.log(rankTeams1(b));
console.log(rankTeams(c));