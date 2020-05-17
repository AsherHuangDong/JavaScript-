//在有序数组中查找一个确定的数

//非递归方法
function BinarySearch(arr, x) { 
    let left = 0;
    let right = arr.length - 1;
    var newArr = arr.sort(function(a,b){
        return a-b;
    })
    while(left<=right){
        let mid = Math.floor((left+right)/2);
        if(arr[mid] == x){
            return true;
        }else if(arr[mid]>x){
            right = mid - 1;
        }else{
            left = mid + 1;
        }
    }
    return false;
}

//递归方法

function binarySearch(arr, item, left, right) {
    var start = start || 0
    var end = end || arr.length-1
    var mid = Math.floor((start+end)/2)

    if(item === arr[mid]){
        return mid;
    }else if(item>arr[mid]){
        return binarySearch(item,arr,mid+1,end)
    }else{
        return binarySearch(item,arr,start,mid-1)
    }
    return false
}

let arr = [1, 2, 3, 4, 5];
let x = 6;
let y = 1;
// console.log(binarySearch(arr, x, 0, 4));
// console.log(binarySearch(arr, y, 0, 4));
console.log(BinarySearch(arr,x));
console.log(BinarySearch(arr,y))