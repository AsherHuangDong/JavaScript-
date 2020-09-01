/**
 * 类： 使得JavaScript能够基于类的面向对象方式开发。
 *
 */

// 一个类的例子
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return "Hello, " + this.greeting;
  }
}
let greeter = new Greeter("world");
console.log(greeter.greet());

// 继承
// class Animal {
//   move(distanceInMeters: number = 0) {
//     console.log(`Animal moved ${distanceInMeters}`);
//   }
// }
// 派生类Dog, 它派生自 Animal 基类，通过 extends关键字。 派生类通常被称为 子类, 基类通常称为 超类
// Dog 继承了 Animal 的功能，因此 Dog创建的实例，能够 使用 bark() 和 move() 方法。
// class Dog extends Animal {
//   bark() {
//     console.log("Woof! Woof!");
//   }
// }
// const dog = new Dog();
// dog.bark(); // Woof! Woof!
// dog.move(20); // Animal moved 20
// dog.bark(); // Woof! Woof!

// 稍微复杂的例子
/**
 * 派生类包含了一个构造函数，它必须要调用 super(), 它会执行基类的构造函数。而且，在构造函数里访问this的属性之前，
 * 我们必须要调用 super()。这是 TypeScript 强制执行的一条重要规则。
 */
class Animal {
  name: string;
  constructor(theName: string) {
    this.name = theName;
  }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}`);
  }
}

// 继承 Animal 的子类
class Snake extends Animal {
  constructor(name: string) {
    super(name);
  }
  // 重写父类方法
  move(distanceInMeters = 5) {
    console.log("Slithering...");
    super.move(distanceInMeters);
  }
}
// 继承 Animal 的子类
class Horse extends Animal {
  constructor(name: string) {
    super(name);
  }
  // 重写父类方法
  move(distanceInMeters = 45) {
    console.log("Galloping...");
    super.move(distanceInMeters);
  }
}
let sam = new Snake("Sammy the Python");
// 注意：tom 被申明为 Animal 类型，但因为它的值是 new Horse,调用 tom.move(34)时， 它会调用 Horse 里重写的方法
let tom: Animal = new Horse("Tommy the Palomino");
sam.move(12);
tom.move(34);

/**
 * 公共，私有与受保护的修饰符
 * 公共: public(默认)
 * 私有: private
 * 受保护: protected
 */
// 通过 public 实现重写类

class Person {
  public name: string;
  public constructor(theName: string) {
    this.name = theName;
  }
  public move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}
// 理解 private: 当成员被标记为 private 时，它就不能在申明它的类的外部访问.
// 例:getFileSystemManager
class PerPerson {
  private name: string;
  constructor(theName: string) {
    this.name = theName;
  }
}
let person = new PerPerson("Cat");
// console.log(person.name); // 报错， name是私有属性

/**
 * TypeScript使用的式结构性类型的系统同。当我们比较两种不同的类型时，并不在乎它的来源。
 * 如果所有成员类型都是兼容的，我们就认为它们的类型是兼容的。
 * 注意: 但是，如果我们比较带有 private 和 protected 成员的类型的时候，情况就不同了。如果其中一个类型里包含一个 private成员
 *      那么只有当另外一个类型中也存在这样一个 private 成员，并且它们都是来自同一处声明时，我们才认为这两个类型是兼容的。对于
 *      protected 成员也是用这个规则。
 */
// 例：
class Animals {
  private name: string;
  constructor(theName: string) {
    this.name = theName;
  }
}
class Rhino extends Animals {
  constructor() {
    super("Rhino");
  }
}
class Employee {
  private name: string;
  constructor(theName: string) {
    this.name = theName;
  }
}
let animal = new Animals("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");
animal = rhino;
// animal = employee; // 报错，因为 animal 和 employee 不是一个类型
/**
 * 分析：这个例子中有 Animal和 Rhino两个类， Rhino是 Animal类的子类。
 * 还有一个 Employee类，其类型看上去与 Animal是相同的。 我们创建了几个这些类的实例，
 * 并相互赋值来看看会发生什么。 因为 Animal和 Rhino共享了来自 Animal里的私有成员定义 private name: string，因此它们是兼容的。
 * 然而 Employee却不是这样。当把 Employee赋值给 Animal的时候，得到一个错误，说它们的类型不兼容。
 * 尽管 Employee里也有一个私有成员 name，但它明显不是 Animal里面定义的那个。
 */

/**
 * 理解 protected: protected修饰符与 private类似，但 protected 成员在派生类中任然可以访问。
 */
// 例:
class ProtectedPerson {
  protected name: string;
  constructor(theName: string) {
    this.name = theName;
  }
}
class ProEmployee extends ProtectedPerson {
  private department: string;
  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }
  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}
let howard = new ProEmployee("Howard", "Scales");
console.log(howard.getElevatorPitch());
// console.log(howard.name); // 错误, 不能再ProtectedPerson外使用name，
// 可以通过 ProEmployee 类的实例访问，因为 ProEmployee是由ProtectedPerson派生来的

// 构造函数也可以被标记成 protected。 这意味着这个类不能在包含它的类外被实例化，但是能被继承。
class Cars {
  protected name: string;
  protected constructor(theName: string) {
    this.name = theName;
  }
}
// let car = new Cars("jiebao"); // 报错，因为 Cars 的构造函数是被保护的 不能被实例化
class Jiebao extends Cars {
  private department: string;
  constructor(name: string, department: string) {
    super(name);
    this.department = department;
  }
  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`;
  }
}
let jiebao = new Jiebao("Jiebao", "Scales");
console.log(jiebao.getElevatorPitch());

