

function add(a) {
    let arr = [].slice.call(arguments);
    let s = arr.reduce((item, sum) => {
        return sum + item;
    }, 0)
    function add1(b) {
        let arr1 = [].slice.call(arguments);
        s += arr1.reduce((item, sum) => {
            return sum + item;
        })
        return add1;
    }
    add1.toString = function () { return s };
    return add1;
}


console.log(add(1, 2, 3)(2));