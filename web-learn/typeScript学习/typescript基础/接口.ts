/**
 * TypeScript核心原则：
 *    1.对值所具有的接口进行类型检查, 也叫 "鸭式变型法" 或 "接口性子类型化"。
 * 接口的作用:
 *    为这些类型命名和为我们的代码或第三方代码定义契约。
 */
// 接口初探
// function printLabel(labelledObj: { label: string }) {
//   console.log(labelledObj.label);
// }
// let myObj = { size: 10, label: "Size 10 Object" };
// printLabel(myObj);

// 使用接口重写上例
interface labelledValue {
  label: string;
}
function printLabel(labelledObj: labelledValue) {
  console.log(labelledObj.label);
}
let myObj = { size: 10, label: "size 10 object" };
printLabel(myObj);

/**
 * 可选属性：在可选属性名字后面加一个 '?' 字符
 * 优点：1.可以对可能存在的属性进行预定义
 *      2.可以捕获引用了不存在的属性时的错误
 */
interface SquareConfig {
  color?: string;
  width?: number;
}
function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: "white", area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}
let mySquare = createSquare({ color: "black" });
console.log(mySquare);

/**
 * 只读属性：只能在对象刚刚创建的时候修改其值
 * 定义方式: 在属性名前加 readonly 来定义
 */

interface Point {
  readonly x: number;
  readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
// p1.x = 20; // 报错, x 是只读属性不能修改

// ReadonlyArray<T> 定义只读数组

let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
// ro[0] = 12; // 报错,ro 是只读数组

// const vs readonly：看要把你定义的作为属性还是变量。作为变量用 const 作为 属性用 readonly

/**
 * 额外属性检查: 如果需要添加其他任何类型的属性时使用
 */
interface MoreSquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any;
}
function CreateMoreSquare(
  config: MoreSquareConfig
): { color: string; area: number } {
  let newSquare = { color: "red", area: 200 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}
let moreSquare = { color: "orange", colour: "blue", width: 20 }; // 不会报错, colour作为新增的属性
console.log(CreateMoreSquare(moreSquare));

/**
 * 函数类型: 接口描述函数类型
 */

interface SearchFunc {
  (soure: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(src: string, sub: string) {
  let result = src.search(sub);
  return result > -1;
};
let sourece = "abcdefg";
let subString = "abc";
console.log(mySearch(sourece, subString));

/**
 * 可索引类型: 通过索引得到的类型
 */

interface StringArray {
  [index: string]: number;
}
let myArray: StringArray;
myArray = { pro: 1, pre: 2 };
let myStr: number = myArray["pre"];
console.log(myStr);

/**
 * 类类型: 实现接口,与C#或Java中一样，TypeScript也能够使用它来明确的强制一个类去附和某种契约
 * 作用: 接口描述了类的公共部分，而不是公共和私有两部分。 它不会帮你检查类是否具有某些私有成员。
 */

// interface ClockInterface {
//   currentTime: Date;
// }

// class Clock implements ClockInterface {
//   currentTime: Date;
//   setTime(d: Date) {
//     this.currentTime = d;
//   }
//   constructor(h: number, m: number) {}
// }

/**
 * 类静态部分和实力部分的区别
 * 类具有类型: 静态部分的类型和实例部分的类型，打你各类实现了一个接口时，只对其实例部分进行类型检查。
 * constructor 属于静态类型部分，因此不在监察范围之内。
 * 因此， 我们要操作静态类型的部分。
 */
interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
  tick();
}
function createClock(
  ctor: ClockConstructor,
  hour: number,
  minute: number
): ClockInterface {
  return new ctor(hour, minute);
}
class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log("beep beep");
  }
}
class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log("tick tock");
  }
}
let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);
console.log(digital);
console.log(analog);
digital.tick();
analog.tick();

/**
 * 继承接口: 和类一样，接口也可以相互继承。
 * 一个接口可以继承多个接口，创建出多个接口的合成接口。
 */
interface Shape {
  color: string;
}
interface PenStroke {
  penWidth: number;
}
// 继承Shape接口
interface Square extends Shape, PenStroke {
  sideLength: number;
}
let square = <Square>{ color: "red", sideLength: 30 };
console.log(square);
square.color = "blue";
square.sideLength = 20;
square.penWidth = 5;
console.log(square);

/**
 * 混合类型: 一个对象可以同时具有上面提到的多种类型。
 */
interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}
function getCounter(): Counter {
  let counter = <Counter>function(start: number) {
    console.log(start);
  };
  counter.interval = 123;
  counter.reset = function() {
    console.log(this.interval);
  };
  return counter;
}
let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;

/**
 * 接口继承类：当接口继承了一个类类型时，它会继承类的成员但不包括其实现。
 *           就好像接口声明了所有类中存在的成员，但并没有提供具体实现一样。
 *           接口同样会继承到类的private和protected成员。
 *           这意味着当你创建了一个接口继承了一个拥有私有或受保护的成员的类时，这个接口类型只能被这个类或其子类所实现（implement）。
 *           当你有一个庞大的继承结构时这很有用，但要指出的是你的代码只在子类拥有特定属性时起作用。
 *           这个子类除了继承至基类外与基类没有任何关系。
 */

class Control {
  private state: any;
}
interface SelectableControl extends Control {
  select(): void;
}
class Button extends Control implements SelectableControl {
  select() {}
}
class TextBox extends Control {
  select() {}
}
// 报错，Image类型缺少 state 属性
// class Images  implements SelectableControl {
//   select() {}
// }
