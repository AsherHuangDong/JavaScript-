function ChaRuPaixu(arr) {
	let n = arr.length;
	for (let i = 1; i < n; i++) {
		let temp = arr[i];
		let j = i - 1;
		while (j >= 0 && temp <= arr[j]) { // 在已排序的地方，插入元素
			arr[j + 1] = arr[j];
			j--;
		}
		arr[j + 1] = temp;
	}
	return arr;
}

let a1 = [3, 4, 1, 2, 5, 7];
let a2 = [1, 2, 2, 1, 1];
console.log(ChaRuPaixu(a1));
console.log(ChaRuPaixu(a2));