
function KuaiPai(arr, left, right) {
    let i = left
    let j = right
    let mid
    if (i < j) {
        mid = arr[i]
        while (i != j) {
            while (j > i && arr[j] > mid) {
                j--
            }
            arr[i] = arr[j]
            
            while (i < j && arr[i] < mid) {
                i++
            }
            arr[j] = arr[i]
        }
        arr[i] = mid
        KuaiPai(arr, left, i - 1)
        KuaiPai(arr, i + 1, right)
    }
}
let arr = [2, 1, 0, 4, 3]
console.log(arr)
KuaiPai(arr, 0, 4)
console.log(arr)