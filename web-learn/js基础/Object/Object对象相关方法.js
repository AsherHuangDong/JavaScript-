/**
 * 1. Object.getPrototypeOf(): 返回参数对象的原型。这是获取原型的标准方法。它接受一个参数，即目标对象。
 */
var F = function () {}
var f = new F()

// 对象 f 的构造函数的原型是 F.prototype
console.log(Object.getPrototypeOf(f) === F.prototype) // true

// 特殊对象原型：
// 1. 空对象原型是 Object.prototype
console.log(Object.getPrototypeOf({}) === Object.prototype) // true

// 2. Object.prototype 的原型是 null
console.log(Object.getPrototypeOf(Object.prototype)) // null

// 3. 函数的原型是 Function.prototype
console.log(Object.getPrototypeOf(F) === Function.prototype) // true

// 4. Function.prototype 的原型是 {}
console.log(Object.getPrototypeOf(Function.prototype)) // true


/**
 * 2. Object.setPrototypeOf(): 为参数对象设置原型，返回该参数对象。它接受两个参数，第一个是目标对象，第二个是原型对象。
 */
var a = {}
var b = {
  x: 1
}
// 将对象 a 的原型设置为对象 b，因此 a 可以共享 b 的属性。
Object.setPrototypeOf(a, b)
console.log(Object.getPrototypeOf(a) === b) // true
console.log(a.x) // 1

// 使用 Object.setPrototypeOf() 模拟 new
var N = function () {
  this.foo = 'bar'
}

// var f = new F() 等同于
// 第一步: 将一个空对象的原型设置为 N.prototype
var n = Object.setPrototypeOf({}, N.prototype)
// 第二步: 将构造函数内部的 this 绑定这个空对象，然后执行构造函数，使得定义在 this 上面的方法和属性，都转移到这个空对象上面
N.call(n)

console.log(n)

/**
 * 3. Object.create(): 接受一个对象作为参数，然后以该对象为原型，返回一个实例对象。该实例完全继承原型对象的属性。
 *      该方法第一个参数不能为空，且必须是对象，否则会报错。
 *    
 */
// 原型对象
var A = {
  print: function () {
    console.log('hello')
  }
}
// 实例对象
var B = Object.create(A)
console.log(Object.getPrototypeOf(B) === A) // true
B.print() // hello
console.log(B.print === A.print) // true

// 用以下方法代替 Object.create()
// 该方法实质是新建一个空的构造函数 F，然后让 F.prototype 属性指向参数对象 obj，最后返回一个 F 的实例
// 从而实现让该实例继承 obj 的属性
if (typeof Object.create !== 'function') {
  Object.create = function (obj) {
    function F() {}
    F.prototype = obj
    return new F()
  }
}

// 以下三种生成的新对象是等价的
var obj1 = Object.create({})
var obj2 = Object.create(Object.prototype)
var obj3 = new Object()

// 如果要生成一个不继承任何属性的对象，可以将 Object.create() 的参数设置为 null
// 因为 null 是原型链的终点 不具备定义在 Object.prototype 对象上的属性和方法。
var obj = Object.create(null)
// obj.valueOf() // 报错： obj.valueOf is not a function

// 该方法生成的新对象，动态地继承了原型。因此在原型上添加或修改任何方法，立刻会反映到新对象之上。
var obj4 = {
  p: 1
}
var obj5 = Object.create(obj4)

obj4.p = 2
console.log(obj5.p) // 2

// 该方法可以接受第二个参数，它所描述的对象属性，会添加到实例对象，作为该对象自身的属性
var obj6 = Object.create({}, {
  p1: {
    value: 123,
    enumerable: true, // 是否可枚举
    configurable: true, // 是否可配置
    writable: true // 是否可写
  },
  p2: {
    value: 'abc',
    enumerable: false,
    configurable: false,
    writable: false
  }
})
console.log(obj6.p1, obj6.p2)
obj6.p2 = 'cvb'
console.log(obj6.p2) // abc，因为 p2 属性是只读属性，不可修改

// 等同于
var obj6 = Object.create({})
obj6.p1 = 123
obj6.p2 = 'abc'

// Object.create() 方法生成的对象，继承了它的原型对象的构造函数
function A1() {}
var a = new A1()
var b = Object.create(a)

console.log(b.constructor === A1) // true
console.log(b instanceof A1) // true


/**
 * 4. Object.prototype.isPrototypeOf(): 判断该对象是否为参数对象的原型
 */
var o1 = {}
var o2 = Object.create(o1)
var o3 = Object.create(o2)

console.log(o2.isPrototypeOf(o3)) // true
console.log(o1.isPrototypeOf(o3)) // true

Object.prototype.isPrototypeOf({}) // true
Object.prototype.isPrototypeOf([]) // true
Object.prototype.isPrototypeOf(/xyz/) // true
console.log(Object.prototype.isPrototypeOf(Function)) // true
Object.prototype.isPrototypeOf(Object.create(null)) // false

