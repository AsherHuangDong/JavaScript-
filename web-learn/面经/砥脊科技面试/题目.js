

console.log([...'aiforscience']);

const name = 'jam';
age = 2;
console.log(delete name)
console.log(delete age)

console.log(Promise.resolve(5));
console.log(!!null);
console.log(!!"");
console.log(!!1);

function add(a) {
    console.log(a);
    let arr = [].slice.call(arguments);
    let s = arr.reduce((item, sum) => {
        return sum + item;
    }, 0)
    //return s;˜
    return function add(b) {
        let arr1 = [].slice.call(arguments);
        s += arr1.reduce((item, sum) => {
            return sum + item;
        })
        return s;
    }
    return add1;
}

console.log(add(1, 2, 3));

function bdd(a){
    function s(a){
        return a+1;
    }
    s.toString = function(){return a};
    return s;
}
console.log(bdd(3));
