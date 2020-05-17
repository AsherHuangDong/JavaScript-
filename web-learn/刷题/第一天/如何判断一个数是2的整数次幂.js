//推到方式


// 2 : 10
//     01 : 1   10 & 01 = 0
// 4 : 100
//     011 : 3  10 & 011 = 0
// 8 : 1000
//     0111 : 7 1000 & 0111 = 0 
// 16 : 10000
//      01111 : 15 10000 & 01111 = 0



function Two(n){
	if(!(n & (n-1))){
		return true;
	}else {
		return false;
	}
}

console.log(Two(8))
console.log(Two(9))

console.log(Two(2))
console.log(Two(4))