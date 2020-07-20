console.log(1)
new Promise((resolve,reject)=>{
    console.log(2)
    resolve();
    console.log(3)
})

// for(var i=0;i<3;i++){
//     setTimeout(function(){
//         console.log(i)
//     },4)
// }

for(var i=0;i<3;i++){
    (function(n){
        setTimeout(()=>{
            console.log(n)
        })
    })(i)
}

for(let i=0;i<3;i++){
    setTimeout(()=>{
        console.log(i)
    })
}

function person(){
    this.name = 1;
}

var p1 = new person();

person.prototype.name = 2;

console.log(p1.prototype === Object)
console.log(p1.__proto__ === Object);
console.log(p1.__proto__.__proto__ === Object.prototype);

let str = 'hello'
let arr = [...str]
console.log(arr)