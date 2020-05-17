
Function.prototype.myCall = function(obj) {

    var obj = obj || window

    obj.fn = this

    let args = [...arguments].slice(1)

    let result = obj.fn(...args)

    delete obj.fn

    return result
}

let person = function(name, age) {
    console.log(name)
    console.log(age)
}
let obj = {}

person.myCall(obj, 'jam', 22)
