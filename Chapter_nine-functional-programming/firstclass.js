//First Class Function

function add(a, b) {
    return a + b
}

var sum = add
console.log(sum(4, 5));

// 01. A Function can be Stored in a Variable

var arr = []
arr.push(add)
console.log(arr);
console.log(arr[0](5, 3));

// 02. A Function can be stored in an Array

var obj = {
    sum: add
}
console.log(obj);
console.log(obj.sum(6,9));

// 03. A Function can be Stored in an Object
setTimeout(function(){
    console.log('I have Created...');
},100)

// 04. We can Create Function
//*************First Class Function Done */

//05.We can pass Function and an Arguments

//06. We can return Functions from Anothoer Function