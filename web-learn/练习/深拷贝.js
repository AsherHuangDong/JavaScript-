

let deepClone = function(obj) {
    let obj1 = Array.isArray(obj) ? [] : {}

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (obj[key] && typeof obj[key] === 'object') {
                obj1[key] = deepClone(obj[key])
            } else {
                obj1[key] = obj[key]
            }
        }
    }
    return obj1
}
let obj = {
    name: 'jame',
    age: 20,
    eat: function() {
        console.log('eating')
    }
}

let arr = [{name: 'jam'}, {name: 'look'}]
let arr1 = deepClone(arr)
console.log(arr1)
console.log(deepClone(obj))
deepClone(obj).eat()