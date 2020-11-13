// function add(a, b) {
//     var result = a + b;
//     console.log(result);
// }
// add(10, 20)
// add(7, 3)
// add(500, 700)

// function sub(a, b) {
//     var result = a - b;
//     console.log(result);
// }

// var arr1 = [1, 2, 3, 7]
// var arr2 = [5, 7, 9, 8]
// var arr3 = [9, 7, 1, 10, 5]

// var sum1 = 0;
// for (var i = 0; i < arr1.length; i++) {
//     sum1 += arr1[i]
// }
// console.log(sum1);

// var sum2 = 0;
// for (var i = 0; i < arr2.length; i++) {
//     sum2 += arr2[i]
// }
// console.log(sum2);

// var sum3 = 0;
// for (var i = 0; i < arr3.length; i++) {
//     sum3 += arr3[i]
// }
// console.log(sum3);

// function sumOfArray(arr) {
//     var sum = 0;
//     for (var i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
//     console.log(sum);
// }

// sumOfArray(arr1)
// sumOfArray(arr2)
// sumOfArray(arr3)

function test(a, b, c) {
    // console.log((arguments)
    // console.log(typeof a);
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}

test(10, 20, 30)

function addAll() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    console.log(sum);

}
var a = addAll(1, 2, 3, 4, 5, 6, 7)
var b = addAll(9, 10, 4, 5, 89, 43, 56, 34)

console.log(a, b);