/**
 * 泛型：可以使用泛型来创建可重用的组件，一个组件可以支持多种类型的数据。
 * 优点：允许我们跟踪函数里的使用类型信息，不同于 any，它不会丢失信息
 */
// 不使用泛型的时候
function identify(arg: number): number {
  return arg;
}
// 使用泛型: T为类型变量，用于捕捉用户传入的类型，之后就可以使用该类型。
function identify1<T>(arg: T): T {
  return arg;
}
