class Greeter<T> {
  greeting: T;
  constructor(message: T) {
    this.greeting = message;
  }

  greet() {
    return this.greeting;
  }
}

let greeter = new Greeter<string>("Hello World");

console.log(greeter.greet());
console.log(typeof greeter.greet());
