function insertSort(arr){
    let n = arr.length;
    for(let i=0;i<n;i++){
        let temp = arr[i];
        let j = i-1;
        while(j>=0 && arr[j]>temp){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = temp;
    }
    return arr;
}

let arr = [3,21,1,4]
console.log(insertSort(arr))