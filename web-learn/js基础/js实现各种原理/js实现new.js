
function person(name, age){
    this.name = name;
    this.age = age;
    this.eat = function(){
        console.log(this.name + ' is eating!');
    }
}

function create(){
    // 创建新的对象；
    var obj = new Object();
    // 获得构造函数
    console.log(arguments);
    var Con = [].shift.call(arguments);
    console.log(Con);
    // 连接到原型链
    obj.__proto__ = Con.prototype;
    console.log(obj);
    // 绑定this, 执行构造函数
    var result = Con.apply(obj, arguments);
    console.log(result);
    // 返回新对象,如果返回值是一个对象就返回该对象，否则返回构造函数的一个实例对象
    return typeof result === 'object' ? result : obj;
}
let per1 = new person("jam",12);
console.log(per1.name);
console.log(per1.age);
per1.eat()

let per2 = create(person, 'food', 33);
console.log(per2.name);
console.log(per2.age);
per2.eat();