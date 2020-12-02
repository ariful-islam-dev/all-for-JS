//Id, Class, TagName, Name

// let title = document.getElementById('title')
// console.log(title);

// let paragraphs = document.getElementsByClassName('load')
// console.log(paragraphs);

// let lists = document.getElementsByTagName('li');
// console.log(lists);

// let listItemOne = document.getElementsByName('list-item-one')
// console.log(listItemOne);



let title = document.querySelector('#title')
console.log(title);

let paragraph = document.querySelector('.lead')
console.log(paragraph);

let paragraphs = document.querySelectorAll('.lead')
console.log(paragraphs);

let list = document.querySelectorAll('li')
console.log(list);

let listItemOne = document.querySelector('[name^="list-item-one"]')
console.log(listItemOne);