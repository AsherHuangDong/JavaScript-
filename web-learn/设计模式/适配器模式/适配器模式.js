/*
适配器模式是将本来不兼容的接口或者类转化为可以通用的方法。

常见的场景就是兼容浏览器的api，比如我们常常封装一些方法来获取样式，但是IE和其他浏览器提供的api是不相同，所以我们需要创建一个公共的方法来处理这些不同平台的接口。

还有一个场景是新需求和旧需求有冲突的情况下，在不改变旧有的功能的基础上，添加新的功能。

*/

//例: 兼容IE

function getStyle(ele,attr){
	if(window.getComputedStyle){
		return window.getComputedStyle(ele,false)[attr];
	}else {
		return ele.currentStyle[attr];
	}
}