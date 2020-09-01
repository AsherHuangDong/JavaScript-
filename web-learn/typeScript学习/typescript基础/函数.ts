/**
 * 函数： typescript可以创建有名字的函数和匿名函数
 */

/**
 * 函数类型: 包括参数类型和返回值类型
 */
// 为函数定义类型
function add(x: number, y: number) {
  return x + y;
}
// 函数类型是 number
let myAdd = function(x: number, y: number): number {
  return x + y;
};

// 书写完整函数类型
// 函数类型包括参数类型和返回值类型。 当写出完整函数类型的时候，这两部分都是需要的。
let myadd: (x: number, y: number) => number = function(
  x: number,
  y: number
): number {
  return x + y;
};
// 只要参数类型是匹配的，那么就认为它是有效的函数类型，而不在乎参数名是否正确。
// 因此我们可以这样写:
// 第二部分是返回值类型。 对于返回值，我们在函数和返回值类型之前使用( =>)符号，使之清晰明了
//  如之前提到的，返回值类型是函数类型的必要部分，如果函数没有返回任何值，你也必须指定返回值类型为 void 而不能留空
let myadd1: (baseValue: number, increment: number) => number = function(
  x: number,
  y: number
): number {
  return x + y;
};

/**
 * 推断类型：赋值语句的一边指定了类型但是另一边没有类型的话，TypeScript编译器会自动识别出类型。
 */
// 例：
let myAdd2 = function(x: number, y: number): number {
  return x + y;
};

/**
 * 可选参数和默认参数： TypeScript里的每个函数参数都是必须的。即：传递一个函数的参数个数必须与函数期望的参数个数一样。
 */
// 例：
function buildName(firstName: string, lastName: string) {
  return firstName + " " + lastName;
}

// console.log(buildName("Bob")); // 报错,少传递了一个参数
// console.log(buildName("Bob", "Adams", "Sr.")); // 报错，多传递了一个参数
console.log(buildName("Bob", "Adams")); // 正确

// JavaScript中函数的参数都是可选的，如果没有传递，那么这些参数的值就为 undefined。
// 在 TypeScript中 我们可以使用 ‘?’ 实现可选参数功能。
// 例：我们想让以上函数中lastName是可选的。
function buildname(firstName: string, lastName?: string) {
  return lastName ? firstName + " " + lastName : firstName;
}
console.log(buildname("Bob"));
console.log(buildname("Jam", "Bob"));
// 注意：可选参数必须跟在必选参数的后面。如果上例我们想让first name是可选的，那么就必须调整它们的位置，把first name放在后面。

// 默认初始化值得参数：为参数提供一个默认值当用户没有传递这个参数或传递的值是undefined
// 例：
function setName(firstName: string, lastName = "Smith") {
  return firstName + " " + lastName;
}
console.log(setName("Jam"));
console.log(setName("Smooth", "Fucky"));

/**
 * 剩余参数：JavaScript可以使用arguments来访问所有参数
 *         typescript可以使用一个变量存储多个参数 '...'
 */
function setname(firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ");
}
console.log(setname("Bob", "look", "food", "jam", "aj"));

interface Card {
  suit: string;
  card: number;
}

interface Deck {
  suits: string[];
  cards: number[];
  createCardPicker(this: Deck): () => Card;
}
/**
 * this: TypeScript能通知你错误地使用了 this的地方
 */
// this和箭头函数
let deck: Deck = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(52),
  createCardPicker: function(this: Deck) {
    // 箭头函数能保存函数创建时的this值，而不是调用时的值。
    return () => {
      let pickedCard = Math.floor(Math.random() * 52);
      let pickedSuit = Math.floor(pickedCard / 13);
      return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
    };
  }
};
let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker(); // this指向window
console.log("card: " + pickedCard.card + " of " + pickedCard.suit);

// this在参数回调里：回调函数里的this报错，当你将一个函数传递到某个库函数里稍后会被调用时，
// 因为当回调被调用的时候，它们会被当成一个普通函数调用， this将为undefined

// 解决方式： 首先，库函数的作者要指定 this的类型：
interface UIElement {
  addClickListener(onclick: (this: void, e: Event) => void): void;
}

class Handler {
  info: string;
  onClickBad(this: void, e: Event) {
    // this.info = e.message; // 报错, this的类型为void
    console.log("click!");
  }
}

let h = new Handler();
// uiElement.addClickListener(h.onClickBad); // error

// 重载
let suits = ["hearts", "spades", "clubs", "diamonds"];
function pickedcard(x): any {
  if (typeof x === "object") {
    let pickedcard = Math.floor(Math.random() * x.length);
    return pickedcard;
  } else if (typeof x === "number") {
    let pickedsuit = Math.floor(x / 13);
    return { suit: suits[pickedsuit], card: x % 13 };
  }
}

let myDeck = [
  { suit: "diamonds", card: 2 },
  { suit: "spades", card: 10 },
  { suit: "hearts", card: 4 }
];
let pickedcard1 = myDeck[pickedcard(myDeck)];
console.log("card: " + pickedcard1.card + " of " + pickedcard1.suit);

let pickedcard2 = pickedcard(15);
console.log("card: " + pickedcard2.card + " of " + pickedcard2.suit);
