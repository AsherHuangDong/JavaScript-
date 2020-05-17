

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
//分析: myFunc执行时，this指向的是window ，setTimeout中的this 指向的是
myFunc();//10,undefined

var fun1 = new myFunc();// 10, undefined

// /** 
//  * js传值:
//  *   基本类型: 按值传递
//  *   引用类型: 共享传递
// */

// function fun(a,b){
//     a = a*10;
//     b.item = 'changed'
//     return a;
// }

// var num = 2;
// var obj = {item:'unchanged'}
// console.log(fun(num,obj));
// console.log(num);
// console.log(obj.item);


