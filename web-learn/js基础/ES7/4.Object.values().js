/**
 * * Object.values(): 只返回对象键值对中属性的值。返回的数组顺序，也跟 Object.entries() 相同
 */
console.log(Object.values({
  one: 1,
  two: 2
})) // [ 1, 2 ]

console.log(Object.values({
  3: 'a',
  2: 'b',
  1: 'c'
})) // [ 'c', 'b', 'a' ]