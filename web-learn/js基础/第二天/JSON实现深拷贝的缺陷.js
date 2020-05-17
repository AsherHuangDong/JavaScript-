let obj = {
	a: 1,
	b: {
		c: 2,
		d: 3,
	},
}
obj.c = obj.b
obj.e = obj.a
obj.b.c = obj.c
obj.b.d = obj.b
obj.b.e = obj.b.c
let a = {
	sex:undefined,
	food:Symbol('male'),
	name:'jam',
	age:1,
	obj:function(){
		return this.name;
	}
}
//let newObj = JSON.parse(JSON.stringify(obj))//报错
//console.log(newObj)
//hasOwnProperty返回一个布尔值，判断自身属性中是否具有制定的属性
let a1 = JSON.parse(JSON.stringify(a))
console.log(a1);
const object = new Object()
object.a = 1;
console.log(object.hasOwnProperty('a'))
console.log(object.hasOwnProperty('b'))
console.log(Object.prototype.toString.call([]))
console.log(Object.prototype.toString.call({}))

function isObject(obj){
	return obj!==null && typeof obj === 'obj'
}

function deepCopy(obj,hash=new WeakMap()){
	if(!isObject(obj)) return obj;
	let result = Array.isArray(obj)?[]:{};
	if(hash.get(obj)) return hash.get(obj);
	for(let i in obj){
		if(Object.prototype.hasOwnProperty.call(obj,i)){
			if(isObject(obj[i])){
				deepCopy(obj[i],hash)
			}else{
				result[i] = obj[i];
			}
		}
	}
	return result;
}
let obj2 = {
	name:'food',
	age:22,
	sex:Symbol('female'),
	deep:function(){
		console.log('hhh')
	}
}

let arr = [1,2,3,5]
let b = 2;

console.log(deepCopy(obj2))
console.log(deepCopy(arr));
console.log(deepCopy(obj));
console.log(arr.constructor);
console.log(arr.__proto__);
console.log(obj2.__proto__)
console.log(obj2.constructor);
console.log(isObject.__proto__);
console.log(isObject.constructor)
console.log(typeof b)