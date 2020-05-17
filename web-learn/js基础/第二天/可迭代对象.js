/*
可迭代对象：只用本省或原型链中拥有 Symbol.iterator 键的属性才是可迭代对象。
   内置可迭代对象：String，Map，Set，Array,TypedArray,它们的原型上都有一个
   Symbol.Iterator方法。
*/

// 自定义可迭代对象

var myIterable = {
    *[Symbol.iterator](){
        yield 1;
        yield 2;
        yield 3;
    }
}

for(let value of myIterable){
    console.log(value);
}