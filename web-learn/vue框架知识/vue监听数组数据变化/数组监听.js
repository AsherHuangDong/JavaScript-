/* 
  1.首先获取数组原型上的方法，因为拦截后还需要用到原生的方法来实现数组的变化
  2.对 Array 的原型方法使用 Object.defineProperty 做一些拦截操作
  3.把需要被拦截的 Array 类型的数据原型指向改造后的原型
*/


//获取 Array 的原型
const arrayProto = Array.prototype;

function def(obj, key){
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    value: function(...args){
      console.log(key);//控制台输出 push
      console.log(args);//控制台输出 [Array(2), 7, "hello!"];

      //获取原生的方法
      let original = arrayProto[key];
      
      //将开发者的参数传递给原生的方法，包拯数组按照开发者的想法被改变
      const result = original.apply(this, args);

      // do something 比如通知vue视图进行更新
      console.log('我的数据已经被改变过了,视图更新了');
      this.text = 'hello world!';
      return result;

    }
  })
}

//创建新的原型
let obj = {
  push(){}
}

// 重写赋值
def(obj, 'push');

let arr = [0];

// 原型指向重写后的原型
arr.__proro__ = obj;

// 执行push
arr.push([1,2], 7, "hello!");
console.log(arr);

