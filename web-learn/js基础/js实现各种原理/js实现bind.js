

Function.prototype.MyBind = function(obj){
	if(typeof obj !== 'function'){
		throw new TypeError('obj is not function');
	}

	let _this = this;
	let args = [...arguments].slice(1);

	return function F(){
		if (this instanceof F) {
			return new _this(...args, ...arguments)
		}
		return _this.apply(obj, args.concat(...arguments))
	}
}