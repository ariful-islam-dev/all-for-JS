

// function test() {
//     var msg = 'I am Learning Lezical Scope and Closure';

//     function sayMsg() {
//         console.log(msg);
//     }

//     sayMsg()
// }

// function test() {
//     var msg = 'I am Learning Lezical Scope and Closure';

//    return function () {
//         console.log(msg);
//     }

// }
// var sayMsg = test()
// sayMsg()

for (var i = 1; i <= 5; i++) {
    (function (n) {
        setTimeout(function () {
            console.log(n);
        }, 1000 * n)
    })(i)
}
