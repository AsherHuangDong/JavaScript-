/*
不使用 var相当于访问了 window 的屬性。
和在 window 下声明变量的區別在于，訪問 window 的屬性创建的变量可以 delete，
在全局作用域下直接声明的变量不可以 delete。
*/
b = 'window'
console.log(b);
delete b;
//console.log(b);报错因为b已经被删除了。

var a = '全局'
console.log(a)
delete a;
console.log(a);
function f1(){
    var n = 999;
    nAdd = function(){
        n += 1;
    }
    function f2(){
        console.log(n)
    }
    return f2;
}

function f2(){
    n = 100;
}

var result = f1();
result();
nAdd();
result();
f2();
console.log(n);

var name = 'The Window'
var object = {
    name: 'My object',
    getNameFunc: function(){
        return function(){
            return this.name;
        }
    }
}
console.log(object.getNameFunc()());

var name1 = 'Jame'
var object1 = {
    name: 'food',
    getNameFunc: function(){
        var that = this;
        return function(){
            return that.name;
        }
    }
}
console.log(object1.getNameFunc()());