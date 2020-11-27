// 方法一：
Object.prototype.clone = function () {
  if (this.constructor !== Array && this.constructor !== Object) {
    return this
  }
  var obj = this.constructor === Array ? [] : {}
  for (let i in this) {
    obj[i] = typeof this[i] === 'object' ? this[i].clone() : this[i]
  }
  return obj
}

// 方法二：
function clone(context) {
  if (typeof context !== 'object') {
    return context
  }
  let obj = Array.isArray(context) ? [] : {}
  for (let i in context) {
    if (typeof context[i] === 'object') {
      obj[i] = clone(context[i])
    } else {
      obj[i] = context[i]
    }
  }
  return obj
}

let n = 100
let arr = [1, 2, 3]
let obj = {
  name: 'jam',
  age: 23
}
console.log(n.clone())
console.log(arr.clone())
console.log(obj.clone())
console.log(clone(arr))
console.log(clone(obj))
console.log(clone(n))