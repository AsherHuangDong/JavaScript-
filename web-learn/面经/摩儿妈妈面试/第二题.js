
function change(a, b, c) {
    // 按值传递
    a = a * 10;
    // 共享传递
    b.item = "changed"
    // 将参数重新赋值给一个新对象，不会影响外部变量
    c = { item: 'changed' }
}

let num = 10
let obj1 = { item: 'unchange' }
let obj2 = { item: 'unchange' }
change(num, obj1, obj2)

console.log(num)
console.log(obj1.item)
console.log(obj2.item)