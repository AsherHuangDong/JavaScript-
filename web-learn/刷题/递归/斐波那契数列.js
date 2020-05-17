
let Farr = function(n) {
    return n < 3 ? n : Farr(n-1) + Farr(n-2) 
}
console.log(Farr(1))
console.log(Farr(2))
console.log(Farr(3))
console.log(Farr(4))
console.log(Farr(5))