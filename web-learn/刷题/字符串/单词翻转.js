function reverseStr(str) {
    let n = str.length;
    let i = 0, j = 0;
    str = reverseS(str);
    //console.log(str.length)
    let str1 = '';
    if (str[0] !== '.') {
        while (i < n) {
            j = i;
            while (str[j] !== ' ' && j < n) {
                j++;
            }
            let k = j - 1;
            while (k >= i) {
                str1 += str[k];
                k--;
            }
            if (j != n) {
                str1 += ' ';
            }
            //console.log(j);
            i = j + 1;
        }
        return str1;
    } else {
        i = 1;
        while (i < n) {
            j = i;
            while (str[j] !== ' ' && j < n) {
                j++;
            }
            let k = j - 1;
            while (k >= i) {
                str1 += str[k];
                k--;
            }
            if (j != n) {
                str1 += ' ';
            }
            //console.log(j);
            i = j + 1;
        }
        return '.' + str1;
    }
}

function reverseS(str) {
    let str1 = '';
    let i = str.length - 1;
    while (i >= 0) {
        str1 += str[i];
        i--;
    }
    return str1;
}

for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i)
    }, 1000)
}

let str = 'I am a Chinese'
console.log(str.substring(9, 13))

var num = 1
num++ + ++num
console.log(num)
let str2 = 'hello name world.'
console.log(reverseStr(str2));

let a = [1, 2, 3]
let b = [1, 2, 3]
let c = [1, 2, 4]
console.log(a == b)
console.log(a === b)
console.log(a > c)
console.log(a < c)

var x = prompt('')
switch(x) {
    case '4':
        console.log('four')
    default:
        console.log('none')
}