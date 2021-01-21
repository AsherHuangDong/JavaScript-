function KuaiPai(arr, left, right) {
	let i = left;
	let j = right;
	let temp;
	if (i < j) { //区间内至少存在两个元素的情况
		temp = arr[i]; //用区间的第一个元素作为基准
		while (i !== j) { //从区间两端交替向中间扫描,直至i==j为止
			while (j > i && arr[j] > temp) {
				j--; //从右向左扫描，找第一个小于temp的arr[j]
			}
			arr[i] = arr[j]; //找到这样的arr[j],arr[i]与arr[j]交换
			while (i < j && arr[i] < temp) {
				i++; //从左向右扫描，找到第一个大于temp的arr[i]
			}
			arr[j] = arr[i]; //找到这样的arr[i],arr[i]与arr[j]交换
		}
		arr[i] = temp;
		KuaiPai(arr, left, i - 1); //对左区间递归排序
		KuaiPai(arr, i + 1, right); //对右区间递归排序
	}
}

let a1 = [2, 1, 4, 3, 6, 5, 90, 12]
KuaiPai(a1, 4, 7)
console.log(a1)