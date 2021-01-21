// delete只能删除对象中的属性，
// 不能删除原型链中的属性，
// 不能删除普通变量。
// (function(x){
// 	delete x;
// 	console.log(x)
// })(1+5);


// function obj(){
// 	this.name='jam';
// 	this.age=12
// }
// let m = new obj();
// obj.prototype.food = 'bocai';
// console.log(m.name);
// delete m.name;
// console.log(m.name);
// delete m.food;
// console.log(m.food);

var a = 1

function myFunc() {
	this.a = 10
	setTimeout(() => {
		a = 20;
		console.log(this.a)
		setTimeout(function () {
			let a = 30;
			console.log(this.a)
		}, 100)
	}, 100)
}
//myFunc();
//var fun1 = new myFunc();

// function changeStuff(a, b, c)
// {
//   a = a * 10;
//   b.item = "changed";
//   c = {item: "changed"};
// }
// var num = 10;
// var obj1 = {item: "unchanged"};
// var obj2 = {item: "unchanged"};
// changeStuff(num, obj1, obj2);

// console.log(num);
// console.log(obj1.item);    
// console.log(obj2.item);

var name = "Mary"

function hello() {
	console.log("Hello！" + name);
}

function sayHello() {
	var name = "Bob";
	hello();
}

function sayHello1() {
	var name = "Mark";

	function hello() {
		console.log("Hello！" + name);
	}
	hello();
}
hello();
sayHello();
sayHello1();

function fun(n, o) {
	console.log(o)
	return {
		fun: function (m) {
			return fun(m, n);
		}
	};
}
var a = fun(0);
a.fun(1);
a.fun(2);
a.fun(3);
var b = fun(0).fun(1).fun(2).fun(3);
var c = fun(0).fun(1);
c.fun(2);
c.fun(3);