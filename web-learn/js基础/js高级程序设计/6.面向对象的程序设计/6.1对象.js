/**
 * * 6.1.1 属性类型:
 *   1. 数据属性:
 *     - Configurable: 表示能否通过 delete 删除属性从而重新定义属性，能否修改属性的特性，或者能否把属性修改为访问器属性。
 *        默认值为 true
 *     - Enumerable: 表示是否可遍历。默认为 true
 *     - Writable: 表示属性是否可修改。默认为 true
 *     - Value: 表示属性的值
 */
let person = {
  name: 'jam'
}
Object.defineProperty(person, 'name', {
  configurable: false,
  value: 'Nicholas'
})
person.name = '111'
delete person.name
console.log(person.name)

/**
 * 2. 访问器属性:
 *    - Configurable: 表示能否通过delete删除属性从而重新定义属性，能否修改属性的特性，或者能否把属性修改为数据属性。
 *        对于直接在对象上定义的属性，这个特性的默认值为true。
 *    - Enumerable: 表示是否可遍历。默认为 true
 *    - Get: 在读取属性时调用的函数。默认值为 undefined
 *    - Set: 在写入属性时调用的函数。默认值为 undefined
 *    注意：访问器属性不能直接定义，必须使用 Object.defineProperty() 定义。
 */
// 对象属性前面的下划线，是一种常见的记号，用于表示只能通过对象方法访问的属性。
let book = {
  _year: 2004,
  edition: 1
}
Object.defineProperty(book, 'year', {
  get: function () {
    return this._year
  },
  set: function (val) {
    if (val > 2004) {
      this._year = val
      this.edition += val - 2004
    }
  }
})
book.year = 2005
console.log(book.edition)