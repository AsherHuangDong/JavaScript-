function reverseStr(str,left,right){
    left = left || 0;
    right = right || (str.length-1);
    //console.log(left,right);
    while(left < right){
        let temp = str[left];
        str[left] = str[right];
        str[right] = temp;
        left++;
        right--;
    }
    return str;
}

let str = 'acs ff bb';
console.log(reverseStr(str));
