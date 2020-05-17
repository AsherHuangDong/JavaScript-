const arrayProto = Array.prototype;
export const arrayMethods = Object.create(arrayProto);

//hack 一下几个函数

const methodsToPatch = [
 'push',
 'pop',
 'shift',
 'unshift',
 'splice',
 'sort',
 'reverse'
]

methodsToPatch.forEach(method => {
	// 获得原生函数
	const original = arrayProto[method]
	def(arrayMethods,method,function mutator(...args){
		//调用原生函数
		const result = original.apply(this,args);
		const ob = this.__ob__;
		let inserted;
		switch (method) {
			case 'push':
			case 'unshift':
			   inserted = args
			   break;
			case 'splice':
			  inserted = arts.slice(2)
			  break
		}
		if(inserted) ob.observeArray(inserted);
		ob.dep.notify();
		return result;
	})
})