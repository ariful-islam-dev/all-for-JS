let li1 = document.getElementsByTagName('li') //Element Node

let li2 = document.querySelectorAll('li') //Node [Element, comment, text]

console.log(li1.constructor.name);
console.log(li2.constructor.name);

let ul = document.querySelector('ul')
console.log(ul.children);
console.log(ul.childNodes);