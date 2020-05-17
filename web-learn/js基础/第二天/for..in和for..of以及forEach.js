//for..in 语法：
/* 
  for(varible in object){};
  variable
  在每次迭代时，variable会被赋值为不同的属性名。
  object
  非Symbol类型的可枚举属性被迭代的对象。
*/

/* 
    for..of 语法
    for (variable of iterable) {
        //statements
    }
    variable 
    在每次迭代中，将不同属性的值分配给变量。
    iterable
    被迭代枚举其属性的对象。
*/

/*
 for..in 和 for..of的区别：
 两者都是迭代一些东西。
 for..in 语句以任意顺序迭代对象的可枚举属性。
 for..of 语句遍历可迭代对象定义要迭代的数据。
   可迭代对象：只用本省或原型链中拥有 Symbol.iterator 键的属性才是可迭代对象。
   内置可迭代对象：String，Map，Set，Array,TypedArray,它们的原型上都有一个
   Symbol.Iterator方法。
*/

let obj = {
    name: 'jam',
    age: 20,
    eat: function () {
        console.log('mmmm');
    }
}

function obj1() {
    this.name = 'food'
    this.age = 20;
}

obj1.prototype.sex = 'nv';
let m = new obj1();

// for(let i in obj){
//     console.log(i);
// }
for (let i in m) {
    console.log(i);
}
// for (let i of obj){
//     console.log(i);
// }//报错，因为obj不是一个可迭代对象。

let arr = [1,2,3,4];

for(let i in arr){
    //i表示索引
    console.log(i,arr[i]);
}

for(let i of arr){
    //i表示每一项
    console.log(i);
}



