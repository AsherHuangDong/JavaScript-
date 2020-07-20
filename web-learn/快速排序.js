//快速排序算法
function QuickSort(arr, left, right) {
	let i = left;
	let j = right;
	let temp;
	if (i < j) {
		temp = arr[i];
		while (i != j) {
			while (j > i && arr[j] > temp) {
				j--;
			}
			arr[i] = arr[j];

			while (i < j && arr[i] < temp) {
				i++;
			}
			arr[j] = arr[i];
		}
		arr[i] = temp;
		QuickSort(arr, left, i - 1);
		QuickSort(arr, i + 1, right);
	}
}

let arr = [3, 1, 2, 4];
QuickSort(arr, 0, 3);
console.log(arr);