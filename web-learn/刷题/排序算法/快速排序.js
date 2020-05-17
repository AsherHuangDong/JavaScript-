

let kuaisu = function (arr, left, right) {
    let i = left
    let j = right
    let temp
    if (i < j) {
        while (i < j) {
            temp = arr[i]
            while (j > i && arr[j] > temp) {
                j--
            }
            arr[i] = arr[j]
            while (i < j && arr[i] < temp) {
                i++
            }
            arr[i] = arr[j]
        }
        arr[i] = temp
        kuaisu(arr, left, i - 1)
        kuaisu(arr, i + 1, right)
    }
}
let a2 = [5, 1, 4, 2, 0]
let a1 = [0]
kuaisu(a2, 0, 0)
kuaisu(arr, 0, 1)
console.log(arr2)
console.log(a1)