function Animal(name) {
	this.name = name || "Animal"
	this.sleep = function () {
		console.log(this.name + ' is sleeping!')
	}
}
Animal.prototype.eat = function (fodd) {
	console.log(this.name + ' is eating' + fodd + '!');
}

function Cat(name) {
	this.name = name || 'Cat'
}

var cat = new Cat('heizi');
var animal = new Animal();


