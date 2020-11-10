//What is String?


// ['s', 't', 'r', 'i', 'n', 'g']

// var str = 'Something';
// var n = 10
// var str2 = String(n)
// console.log(str2);

//**********Escape Notation */

// var str = 'This is a \\String'
// console.log(str);

//**********String Comparison */
// var a = 'aaaaaZ';
// var b = 'aaaaaz';

// console.log(a < b);

// console.log('a'>'Z');
console.log(('001'== 1));
var a = 'I am'
var b = 'Ariful Islam'

var c = a.concat(' ',b)
// console.log(c);
// var d = c.substr(5)
// console.log(d);

// console.log(c.startsWith('I am'));
// console.log(c.endsWith('Islam'));
// console.log(a.toUpperCase());
// console.log(b.toLocaleLowerCase());
// console.log('  fsdsfsddsf  '.trim());
// console.log(c.split(' '));

var str = 'Ariful';
var str2 = str.charAt(12)
// console.log(typeof str2);
var length = 0;
while(true){
    if(str.charAt(length)== ''){
        break
    }else{
        length++
    }
}
console.log(length);
console.log(str.length);
console.log('something'.length);