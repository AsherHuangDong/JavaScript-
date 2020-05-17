/*
   特点:基于原型链，既是父类实例，又是子类实例
   缺点：无法实现多继承
*/

function Animal(name){
	this.name = name || 'Animal';
	this.sleep = function(){
		console.log(this.name + ' is sleeping!');
	}
}

Animal.prototype.eat = function(food){
	console.log(this.name+' is eating!');
}

function Cat(){}

Cat.prototype = new Animal();
Cat.prototype.name = 'cat';

var cat = new Cat();

console.log(cat.name);
cat.eat('fish')
cat.sleep()
console.log(cat instanceof Animal)
console.log(cat instanceof Cat)