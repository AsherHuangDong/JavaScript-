/**
 * * Object.keys() 只返回对象键值对中的键名。
 */
let obj = {
  foo: 'bar',
  baz: 44
}
console.log(Object.keys(obj))
console.log(Object.values(obj))

// Object.keys()的作用就类似于 for...in
function myKeys(obj) {
  let keyArr = []
  for (let key in obj) {
    keyArr.push(key)
  }
  return keyArr
}
console.log(myKeys(obj))