/*
  要求:
    1.某停车场分为3层，每层100个车位。
    2.每个车位都能监控到车两的驶入和离开
    3.车辆进入前，显示每层空余车位数量
    4.车辆进入时，摄像头可识别车牌号和事件
    5.车辆出来时，出口显示车牌号和停车时长
    */


/*
  分析:
    (1) 首先车是一个类，属性是车牌号，用来标识。
    (2) 摄像头是一个类，用来记录车辆信息和进入时间。
    (3) 显示屏是一个类，用来显示车牌号和停车时长。
    (4) 车位是一个类，车辆是否驶入或驶出。
    (5) 层是一个类，需要记录是哪一层，以及每层的空车位数量，还需要实时显示到显示屏上。
    (6) 停车场是一个类，车辆的驶入，驶出，摄像头，显示屏这些都是属性，以及每层的空车位数量，每辆车的进出信息记录。
    */

//车类
class Car {

	constructor(num) {

		this.num = num;

	}

}
//停车场类
class Park {

	constructor(floors) {

		this.floors = floors || [];

		this.camera = new Camera();

		this.screen = new Screen();

        this.carItem = {}; //摄像头拍摄返回的车辆信息

    }

    //驶入
    in(car) {

        //通过摄像头获取信息

        const info = this.camera.shoot(car);

        //停车

        const i = parseInt((Math.random() * 100) % 100);

        const place = this.floors[0].places[i];

        place.in();

        info.place = place;

        //记录停车信息

        this.carItem[car.num] = info;

    }

    //驶出
    out(car) {

        //获取信息

        const info = this.carItem[car.num];

        const place = info.place;

        place.out();

        //显示时间

        this.screen.show(car, info.inTime);

        //清空数据

        delete this.carItem[car.num];

    }

    emptyNum() {

    	return this.floors

    	.map((item) => {

    		return `${item.index}层

    		还有${item.emptyPlaceNum()}个空余车位\n`;

    	})

    	.join("");

    }

}
//层类
class Floor {

	constructor(index, places) {

        this.index = index;//楼层索引

        this.places = places || [];

    }

    emptyPlaceNum() {

    	let num = 0;

    	this.places.forEach((item) => {

    		if (item.empty) {

    			num = num + 1;

    		}

    	});

    	return num;

    }

}
//摄像头类
class Camera {

	shoot(car) {

		return {

            num: car.num, //车牌号

            inTime: Date.now(), //驶入时间

            place: {}, //车位信息

        };

    }

}
//显示屏类
class Screen {

	show(car, inTime) {

		console.log("车牌号", car.num);

		console.log("停车时间", Date.now() - inTime);

	}

}
//车位类
class Place {

	constructor() {

		this.empty = true;

	}

	in() {

		this.empty = false;

	}

	out() {

		this.empty = true;

	}

}

//初始化停车场有3层，每层100个车位

const floors = Array.from(

	new Array(3),

	(item, i) =>

	new Floor(

		i + 1,

		Array.from(

			new Array(100),

			(item) => new Place())

		)

	);

const park = new Park(floors);
const car1 = new Car(9999);
const car2 = new Car(1111);
const car3 = new Car(2222);

//车辆驶入

console.log('第一辆车驶入');
console.log(park.emptyNum());
park.in(car1);
console.log('第二辆车驶入');
console.log(park.emptyNum());
park.in(car2);

setTimeout(() => {
	console.log('第一辆车离开');
	park.out(car1);
},100);

console.log('第二辆车离开');
park.out(car2);

console.log('第三辆车驶入');
console.log(park.emptyNum());
park.in(car3);
console.log('第三辆车离开');
park.out(car3);

console.log(park.emptyNum());







