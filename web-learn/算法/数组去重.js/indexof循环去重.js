
function Quchong(arr){
	let temp = 0;
	for(let i=0;i<arr.length;i++){
		if(arr.indexOf(arr[i]) >= 0){
			temp++ ;
		}
	}
}