/*
  特点：可以继承父类实例属性方法，也可以实现继承父类原型属性方法
  缺点：调用了两次父类构造方法，生成了两份实例
*/

function Animal(name) {
	this.name = name || 'Animal'
	this.sleep = function () {
		console.log(this.name + ' is sleeping!')
	}
}
Animal.prototype.eat = function (food) {
	console.log(this.name + ' is eating ' + food + '!')
}

function Cat(name) {
	Animal.call(this, name)
}

Cat.prototype = new Animal();
Cat.prototype.constructor = Cat;
var cat = new Cat('xiao')
console.log(cat.name)
cat.sleep();
cat.eat('fish')
console.log(cat instanceof Cat);
console.log(cat instanceof Animal);