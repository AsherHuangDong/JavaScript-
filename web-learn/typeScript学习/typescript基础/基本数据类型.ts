
// number, string, boolean, 数组, 元组，枚举， Any，void，null和undefined，never，object

// 声明number类型变量
let num: number = 12;
num = undefined;
num = null;
//num = 'jam';//报错，只能赋值number类型或者null，undefined。

// 声明string类型变量
let str: string = 'jam';

// 声明boolean类型变量
let bool: boolean = false;

// 声明number类型的数组.
// 第一种方式: 可以在元素类型后面接上 [],表示由此类型元素组成的一个数组
let arr: number[] = [1,2,3];
// 第二种方式: 是使用数组泛型，Array<元素类型>
let arr1: Array<number> = [2,3,5];

let arr2: Array<string> = ['jam','lucky','jaly'];
let arr4: object[] = [{age:1},{age:2},{age:3}];
let arr5: number[][] = [[1,2],[2,3]];
console.log(arr5);

/** 
 * 声明元组 Tuple:元组类型允许表示一个已知元素数量和类型的数组，
 * 各元素的类型不必相同。 
 * 比如，你可以定义一对值分别为 string和number类型的元组。
*/

let x: [string,number];
x = ['hello',10];//true
//x = [10,'hello'];//false

//当访问一个已知索引的元素，会得到正确的类型：
console.log(x[0].substring(1));
//console.log(x[1].substr(1));//Error, 'number' does not have 'substr'

//当访问一个越界的元素，会使用联合类型替代(typescript 2.7 之后元组变成固定长度的数组)：
//x[3] = 'world';//报错

//枚举(enum):enum类型是对JavaScript标准数据类型的一个补充。 
//          像C#等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。
enum Color {red, green, blue};
let c: Color = Color.green;
// 默认情况下，从0开始为元素编号。 你也可以手动的指定成员的数值。 
// 例如，我们将上面的例子改成从 1开始编号：
enum Color1 {red=1,green,blue};
let c1: Color1 = Color1.red;

// 或者全部采用手动赋值：
enum Color2 {red=3, green=2, blue=1};
let c2: Color2 = Color2.blue;
let colorName2: string = Color2[2];
console.log(c2);
console.log(colorName2);
/** 
 * 枚举类型提供的一个便利是你可以由枚举的值得到它的名字。 例如，我们知道数值为2，
 * 但是不确定它映射到Color里的哪个名字，我们可以查找相应的名字：
*/
let colorName: string = Color[2];
console.log(colorName);//显示blue,上面代码中blue的值就是2


// 可以任意变换类型的变量
let any: any = 'mm';
any = 1;
any = 'jam';
// 当你只知道一部分数据的类型时，any类型也是有用的。 
// 比如，你有一个数组，它包含了不同的类型的数据：
let list: any[] = [1,true,'jam']
list[1] = 100;
console.log(list[1]);

// void:void类型像是与any类型相反，它表示没有任何类型。
// 当一个函数没有返回值时，你通常会见到其返回值类型是 void：
function warnUser(): void{
    console.log('This is my warning message!');
}
warnUser();

//声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：
let unusable: void = undefined;
let unusable1: void = null;
// let m: void = 1;//报错，只能声明 undefined 和 null

// undefined 和 null
// TypeScript里，undefined和null两者各自有自己的类型分别叫做undefined和null。

/** 
 * 默认情况下null和undefined是所有类型的子类型。
 * 就是说你可以把 null和undefined赋值给number类型的变量。
 * 当你指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自。
*/
let u: undefined = undefined;
let n: null = null;

// never: never类型表示的是那些永不存在的值的类型。
/** 
 * 例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 
 * 变量也可能是 never类型，当它们被永不为真的类型保护所约束时。
 * 特点:
 *  1.never类型是任何类型的子类型，也可以赋值给任何类型；
 *  2.没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使 any也不可以赋值给never。
 *  3.函数返回never的函数必须存在无法达到的终点
 *  4.推断的返回值类型为never
*/
// 例：函数返回never的函数必须存在无法达到的终点
// function error(message: string): never {
//     throw new Error(message);
// }
// error('This is never function');
// 推断的返回值类型为never
// function fail(){
//     return error('Something failed');
// }
// 函数返回never的函数必须存在无法达到的终点
function infiniteLoop(): never{
    while(true){};
}

// object: object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。

//使用object类型，就可以更好的表示像Object.create这样的API。例如：
declare function create(o: object | null): void;

create({prop: 0})
create(null);
create(undefined);
//create(1);//Error
//create('jam');//Error
//create(false);/Error;

// 类型断言: 类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。 
// 它没有运行时的影响，只是在编译阶段起作用。

//类型断言有两种形式。 其一是“尖括号”语法：
let someValue: any = 'this is a string';
let strLength: number = (<string>someValue).length;

// 其二: as语法:
let someValue1: any = 'this is an as';
let strLength1: number = (someValue1 as string).length;
// 两种形式是等价的。 至于使用哪个大多数情况下是凭个人喜好;(最好使用as语法);
// 注意: 当在TypeScript里使用JSX时，只有 as语法断言是被允许的。