/**
 * readonly 修饰符: 可以使用 readonly 降属性设置为只读的。只读属性必须在声明时或构造函数里被初始化。
 */

class Octopus {
  readonly name: string;
  readonly numberOfLegs: number = 0;
  // 构造函数
  constructor(theName: string) {
    this.name = theName;
  }
}
let dad = new Octopus("Man with the 8 strong legs");
// dad.name = "Man with the 3-piece suit"; // 报错，name是只读的
console.log(dad.name);

// 舍弃 theName 初始化name
class Octopus1 {
  readonly numberOfLegs: number = 0;
  constructor(readonly name: string) {
    name = "jam";
  }
}
let mom = new Octopus1("mom");
console.log(mom.name);

/**
 * 存取器: TypeScript支持通过getters/setters来截取对对象成员的访问。 它能帮助你有效的控制对对象成员的访问。
 * 注意：1. 存取器要求你将编译器设置为输出ECMAScript 5或更高,不支持降级到ECMAScript3
 *      2. 只带有 get不带有 set的存取器自动被推断为 readonly
 */

// class Phone {
//   fullName: string;
// }
// let phone = new Phone();
// phone.fullName = "Bob Smith";
// if (phone.fullName) {
//   console.log(phone.fullName);
// }
let passcode = "secret passcode";
class Phone {
  private _fullName: string;
  get fullName() {
    return this._fullName;
  }
  set fullName(newName: string) {
    if (passcode && passcode === "secret passcode") {
      this._fullName = newName;
    } else {
      console.log("Error: Unauthorized update of employee!");
    }
  }
}
let phone = new Phone();
passcode = "food";
phone.fullName = "Bob Smith";
if (phone.fullName) {
  console.log(phone.fullName);
}

/**
 * 静态属性:存在于类本身上面而不是类的实例上
 * 每个实例想要访问这个属性的时候，都要在静态属性前面加上类名
 */
// 例;
class Grid {
  static orgin = { x: 10, y: 10 };
  calculateDistanceFromOringin(point: { x: number; y: number }) {
    let xDist = point.x - Grid.orgin.x;
    let yDist = point.y - Grid.orgin.y;
    return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
  }
  constructor(public scale: number) {}
}
let gride1 = new Grid(1.0);
let gride2 = new Grid(5.0);
console.log(gride1.calculateDistanceFromOringin({ x: 5, y: 4 }));
console.log(gride2.calculateDistanceFromOringin({ x: 3, y: 2 }));

/**
 * 抽象类: 抽象类作为其他派生类的基类使用。它们一般不会直接被实例化。
 * 不同于接口，抽象类可以包含成员的时间细节。
 * abstract 关键字适用于定义抽象类和在抽象类内部定义抽象方法。
 */

// 例：
abstract class Food {
  abstract makeSound(): void;
  move(): void {
    console.log("roaming the earch...");
  }
}

/**
 * 抽象类中的抽象方法，不包含具体实现并且必须在派生类中实现。抽象方法的语法与接口方法相似。
 * 两者都是定义方法签名但不包含方法体。然而，抽象方法必须包含 abstract 关键字 并且可以包含访问修饰符。
 */
// 例:
abstract class Department {
  constructor(public name: string) {
    this.name = name;
  }
  printName(): void {
    console.log("Department name: " + this.name);
  }
  abstract printMeeting(): void; // 必须在派生类中实现
  generateReports(): void {
    console.log(this.name);
  } // 可以在派生类中实现
}
class AccountingDepartment extends Department {
  constructor(name: string) {
    super(name); // 在派生类的构造函数必须调用 super()
  }
  printMeeting(): void {
    console.log("The Accounting Department meets each Monday at 10 am.");
  }
  // 重写父类方法
  generateReports(): void {
    console.log("Generating accounting reports...");
  }
}
let department: Department; // 允许创建一个对抽象类型的引用
// department = new Department(); // 错误：不能创建一个抽象类实例.
department = new AccountingDepartment("look"); // 允许对一个抽象子类进行实例化和赋值
department.printName();
department.printMeeting();
department.generateReports(); // 错误：方法在声明的抽象类中不存在。

/**
 * 高级技巧:
 *   构造函数:
 */
class Greeter1 {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return "Hello, " + this.greeting;
  }
}
// 等价于以上代码
let Greeter2 = (function() {
  function Greeter(message) {
    this.greeting = message;
  }
  Greeter.prototype.greet = function() {
    return "Hello, " + this.greeeting;
  };
  return Greeter;
})();

// 把类当接口调用
class Point {
  x: number;
  y: number;
}
interface Point3d extends Point {
  z: number;
}
let point3d: Point3d = { x: 1, y: 2, z: 3 };
console.log(point3d);
