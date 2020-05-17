
//基本类型:number,string,boolean,undefined,symbol,null
//引用类型：object

//typeof 和 indecateof
console.log(typeof (null));
console.log(typeof ([]));
console.log(typeof ({}));
console.log(typeof (Symbol()));
console.log(typeof function(){})
console.log(typeof undefined);
console.log(Array.isArray([]));
console.log(Object.prototype.toString.call(null));
let a = 1;
console.log(a);
a = void 0;
console.log(a);

function Person(name) {
	this.name = name;
}
Person.prototype.run = function () {
	console.log(this.name + 'run')
}
let person = new Person('liris')
person.run();


