
Object.prototype.myNew = function(){
    // 创建新对象
    let obj = new Object()
    // 获取构造函数
    let args = [].shift.call(arguments)
    // 连接到原型链
    obj.__proto__ = args.prototype
    // 绑定this
    let result = args.apply(obj, arguments)
    // 返回新对象
    return typeof result === 'object' ? result : obj
}

function F1(name){
    this.name = name
    this.eat = function(){
        console.log(this.name + ' is eating!')
    }
}
let obj = myNew(F1, 'jam')
obj.eat()