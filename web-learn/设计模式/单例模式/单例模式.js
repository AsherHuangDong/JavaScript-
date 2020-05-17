/*
  单例模式就是一个类只能实例化一个对象。通常情况下，我们创建的类可以实例化多个对象，
  但是有的需求只需要我们实例化一个对象，比如购物车，商品有很多，购物车只有一个。

  单例模式特点：
    1.每个类只有一个实例，这个实例必须通过一个广为人知的接口，来被客户访问。
    2.子类如果要扩展这个唯一的实例，客户可以不用修改代码就能使用这个扩展后的实例。
    3.单例模式符合单一职责原则，只实例化唯一的对象，保证唯一性。
  缺点：
    单例模式更难测试，因为可能有多种多样的问题出现，例如隐藏的依赖关系，
    很难去创建多个实例，很难清理依赖关系，等等。
*/

class Gouwu{
	pay(){
		console.log('pay')
	};
	remove(){
		console.log('remove');
	};
}

Gouwu.getInit = (function(){
	let instance;
	return function(){
		if(!instance) instance = new Gouwu();
		return instance;
	}
})();