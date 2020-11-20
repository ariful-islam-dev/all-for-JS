//************ */ Inheritance//
// function Persone(name){
//     this.name = name
// }


// var p1 = new Persone('Ariful Islam')

// console.log(p1);

//*****************descriptor********** */
// var person = {
//     name: 'Ariful Islam'
// }

// console.log(person);

// for(var i in person){
//     console.log(i);
// }
// console.log(Object.keys(person));

// var descriptor = Object.getOwnPropertyDescriptor(person, 'name')
// console.log(descriptor);

// let baseObj = Object.getPrototypeOf(person);
// let descriptor = Object.getOwnPropertyDescriptor(baseObj, 'toString')

// console.log(descriptor);

// Object.defineProperty(person, 'name', {
//     enumerable:false,
//     writable: false,
//     configurable:false,
//     value:'Ariful Islam Raju'
// })
//**********************Prototype*********** */
// function Persone(name){
//     this.name = name
// }

// Persone.prototype.PI = 3.1416


// var p1 = new Persone('Ariful Islam')
// var p2 = new Persone('Raju')

// console.log(Object.getPrototypeOf(p1))
// console.log(Persone.prototype);

// console.log(p1, p2);

function Square(width) {
    this.width = width
    this.getWidth = function(){
        console.log('Width is '+ this.width);
        // this.draw()
    }


}

Square.prototype = {
    draw: function () {
        this.getWidth()
        console.log('Draw');
    },
    toString: function () {
        return 'My Width is = ' + this.width
    }
}

var sqr1 = new Square(10)
var sqr2 = new Square(5)

// console.log(Object.keys(sqr1));

for(var i in sqr1){
    console.log(i);
}
