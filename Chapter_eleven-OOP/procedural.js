
//Procedural

// var width = 10
// var height = 20

// function calculateArea(width, height) {
//     return width * height
// }

// function calculateRange(width, height) {
//     return 2 * (width + height)
// }

// var area = calculateArea(50, 30)
// var range = calculateRange(45, 34)

// console.log(area, range);


// Object Oriented

var rect = {
    width: 10,
    height: 20,

    calculateArea: function () {
        return this.width * this.height
    },
    calculateRange: function () {
        return 2 * (this.width * this.height)
    }

}

var area = rect.calculateArea()
var range = rect.calculateRange()

console.log(area, range);


