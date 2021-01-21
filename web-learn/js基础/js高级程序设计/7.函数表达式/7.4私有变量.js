/**
 * 1. 严格来讲，JavaScript 没有 私有成员 的概念，所有所有对象属性都是公有的。
 *      但是有一个 私有变量 的概念。任何函数中定义的变量，都可以认为是私有变量，因为不能在
 *    外部访问这些变量。但我们可以通过在函数内部创建闭包来访问这些私有变量，
 *    私有变量包括:
 *      - 函数的参数
 *      - 局部变量
 *      - 函数内部定义的其他函数
 */
// 例下: 该函数有三个私有变量 num1, num2, sum, 这几个私有变量只能在函数内部访问它们.
function add(num1, num2) {
  var sum = num1 + num2
  return sum
}

/**
 * 2. 特权方法: 指有权访问私有变量和私有函数的公有方法。
 *    创建特权方法的方式:
 *      - 在构造函数中定义特权方法
 *      - 通过私有作用域中定义私有变量或函数
 */
/**
 * * 这个模式在构造函数内部定义了所有私有变量和私有函数，接着又创建了能够访问这些私有成员的特权方法
 *   因此，私有变量和私有函数只能通过特权方法访问。该构造函数的实例，只有通过特权方法这一个途径来访问
 *   里面的私有变量和私有函数。
 * * 我们可以利用私有和特权成员，隐藏那些不应该被直接修改的数据
 * * 缺点: 在构造函数中定义特权方法，必须使用构造函数模式来达到这个目的。
 */
function MyObject() {
  // 定义私有变量和私有函数
  var privateVariable = 10

  function privateFunction() {
    return false
  }

  // 定义特权方法
  this.publicMethod = function () {
    privateVariable++
    return privateFunction()
  }
}

// 我们可以利用私有和特权成员，隐藏那些不应该被直接修改的数据
function Person(name) {
  // 私有变量: name, 特权函数: getName, setName
  this.getName = function () {
    return name
  }
  this.setName = function (value) {
    name = value
  }
}

/**
 * 3. 静态私有变量
 *      通过私有作用域中定义私有变量或函数，同样也可以创建特权方法，基本模式如下
 */
(function () {
  // 创建私有变量和函数
  var privateVariable = 10

  function privateFunction() {
    return false
  }

  // 特权方法
  MyObject.prototype.publicMethod = function () {
    privateVariable++
    privateFunction()
  }
})();

/**
 * * 下例中person构造函数和 getName() 以及 setName() 方法一样，都有权访问私有变量 name
 *   这种模式下，变量 name 就成了一个静态的，有所有实例共享的属性。也就是说，在一个实例上调用 setName()
 *   会影响所有实例。而调用 setName() 或创建一个新 Person 实例都会赋予 name 属性一个新值。结果就是所有实例都会返回相同的值。 
 */
(function () {
  var name = ''
  Person.prototype.getName = function () {
    return name
  }
  Person.prototype.setName = function (value) {
    name = value
  }
})();

var person1 = new Person('jam')
console.log(person1.getName())
person1.setName('liuxing')
console.log(person1.getName())

var person2 = new Person('huang')
console.log(person1.getName(), person2.getName())


/**
 * *  以上模式是用于自定义类型创建私有变量和特权方法的。
 * 4. 模块模式: 由道格拉斯提出，是指为单例创建私有变量和特权方法的模式。
 *    单例: 指只有一个实例的对象。JavaScript 是以对象字面量的方式来创建单例对象的。
 *    使用场景: 需要对单例进行某些初始化，同时有需要维护其私有变量。 
 *      简言之，如果必须创建一个对象并以某些数据对其进行初始化，同时还要公开一些能够访问这些私有数据的方法，
 */
var singleton = {
  name: value,
  method: function () {
    // 这里是方法的代码
  }
}

// 模块模式通过为单例添加私有变量和特权方法能够使其得到增强，其语法形式如下:
var singleton = function () {
  var privateVariable = 10

  function privateFunction() {
    return false
  }

  return {
    publicProperty: true,
    publicMethod: function () {
      privateVariable++
      return privateFunction()
    }
  }
}

// 例: 管理组件的 application 对象
var application = function () {

  // 私有变量
  var components = new Array()

  // 初始化
  components.push(new BaseComponent())

  // 公共
  return {
    // 获取所有组件个数
    getComponentCount: function () {
      return components.length
    },
    // 注册组件
    registerComponent: function (component) {
      if (typeof component === 'object') {
        components.push(component)
      }
    }
  }
}

/**
 * 5. 增强模块模式: 进一步改进模块模式，即在返回对象之前对其增强的代码。
 *    使用场景: 适用于那些单例必须是某种类型的实例，同时还必须添加某些属性和方法对其加以增强的情况。
 */
// 例:
var singleton = function () {
  var privateVariable = 10

  function privateFunction() {
    return false
  }

  // 创建自定义类型对象
  var object = new CustomType()

  // 添加特权/公有属性和方法
  object.publicProperty = true
  object.publicMethod = function () {
    privateVariable++
    return privateFunction()
  }
  // 返回对象
  return object
}

var application = function () {

  // 私有变量
  var components = new Array()

  // 初始化
  components.push(new BaseComponent())

  // 创建 application 的一个局部副本
  var app = new BaseComponent()

  // 公共接口
  app.getComponentCount = function () {
    return components.length
  }

  app.registerComponent = function (component) {
    if (typeof component === 'object') {
      components.puah(component)
    }
  }
  // 返回该副本
  return app
}