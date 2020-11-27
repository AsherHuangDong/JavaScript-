// 方法一：新增一个空数组，将该数组中没有的数添加进去
function quChong1(arr) {
  let b = []
  let i = arr.length
  while (i--) {
    if (b.indexOf(arr[i]) < 0) {
      b.push(arr[i])
    }
  }
  return b
}

// 方法二：使用对象的键进行操作
function quChong2(arr) {
  let obj = {}
  let i = arr.length
  while (i--) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = arr[i]
    }
  }
  return Object.values(obj)
}

// 方法三：递归
function quChong3(arr) {
  let i = arr.length

}
console.log(quChong2([1, 2, 2, 1]))