/**
 * * object.entries()
 * * 1.作用：讲一个对象中可以枚举属性的键名和键值按照二维数组的方式返回。
 *        若是数组，则会将数组的下标作为键值返回。
 */
// 基本使用方式
console.log(Object.entries({
  one: 1,
  two: 2
}))
console.log(Object.entries([1, 2]))
/**
 * 2. 要点: 
 *    * 若是键名是 symbol，编译时会被自动忽略
 *    * entries() 返回的数组顺序和 for 循环一样，即如果对象的 key 值是数字，则返回值会对 key 值进行排序，返回的是排序后的结果
 *    * 利用 Object.entries() 创建一个 map
 */
// 1.若是键名是 symbol，编译时会被自动忽略
console.log(Object.entries({
  [Symbol()]: 1,
  two: 2
})) // [['two': 2]], symbol 被忽略

// 2.entries() 返回的数组顺序和 for 循环一样，即如果对象的 key 值是数字，则返回值会对 key 值进行排序，返回的是排序后的结果
console.log(Object.entries({
  3: 'a',
  4: 'b',
  1: 'c'
}))

// 3.利用 Object.entries() 创建一个 map
let obj = {
  foo: 'bar',
  baz: 42
}
let map1 = new Map([
  ['foo', 'bar'],
  ['baz', 42]
]) // 原本创建方式
let map2 = new Map(Object.entries(obj)) // 利用 Object.entries() 创建
console.log(map1)
console.log(map2)

/**
 * 3. 自定义 Object.entries()
 *   Object.entries 的原理其实是将对象中的键名和值分别取出来然后推进同一个数组中
 */
// 自定义 entries()

function myEntries(obj) {
  let arr = []
  for (let key of Object.keys(obj)) {
    arr.push([key, obj[key]])
  }
  return arr
}
console.log(myEntries(obj))

// Generator 版本
function* genEntryies(obj) {
  for (let key of Object.keys(obj)) {
    yield [key, obj[key]]
  }
}
let entryArr = genEntryies(obj)
console.log(entryArr.next().value)
console.log(entryArr.next().value)