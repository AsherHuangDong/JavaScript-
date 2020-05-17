//map方法

let arr = [1,3,5,6,4,8];

let arr1 = arr.map((item,index,arr)=>{
	return item+1;
})

console.log(arr)
console.log(arr1)

let sum = arr.reduce((sum1,item,arr)=>{
	console.log(sum1)
	return sum1+item;
})

let arr2 = [1,2,3,[4,5,6],7,8,9]
let arr3 = arr2.flatMap((v) => v + 1);
console.log(sum)
console.log(arr2)