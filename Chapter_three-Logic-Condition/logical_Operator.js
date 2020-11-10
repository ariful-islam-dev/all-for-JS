//&& || !


// A && B
//true && true = true
//true && false = false
//fasle && fasle = false
// fasle && fasle = false

// A || B
//true || true = true
//true || false = ture


var a = 10
var b = 20
var c = 30
var d = 40

if (a > b && c > d) {
    console.log('A is greater than B and C is greter than D');
} else {
    console.log('At list one condition is false');
}

if (a > b || c > d) {
    console.log('A is greater than B or C is greter than D');
} else {
    console.log('At list one condition is false');
}

var check = !!(a > b)

console.log(check);