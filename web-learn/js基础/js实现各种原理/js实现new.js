function person(name, age) {
    this.name = name
    this.age = age
    this.eat = function () {
        console.log(this.name + ' is eating!')
    }
}

function create() {
    // 创建新的对象；
    var obj = {}
    // 获得构造函数
    var Con = [].shift.call(arguments)
    // 连接到原型链
    obj.__proto__ = Con.prototype
    // 绑定this, 执行构造函数
    var result = Con.apply(obj, arguments)
    // 返回新对象,如果返回值是一个对象就返回该对象，否则返回构造函数的一个实例对象
    return typeof result === 'object' ? result : obj
}

function _new() {
    // 将 arguments 类数组转为数组
    let args = [].slice.call(arguments)
    // 获取构造函数
    let constructor = args.shift()
    // 创建空对象，添加到原型链
    let context = Object.create(constructor.prototype)
    // 执行构造函数
    let result = constructor.apply(context, args)
    // 如果执行结果是对象直接返回，如果不是则返回 context
    return typeof result === 'object' && result !== null ? result : context
}
let per1 = new person("jam", 12)
per1.eat()

let per2 = create(person, 'food', 33)
per2.eat()

let per3 = _new(person, 'huangdong', 25)
per3.eat()