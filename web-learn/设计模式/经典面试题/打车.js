/*

要求
	1.打车时，可以打专车或者快车。
	2.任何车都有车牌号和名称
	3.不同车价格不同，快车每公里一元，专车每公里2元
	4.行程开始时，显示车辆信息。
	5.行程结束时，显示打车金额。
*/


//分析

  /*
    (1) 根据 2.任何车都有车牌号和名称 => 车是一个父类，车牌号和名称是它的属性
    (2) 根据 3.不同车价格不同 => 快车和和专车是子类,价格是属性。
    (3) 根据 4.行程开始时，显示车辆信息。5.行程结束时，显示打车金额。
        => 行程也是可以抽象成一个类，他与车这个父类是相关联的，行程开始和结束是两个方法。
  */

//车类
 class Car{
 	constructor(name,number){
 		this.name = name;
 		this.number = number;
 	}
 }


//快车类
class FastCar extends Car{
	constructor(name,number){
		super(name,number);
		this.price = 1;
	}
}

//专车类
class SpecialCar extends Car{
	constructor(name,number){
		super(name,number);
		this.price = 2;
	}
}

//行程类
class Trip{
	constructor(car){
		this.car = car;
	}

	start(){
		console.log(`行程开始, 车名: ${this.car.name},车牌号: ${this.car.number}`);
	}

	end(){
		console.log(`行程结束, 价格: ${this.car.price*5}。`);
	}
}

let car = new FastCar('别克',1234);
let trip = new Trip(car);

let car1 = new SpecialCar('劳斯莱斯',3333);
let trip1 = new Trip(car1);

trip.start();

trip.end();

trip1.start();
trip1.end();
