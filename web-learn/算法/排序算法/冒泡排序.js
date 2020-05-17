function Maopao(arr) {
	let n = arr.length;
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
			}
		}
	}
	return arr;
}

let a1 = [1, 5, 6, 4]
console.log(Maopao(a1));