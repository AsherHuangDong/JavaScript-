/**
 * 1. 原型链继承: 
 */
function SuperType() {
  this.properType = true
  this.colors = ['red', 'blue', 'green']
}

SuperType.prototype.getSuperType = function () {
  return this.properType
}

function SupType() {}

SupType.prototype = new SuperType()
SupType.prototype.constructor = SupType

let subtype = new SupType()
let subtype1 = new SupType()
subtype.colors.push('orange')
console.log(subtype.colors, subtype1.colors)


/**
 * 2. 构造函数继承问题：
 *    - 方法都在构造函数中定义，没有做到函数复用。
 *    - 在超类型的原型中定义的方法，对子类型是不可见的，结果所有类型都只能使用构造函数模式。
 */
function SuperType1(name) {
  this.name = name
  this.colors = ['red', 'blue', 'green']
}

function SupType1() {
  SuperType1.call(this, 'jam')
}

let suptype2 = new SupType1()
console.log(suptype2.name, suptype2.colors)

/**
 * 3. 组合继承: 也叫伪经典继承，将原型继承和构造函数继承的技术组合到一起，从而发挥二者之长的一种继承模式。
 *      基本思想是：使用原型链实现对原型属性和方法的继承，通过借用构造函数来实现对实例属性的继承。
 *    这样既通过在原型上定义方法实现了函数复用，又能够保证每个实例都有它自己的属性。
 *    缺点: 无论什么情况下，都会调用两次超类型构造函数: 
 *         - 一次是创建子类型原型的时候。
 *         - 另一次是在子类型构造函数内部。
 */
function SuperType2(name) {
  this.name = name
  this.colors = ['red', 'blue']
}

SuperType2.prototype.sayName = function () {
  console.log(this.name)
}

function SupType2(name, age) {
  // 继承属性
  SuperType2.call(this, name) // 第二次调用
  this.age = age
}

SupType2.prototype = new SuperType2() // 第一次调用
SupType2.prototype.constructor = SupType2
SupType2.prototype.sayAge = function () {
  console.log(this.age)
}

let suptype1 = new SupType2('lucky', 33)
suptype1.sayName()
suptype1.sayAge()

/**
 * 4. 原型式继承: 借助原型可以基于已有的对象创建新对象，同时还不必因此创建自定义类型。
 *      Object.create() 方法，就是基于该模式实现的。
 *    缺点：包含引用类型值的属性始终会共享相应的值，就像使用原型模式一样。
 */
// 在 object 函数内部，先创建了一个临时性的构造函数，然后将传入的对象作为这个构造函数的原型，最后返回这个临时类型的一个新实例。
// 本质上讲，object() 对传入的对象进行了一次浅复制。
function object(o) {
  function F() {}
  F.prototype = o
  return new F()
}

var person = {
  name: 'Nicholas',
  friends: ['shelby', 'Court', 'Van']
}
let anotherPerson = object(person)
anotherPerson.name = 'Greg'
anotherPerson.friends.push('Rob')

let yetAnotherPerson = object(person)
yetAnotherPerson.name = 'Linda'
yetAnotherPerson.friends.push('Barbie')

console.log(person.friends, '\n', anotherPerson.friends, '\n', yetAnotherPerson.friends)

/**
 * 5. 寄生式继承: 是与原型式继承紧密相关的一种思路。
 *      该方式思路与寄生构造函数和工厂模式类似，即创建一个仅用于封装过程的函数，该寒素内部以某种方式来增强对象。
 *    使用场景: 对象不是自定义类型和构造函数的情况下，寄生式即恒也是一种有用的模式。任何能够返回新对象的函数都适用于此模式。
 *    注意：使用该模式来为对象添加函数，会由于不能做到函数复用而降低效率。这一点跟构造函数模式类似。
 */

function createAnother(original) {
  let clone = object(original) // 通过调用函数创建一个新对象
  clone.sayHi = function () { // 以某种方式来增强这个对象
    console.log('hi')
  }
  return clone // 返回这个对象
}

let anotherPerson1 = createAnother(person)
anotherPerson1.sayHi()

/**
 * 6. 寄生组合式继承: 
 *      - 通过构造函数继承属性 
 *      - 通过原型链的混成方式继承方法
 */

// 寄生组合继承模式
function inheritPrototype(subType, superType) {
  let prototype = object(superType.prototype) // 创建对象
  prototype.constructor = subType // 增强对象
  subType.prototype = prototype // 指定对象
}

function SuperType3(name) {
  this.name = name
  this.colors = ['red', 'blue', 'green']
}

SuperType3.prototype.sayName = function () {
  console.log(this.name)
}

function SupType3(name, age) {
  SuperType3.call(this, name)
  this.age = age
}
inheritPrototype(SupType3, SuperType3)
// (function () {
//   let o = function () {}
//   o.prototype = SuperType3.prototype
//   SupType3.prototype = new o()
//   SupType3.prototype.constructor = SupType3
// })()

SupType3.prototype.sayAge = function () {
  console.log(this.age)
}

let suptype3 = new SupType3('jishengzuhe', 22)
suptype3.colors.push('yellow')
console.log(suptype3.colors)
suptype3.sayName()
suptype3.sayAge()

let suptype4 = new SupType3('liuxing', 33)
suptype4.colors.push('orange')
console.log(suptype4.colors)
suptype4.sayName()
suptype4.sayAge()