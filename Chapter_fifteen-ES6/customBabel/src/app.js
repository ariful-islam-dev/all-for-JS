
// let arr = [10, 22, 35]

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);

// }

// function createIterator(collection) {
//     let i = 0
//     return {
//         next() {
//             return {
//                 done: i>= collection.length,
//                 value: collection[i++]
//             }
//         }
//     }
// }

// let iterate = createIterator(arr)

// let iterate =arr[Symbol.iterator]()
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());

// console.log(arr[Symbol.iterator]);
// console.log("str"[Symbol.iterator]);

// let str = "text"
// let itarateText = str[Symbol.iterator]();
// console.log(itarateText.next());
// console.log(itarateText.next());
// console.log(itarateText.next());
// console.log(itarateText.next());
// console.log(itarateText.next());

// for(let v of arr){
//     console.log(v);
// }

// for(let v of "Ariful Islam"){
//     console.log(v);
// }

// let obj = {
//     a:10,
//     b:20
// }

// for (let v of obj){
//     console.log(v);
// }

// let obj = {
//     start: 1,
//     end: 5,
// [Symbol.iterator]: function () {
//     let currentValue = this.start
//     const self = this
//     return {
//         next() {
//             return {
//                 done: currentValue > self.end,
//                 value: currentValue > self.end ? undefined : currentValue++
//             }
//         }
//     }
// }
// [Symbol.iterator]: function* () {
//     let currentValue = this.start
//     while (currentValue <= this.end) {
//         yield currentValue++
//     }
// }
// }
// for (let v of obj) {
//     console.log(v);
// }

// let iterate = obj[Symbol.iterator]()
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());

// function* generate() {
//     yield 1
//     yield 2
//     yield 3
// }
// function* generate(collection){
//     for(let i = 0; i<collection.length; i++){
//         yield collection[i]
//     }
// }

// let it = generate(arr)
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// function isIterable(obj){
//     return typeof obj[Symbol.iterator] === "function"
// }

// let set = new Set([1,2,3])
// // let set = new Set()
// set.add(5)
// set.add(6)
// set.add(1)
// set.add(2)
// console.log(set);
// console.log(set.size);
// set.clear(set)
// set.delete(5)
// console.log(set.has(5))

// console.log(set);
// console.log(set.keys());
// console.log(set.values());

// let keyIterate = set.values()
// console.log(keyIterate.next());

// console.log(isIterable(set));

// for(let v of set){
//     console.log(v);
// }

// console.log(set.entries());

// let map = new Map([
//     ["a", 10],
//     ["b", 20],
//     ["c", 30]
// ])

// map.set("d", 40)
// map.set({ name: "Ariful Islam" }, 456)

// map.delete("c")

// console.log(map.size);
// console.log(map);
// console.log(map.get("b"));

// console.log(map.values());
// console.log(map.keys());
// console.log(map.entries());

// for(let [k, v] of map){
//     console.log(k, v);
// }

// map.forEach((v,k)=>{
//     console.log(k, v);
// })
// let a = { a: 10 }, b = { b: 20 }

// let set = new Set([a, b])

// a = null
// console.log(set);


// let arr = [...set]
// console.log(arr[0]);

// let weakSet = new WeakSet([a, b])
// a = null

// console.log(weakSet.has(b));

// let weakMap = new WeakMap([[a, 45], [b, 47]])
// a = null
// console.log(weakMap.get(a));
// console.log(weakMap.has(a));
// console.log(weakMap.has(b));

// function Rectangle(width, height) {
//     this.width = width
//     this.height = height

// }

// Rectangle.prototype.draw = function () {
//     console.log(this);
//     console.log("Drawing...");
// }
// let rect1 = new Rectangle(12, 15)


// class Rectangle {
//     constructor(width, height) {
//         this.width = width
//         this.height = height
//         this.another = function(){

//         }
//     }
//     name = "Ariful Islam"
//     test2 = function(){

//     }

//     draw() {
//         console.log("Drawing...");
//     }
//     test(){

//     }
// }
// let rect1 = new Rectangle(45, 23)
// console.log(rect1);

// class Person {
//     constructor(name, email) {
//         this.name = name
//         this.email = email
//     }

//     print() {
//         console.log(this.name, this.email);
//     }
//     test(){
//         console.log(this);
//     }

//     static create(str){
//         let person = JSON.parse(str)
//         return new Person(person.name, person.email)
//     }
// }
// let str = '{"name": "Ariful Islam", "email": "node.ariful82@gmail.com"}'

// let p1 = Person.create(str)

// console.log(p1);
// console.log(p1 instanceof Person);
// p1.print()
// let test = p1.test
// test()

// 'use strict'


// function Shape(){
//     this.draw = function(){
//         console.log(this);
//     }
// }

// let s1 = new Shape()
// let anotherDraw = s1.draw
// anotherDraw()
// const _radius = Symbol()
// const _name = Symbol()
// const _draw = Symbol()

// class Circle {
//     constructor(radius, name){
//         this[_radius] = radius
//         this[_name] = name
//     }

//     [_draw](){
//         console.log('Drawing....');
//     }
// }

// let c1 = new Circle(2, 'CRED')
// console.log(c1);


// console.log(Object.getOwnPropertyNames(c1));
// let key = Object.getOwnPropertySymbols(c1)[1]
// console.log(c1[key]);

// const _radius = new WeakMap()
// const _name = new WeakMap()
// const _resize = new WeakMap()

// class Circle {
//     constructor(radius, name) {
//         this.size = 100
//         _radius.set(this, radius)
//         _name.set(this, name)
//         _resize.set(this, () => {
//             console.log(this.size);
//         })
//     }
//     get radius(){
//         return _radius.get(this)
//     }
//     set radius(v){
//         _radius.set(this, v)
//     }

//     draw() {
//         console.log('Drawing....');
//         console.log(_radius.get(this), _name.get(this));
//         _resize.get(this)()
//     }
// }

// let c1 = new Circle(2, 'CRED')
// c1.draw()
// c1.radius = 100
// console.log(c1.radius);

//******************Inheritance************* */

// class Shape {
//     constructor(color) {
//         this.color = color
//     }
//     draw() {
//         console.log('Drawing.......');
//     }
// }

// class Rectangle extends Shape {
//     constructor(color, width, height) {
//         super(color)
//         this.width = width
//         this.height = height
//     }
//     draw() {
//         console.log('Drawing a Rectangle....');
//     }
//     calculate() {
//         return this.width * this.height
//     }
// }


// import Rectangle from './Rectangle'

// let r = new Rectangle('Green', 4, 5)
// r.draw()
// console.log(r);

// import * as func from './func'
// console.log(func.add(45, 10));
// console.log(func.times(45, 10));

import { add, div } from './func'

console.log(add(10, 3));
console.log(div(10, 3));