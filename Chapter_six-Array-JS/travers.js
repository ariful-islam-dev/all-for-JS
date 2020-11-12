var arr = [3, 5, 4, 8, 6, 9]

// arr [0]
// arr [1]
// arr [2]
// arr [3]
// arr [4]
// arr [5]

// for (var i = 0; i < arr.length; i++) {
//     // console.log(arr[i]);
//     arr[i] = arr[i] + 2
// }
// console.log(arr);

var sum = 0;
for (var i = 0; i < arr.length; i++) {
    sum += arr[i]
}
console.log(sum);

for(var i = 0; i<arr.length; i++){
    if(arr[i]%2===0){
        console.log(arr[i]);
    }
}
for(var i = 0; i<arr.length; i++){
    if(arr[i]%2!==0){
        console.log(arr[i]);
    }
}