/**
 * 5. Object.prototype.__proto__: 返回构造函数的原型，可读写, __proto__ 只在浏览器部署，其他环境可以不部署
 */
var pro = {}
var p = {}
pro.__proto__ = p
console.log(Object.getPrototypeOf(pro) === p) // true

/**
 * 6. 获取原型对象的三种方法比较:
 *    - obj.__proto__: 不可靠，该属性只有浏览器才需要部署，其他环境可以不部署。
 *    - obj.constructor.prototype: 不可靠，该属性在手动改变原型对象时，可能会失效。
 *    - Object.getPrototypeOf(obj): 可靠
 */
var P1 = function () {}
var p1 = new P1()
var C = function () {}
C.prototype = p1
C.prototype.constructor = C
var c = new C()

console.log(c.constructor.prototype === p1)


/** 
 * 7. Object.getOwnPropertyNames(): 返回一个数组，成员对象本身的所有属性的键名，不包含继承的属性键名。
 *    Object.keys(obj): 返回一个数组，成员是对象本身可遍历属性键名
 */

// Date 对象所有属性都是不可遍历的
console.log(Object.getOwnPropertyNames(Date))
console.log(Object.keys(Date))

/**
 * 8. Object.prototype.hasOwnProperty()：返回布尔值，判断某个属性定义在对象自身还是定义在原型链上。
 */
let object = {
  x: 1
}
let object1 = {
  y: 2
}
Object.setPrototypeOf(object, object1)
console.log(object.hasOwnProperty('x'), object.hasOwnProperty('y'), object.hasOwnProperty('z'))

/**
 * 9. - Object.defineProperty(): 直接在对象上定义一个新属性，或修改一个对象的现有属性，并返回这个对象。
 *        语法: Object.defineProperty(obj, prop, descripter)
 *        - obj: 需要操作的对象
 *        - prop: 目标对象需要定义或修改的属性的名称
 *        - descripter: 将被定义或修改的属性的描述符
 *    - Object.defineProperties(): 直接在对象上定义一个或多个新的属性或修改现有属性，并返回该对象
 *        语法: Object.defineProperties(obj, props)
 *        - obj: 当前对象
 *        - props: 该对象的一个或多个键值对定义了将要为对象添加或修改的属性的具体配置
 *    - Object.getOwnPropertyDescriptor(): 返回指定对象上一个自身属性(不包括继承的属性)对应的属性描述符。
 *        语法: Object.getOwnPropertyDescriptor(obj, prop)
 *        - obj: 当前对象
 *        - prop: 目标对象内的属性名称
 *    - Object.getOwnPropertyDescriptors(): 返回指定对象上一个或多个自身属性对应的属性描述符。
 *        语法: Object.getOwnPropertyDescriptors(obj)
 *        - obj: 目标对象
 */
let newObj = Object.defineProperty({}, 'name', {
  configurable: false,
  enumerable: true,
  writable: true,
  value: '张三'
})
console.log(newObj)

let newObj1 = Object.defineProperties({}, {
  name: {
    value: '李四',
    enumerable: true
  },
  age: {
    value: 22,
    enumerable: true
  },
  sex: {
    value: '男',
    enumerable: true
  }
})
console.log(newObj1)
console.log(Object.getOwnPropertyDescriptor(newObj, 'name'))
console.log(Object.getOwnPropertyDescriptors(newObj1))

var newObj2 = {
  a: 1
}
console.log(Object.getOwnPropertyDescriptor(newObj2, 'a'))



/**
 * 10. in 运算符和 for...in 循环
 *    in 运算符返回一个布尔值，表示一个对象是否具有某个属性。它不区分该书是是对象自身的属性韩式继承的属性
 *    for...in 循环用于获取对象的所有可遍历属性(不管是自身的还是继承的),返回自身的可以使用 hasOwnProperty() 方法判断一下
 */
console.log('length' in Date)

// 获取对象所有属性
function inheritedPropertypNames(obj) {
  let props = {}
  while (obj) {
    Object.getOwnPropertyNames(obj).forEach(p => {
      props[p] = true
    })
    obj = Object.getPrototypeOf(obj)
  }
  return Object.getOwnPropertyNames(props)
}
console.log(inheritedPropertypNames({
  x: 1,
  y: 2
}))

/**
 * 11. 对象的拷贝
 *     - 确保拷贝后的对象，与原对象具有相同的原型
 *     - 确保靠背后的对象，与源对象具有相同的实例属性
 */
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
let object2 = {
  a: 2,
  b: {
    c: 3,
    d: 4
  },
  z: undefined,
  f: function () {}
}
object2.c = object2.b
object2.e = object2.a
object2.b.c = object2.c
object2.b.d = object2.b
object2.b.e = object2.b.c
console.log(copyObject(object2))

// ES7 方法: Object.getOwnPropertyDescriptors()
function copyObject1(orig) {
  return Object.create(Object.getPrototypeOf(orig), Object.getOwnPropertyDescriptors(orig))
}

console.log(copyObject1(object2))