var arr = [1, 3, 4, 5, 6, 7, 8, 9, 2]

// arr[3] = 9
arr.push(11)
arr.unshift(9)
arr.splice(3, 0, 12, 15)
// arr[3] = undefined;
arr.pop()
arr.shift()
console.log(arr.length);
arr.splice(2,1, 44)

console.log(arr);