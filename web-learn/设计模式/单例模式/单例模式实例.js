/*
  单例模式就是一个类只能实例化一个对象。通常情况下，我们创建的类可以实例化多个对象，
  但是有的需求只需要我们实例化一个对象，比如购物车，商品有很多，购物车只有一个。

  单例模式特点：
    1.每个类只有一个实例，这个实例必须通过一个广为人知的接口，来被客户访问。
    2.子类如果要扩展这个唯一的实例，客户可以不用修改代码就能使用这个扩展后的实例。

    */

//例：


class SingleObject{
	login(){
		console.log('login...')
	}
}

SingleObject.getInstance = (function(){
	let instance;
	return function(){
		if(!instance){
			instance  = new SingleObject();
		}
		return instance;
	}
})();

let sum = 1;

(function(){
	console.log('name');
}());

SingleObject.getInstance().login();


