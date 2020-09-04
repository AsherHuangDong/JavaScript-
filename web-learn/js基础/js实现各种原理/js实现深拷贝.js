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