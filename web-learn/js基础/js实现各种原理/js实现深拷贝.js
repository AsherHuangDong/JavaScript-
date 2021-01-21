function deepCopy(obj) {
  const type = typeof obj
  let copy
  switch (type) {
    case 'array':
      return copyArray(obj, type, copy)
      break
    case 'object':
      return copyObject(obj, type, copy)
      break
    case 'function':
      return copyFunction(obj, type, copy)
      break
    default:
      return obj
  }
}

function copyArray(obj, type, copy = []) {
  for (const [index, value] of obj.entries()) {
    copy[index] = deepCopy(value)
  }
  return copy
}

function copyObject(obj, type, copy = {}) {
  for (const [key, value] of Object.entries(obj)) {
    copy[key] = deepCopy(value)
  }
  return copy
}

function copyFunction(obj, type, copy = () => {}) {
  const fun = eval(obj.toString())
  fun.prototype = obj.prototype
  return fun
}

let obj = {
  name: 'jam',
  age: 100,
  arr: [1, 2, 3, 4]
}

console.log(deepCopy(obj))

// 方法二
function copyObject(orig) {
  var copy = Object.create(Object.getPrototypeOf(orig))
  copyOwnPropertiesFrom(copy, orig)
  return copy
}

function copyOwnPropertiesFrom(target, source) {
  Object.getOwnPropertyNames(source).forEach(propKey => {
    var desc = Object.getOwnPropertyDescriptor(source, propKey)
    Object.defineProperty(target, propKey, desc)
  })
  return target
}
console.log(copyObject(obj))

// 方法三
function copyObject1(orig) {
  return Object.create(Object.getPrototypeOf(orig), Object.getOwnPropertyDescriptors(orig))
}
console.log(copyObject1(obj))

// 方法四
function copyObject2(orig) {
  return Object.defineProperties({}, Object.getOwnPropertyDescriptors(orig))
}
console.log(copyObject2(obj))