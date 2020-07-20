function reverseStr(str){
    let n = str.length;
    let i=0,j=0;
    str = reverseS(str);
    //console.log(str.length)
    let str1 = '';
    if(str[0] != '.'){
        while(i<n){
            j = i;
            while(str[j] != ' ' && j<n){
                j++;
            }
            let k=j-1;
            while(k>=i){
                str1 += str[k];
                k--;
            }
            if(j!=n){
                str1 += ' ';
            }
            //console.log(j);
            i=j+1;
        }
        return str1;
    }else{
        i = 1;
        while(i<n){
            j = i;
            while(str[j] != ' ' && j<n){
                j++;
            }
            let k=j-1;
            while(k>=i){
                str1 += str[k];
                k--;
            }
            if(j!=n){
                str1 += ' ';
            }
            //console.log(j);
            i=j+1;
        }
        return '.' + str1;
    }
}

function reverseS(str){
   let str1 = '';
   let i=str.length-1;
   while(i>=0){
       str1 += str[i];
       i--;
   }
   return str1;
}


let str = 'hello name world.'
console.log(reverseStr(str));