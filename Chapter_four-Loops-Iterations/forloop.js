// For Loops


// for (var i = 0; i < 1000; i++) {
//     console.log((i+1)+' Ariful Islam');
// }

// for(initializer, condition, increment){
// body
//}

// for (var i = 1; i<=100; i++){
//     if(i%2 === 0){
//         console.log(i);
//     }
// }

// var sum = 0;
// for (var i = 1; i <= 10; i++) {
//     var result = sum +1
//     console.log(sum+ '+'+i+'='+(sum+1));
//     sum += 1;
    
// }
// console.log('result = '+ sum);

var sum = 0;
for(var i = 0; i<=100; i++){

    var result = sum+i
    if(i%2 === 0){
       console.log(sum+'+'+i+'='+(sum+i));
       sum+= i
    }
    sum = result
}
console.log(sum);

