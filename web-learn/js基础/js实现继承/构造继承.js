/*
  特点：可以实现多继承
  缺点：只能继承父类中的属性和方法，不能继承父类原型上的属性和方法
*/

function Animal(name) {
	this.name = name || 'Animal'
	this.sleep = function () {
		console.log(this.name + ' is sleeping!')
	}
}
Animal.prototype.eat = function (food) {
	console.log(this.name + 'is eating ' + food + '!');
}

function Cat(name) {
	Animal.call(this, name);
}

var cat = new Cat()

console.log(cat.name);
cat.sleep();
//cat.eat('fish')//报错
console.log(cat instanceof Animal)
console.log(cat instanceof Cat)