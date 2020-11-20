// function extend(Parent, Child) {
//     Child.prototype = Object.create(Parent.prototype)
//     Child.prototype.constructor = Child
// }

// function Shape(color) {
//     this.color = color
// }

// Shape.prototype.common = function () {
//     console.log('I am Common Method');
// }


// function Square(width, color) {
//     Shape.call(this, color)
//     this.width = width
// }
// extend(Shape, Square)

// Square.prototype.draw = function () {
//     console.log('Drawing');
// }
// Square.prototype.common = function(){
//     // Shape.prototype.common.call(this)
//     console.log('I am Calling From Sqaure and I have Overridden');
// }

// var sqr = new Square(45, 'green')
// // var shape = new Shape()

// //shape -> Shape -> Object
// //sqr -> Square -> Object

// // sqr -> Square -> Shape -> Object

// function Circle(radius, color) {
//     Shape.call(this, color)
//     this.radius = radius
// }
// extend(Shape, Circle)

// Circle.prototype.common = function(){
//     // Shape.prototype.common.call(this)
//     console.log('I am Calling From Circle and I have Overridden');
// }

// var circle = new Circle(30, 'blue')

// var shape = new Shape('Pirple')

// var shapes = [shape, circle, sqr]

// for(var i of shapes){
//     i.common()
// }
function mixin(target, ...sources){
    Object.assign(target, ...sources)
}

var canWalk = {
    walk: function(){
        console.log('Walking');
    }
}

var canEat = {
    eat: function(){
        console.log('Eating...');
    }
}
var canSwim = {
    swim: function(){
        console.log('Swmming...');
    }
}

// var person = Object.assign({}, canWalk, canEat)
// person.name = 'Ariful Islam'

function Person(name){
    this.name = name
}
// Object.assign(Person.prototype, canWalk, canEat)
mixin(Person.prototype, canWalk, canEat)
var person = new Person('Ariful Islam')

console.log(person);

function GoldFish(name){
    this.name = name
}

mixin(GoldFish.prototype, canEat, canSwim)

var fish = new GoldFish('bla bla bla')
console.log(fish);