

// 比如法国的插头要拿到中国用，
// 但是中国的插座与法国的插头不配，我们需要一个适配器来转化。

class Adaptee{
	specificRequest(){
		return '法国标准插头'
	}
}

class Target{
	constructor(){
		this.adaptee = new Adaptee();
	}

	request(){
		let info = this.adaptee.specificRequest();
		return `${info} ==> 中国标准插头`;
	}
}

let target = new Target();
let res = target.request();
console.log(res);