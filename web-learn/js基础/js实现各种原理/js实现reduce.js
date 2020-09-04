Array.prototype.myreduce = function (callback) {

  // 拿到数组
  const arr = this,
    len = arr.length
  // 下标值
  let k = 0,
    // 累加器
    accumulator = undefined,
    // k 下标对应的值是否存在
    kPresent = false,
    // 初始值
    initialValue = arguments.length > 1 ? arguments[1] : undefined

  // callback 不是函数时报错
  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function')
  }
  // 数组为空，并且有初始值 报错
  if (len === 0 && arguments.length < 2) {
    throw new TypeError('Reduce of empty array with no initial value')
  }

  // 如果初始值存在
  if (arguments.length > 1) {
    // 设置累加器为初始值
    accumulator = initialValue
  } else {
    // 初始值不存在
    accumulator = arr[k++]
  }

  while (k < len) {
    // 判断是否为 empty
    kPresent = arr.hasOwnProperty(k)

    if (kPresent) {
      const kValue = arr[k]
      // 调用 callback
      accumulator = callback.apply(undefined, [accumulator, kValue, k, arr])
    }
    k++
  }
  return accumulator
}

let arr = [1, 2, 3, 4, 5]

function add(x, y) {
  return x + y
}

console.log(arr.myreduce(add))