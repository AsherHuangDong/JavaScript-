/**
 * 1. 工厂模式: 抽象了创建对象的具体过程。
 *    
 */
function createPerson(name, age, job) {
  let obj = {}
  obj.name = name
  obj.age = age
  obj.job = job
  obj.sayName = function () {
    console.log(this.name)
  }
  return obj
}
let person1 = createPerson('jam', 22, 'web')
person1.sayName()
/**
 * 2. 构造函数模式
 *   该模式调用构造函数会经历以下步骤:
 *    - 创建新对象
 *    - 将构造函数的作用域赋值给新对象(因此 this 指向了这个新对象)
 *    - 执行构造函数中的代码(为这个新对象添加属性)
 *    - 返回新对象
 *   与工厂模式不同之处:
 *    - 没有显示地创建对象
 *    - 直接将属性和方法赋值给了 this 对象
 *    - 没有 return 语句
 *   构造函数模式的函数名，手写字母都为大写。
 */
function Person(name, age, job) {
  this.name = name
  this.age = age
  this.job = job
  this.friends = ['jamy', 'looky']
  // this.sayName = function () {
  //   console.log(this.name)
  // }
}
Person.prototype = {
  constructor: Person,
  sayName: function () {
    console.log(this.name)
  }
}
let person2 = new Person('yun', 22, 'java')
let person3 = new Person('lan', 12, 'test')
person2.friends.push('momy')
console.log(person2.friends === person3.friends)

function Mynew() {
  let obj = {}
  let fn = [].shift.call(arguments)
  obj.__proto__ = fn.prototype
  let result = fn.apply(obj, arguments)
  return typeof result === 'object' ? result : obj
}
let person4 = Mynew(Person, 'uniy', 22, 'python')
console.log(person4)

/**
 * 3. 构造函数模式和原型模式混合模式:
 *      使用构造函数创建需要的属性，使用原型模式创建需要共享的方法和属性
 */
function Phone(brand, price) {
  this.brand = brand
  this.price = price
  this.brands = ['苹果', '三星', '华为', '小米', 'vivo', '魅族']
}
Phone.prototype = {
  constructor: Phone,
  getBrand: function () {
    console.log(this.brand)
  },
  getPrice: function () {
    console.log(this.price)
  }
}
let phone = new Phone('苹果', 4999)
phone.brands.push('红米')
phone.getBrand()
phone.getPrice()
let phone1 = new Phone('三星', 3999)
phone1.getBrand()
phone1.getPrice()
console.log(phone.brands, phone1.brands)

/**
 * 4. 寄生构造函数模式: 创建一个函数，该函数的作用仅仅是封装创建对象的代码，然后返回新创建的对象。
 *      除了使用new操作符并把使用的包装函数叫做构造函数之外，这个模式跟工厂模式其实是一模一样的。
 *    构造函数在不返回值的情况下，默认会返回新对象实例。而通过在构造函数的末尾添加一个 return 语句，
 *    可以重写调用构造函数时返回的值。
 *    使用场景：在特殊情况下使用，例如我们想创建一个具有额外方法的特殊数组。由于不能直接修改 Array 构造函数，因此可以使用该模式
 */
function Person4(name, age, job) {
  let o = new Object()
  o.name = name
  o.age = age
  o.job = job
  o.sayName = function () {
    console.log(this.name)
  }
  return o
}

function SpecialArray() {
  let values = new Array()
  values.push.apply(values, arguments)
  values.toPipedString = function () {
    return this.join('|')
  }
  return values
}

let specialArray = new SpecialArray('red', 'value', 'green')
console.log(specialArray.toPipedString())

/**
 * 5. 稳妥构造函数模式: 遵循与寄生构造函数类似的模式，但有两点不同:
 *      - 新创建的对象实例方法不引用 this
 *      - 不使用 new 操作符调用构造函数。
 *    稳妥对象: 没有公共属性，而且其方法也不引用 this 的对象
 */
// 使用稳妥构造函数重新 Person 构造函数
function Person5(name, age, job) {
  let o = {}
  o.name = name
  o.age = age
  o.job = job
  o.sayName = function () {
    console.log(this.name)
  }
  return o
}
let person5 = Person5('fuchy', 23, 'c++')
person5.sayName()