
function newObj (name,age) {
	let o = new Object();
	o.name = name;
	o.age = age;
	return o; 
}

var obj = newObj('jam',12);

// 工厂模式：商品与工厂的例子

class Product{
	constructor(name){
		this.name = name;
	}

	init(){
		console.log('init')
	}

	out(){
		console.log('out')
	}
}


class Creater{
	create(name){
		return new Product(name);
	}
}

let creater = new Creater();

let p = creater.create("p1");
p.init();