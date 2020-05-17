function Animal(name) {
	this.name = name;
	this.sleep = function () {
		console.log(this.name + ' is sleeping!')
	}
}
Animal.prototype.eat = function (food) {
	console.log(this.name + ' is eating ' + food + '!')
}

function Cat(name) {
	Animal.call(this, name);
}

(function () {
	var Super = function () { };
	Super.prototype = Animal.prototype;
	Cat.prototype = new Super();
})()

var cat = new Cat('xiao')
console.log(cat.name)
cat.sleep();
cat.eat('fish')
console.log(cat instanceof Animal)
console.log(cat instanceof Cat)
