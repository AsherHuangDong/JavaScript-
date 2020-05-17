function Xuanze(arr) {
	let n = arr.length;
	for (let i = 0; i < n; i++) {
		for (let j = i + 1; j < n; j++) {
			if (arr[i] > arr[j]) {
				[arr[i], arr[j]] = [arr[j], arr[i]];
			}
		}
	}
	return arr;
}

let a1 = [3, 42, 1, 4]
console.log(Xuanze(a1));
