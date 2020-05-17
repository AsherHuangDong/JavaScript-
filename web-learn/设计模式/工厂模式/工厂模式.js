/*
  工厂模式可以理解为 对象创建的封装，其主要目的是吧一些细节的东西封装起来，
  让开发者更加注重该怎么使用，而不用关心其具体的实现。

  比如：我们不用考虑代码系统内核的具体实现，我们只需要考虑编程语言怎么使用，代码怎么写。


  特点: 工厂模式实现了“构造者”和“创建者”的分离。符合开放封闭原则，只能使用，无法修改。
*/


//例：工厂模式的使用场景

(function (global,factory){
	typeof exports === 'object'
	   && typeof module !== 'undefined' ?
	     typeof define === 'function'
	       && define.amd ? define(factory) :
	         (global.UploadClient = factory());
}(this,function(){
   return {

   }	
})
)

//jQuery使用到的工厂模式

class jQuery{
	constructor(selector){
		let dom = [].slice.call(document.querySelectorAll(selector));
		let len = dom ? dom.length : 0;
		for(let i=0;i<len;i++){
			this[i] = dom[i];
		}

		this.length = len;
		this.selector = selector || "";
	}

	append(node){};
	addClass(name){};
	html(data){};
}

window.$ = function(selector){
	return new jQuery(selector);
}

//react中使用到的工厂模式

class Vnode{
	constructor(tag,attrs,children){
		//...
	}
}

React.createElement = function(tag,attrs,children){
	return new Vnode(tag,attrs,children);
}



