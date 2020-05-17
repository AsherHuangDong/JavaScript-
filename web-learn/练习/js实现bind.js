
Function.prototype.myBind = function (func) {

    let context = this;
    let args = [...arguments].slice(1)
    return function F() {
        if (context instanceof F) {
            return new context(...args, ...arguments)
        }
        return context.apply(func, args.concat(...arguments))
    }
}

let F = function (name, age) {
    this.name = name
    this.age = age
    console.log(this.name + ' is ' + this.age + ' years old.')
    let eat = function () {
        console.log(this.name + ' is ' + this.age + ' is eating!')
    }
}
let obj = {
    value: 1
}
F.myBind(obj, 'jam', 20)()
