var persons = [
    {
        name: 'A',
        age: 24
    },
    {
        name: 'B',
        age: 19
    },
    {
        name: 'C',
        age: 26
    },
    {
        name: 'D',
        age: 21
    }
];

var arr = [4, 8, 1, 6, 7, 9, 4, 3, 5, 6, 8, 2, 1, 7, 1]
var arr1 = arr.every(function (value) {
    return value % 2 === 0
})

console.log(arr1);

var arr2 = arr.every(function (value) {
    return value % 2 < -1;
})
console.log(arr2);
var arr3 = arr.every(function (value) {
    return value % 2 >= 0
})

console.log(arr3);

var arr4 = arr.every(function (value) {
    return value % 2 >= 0
})

console.log(arr4);

var res3 = arr.some(function(value){
    return value % 2 === 1
})

console.log(res3);

var res4 = arr.some(function(value){
    return value <0
})

console.log(res4);

// arr.sort()
// console.log(arr);


// persons.sort();
// console.log(persons);

arr.sort(function (a, b) {
    if (a > b) {
        return -1
    } else if (a < b) {
        return 1
    } else {
        return 0
    }
})

console.log(arr);

persons.sort(function (a, b) {
    if (a.age > b.age) {
        return 1
    } else if (a.age < b.age) {
        return -1
    } else {
        return 0
    }
})
console.log(persons);