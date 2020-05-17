
function exchange(a, b){
    b = b + a //类似于中间变量 
    // a = b
    a = b - a
    // b = a
    b = b - a
    return [a, b]
}

console.log(exchange(1, 2))