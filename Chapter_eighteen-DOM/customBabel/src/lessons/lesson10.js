
let li = createElement('li', 'Four', 'list-group-item')
li.setAttribute('title', 'I am Fourth title')

let list = document.getElementById('list');
list.appendChild(li)



// let p1 = createElement('p', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt debitis, quos soluta accusantium sapiente ullam ipsa hic quasi temporibus veritatis est quidem quam suscipit tempora voluptates ea velit, cupiditate saepe, eligendi magni doloribus libero perspiciatis at vero?', 'lead')

// let p2 = createElement('p', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt debitis, quos soluta accusantium sapiente ullam ipsa hic quasi temporibus veritatis est quidem quam suscipit tempora voluptates ea velit, cupiditate saepe, eligendi magni doloribus libero perspiciatis at vero?', 'lead')

// let div = createElement('div')
// append(div, [p1, p2])

// list.insertAdjacentElement('afterend', div)

// let container = document.getElementById('cont')
// container.appendChild(div)

function createElement(tagName, innerHTML, className){
    let tag = document.createElement(tagName)
    tag.innerHTML = innerHTML || ''
    tag.className = className || ''

    return tag
}


function append(parent, children){
    children.forEach(child => parent.appendChild(child))
}

//Remove Element and Update
let firstChild = list.firstElementChild
console.log(firstChild);

setTimeout(() => {
    firstChild.innerHTML= firstChild.innerHTML + '    (Modified)'
    firstChild.style.backgroundColor = 'gray'
    firstChild.classList.add('text-success')
}, 5000);

// setTimeout(() => {
//     list.lastChild.remove()
// }, 3000);

let lastItem = list.lastElementChild.cloneNode(true)
lastItem.innerHTML = 'Five'
list.appendChild(lastItem)

// console.log(list.attributes);
// console.log(list.getAttributeNames());
// console.log(list.getAttributeNode('class'));
// console.log(list.getAttribute('id'));
// console.log(list.classList);

// lastItem.id = 'last-item'

// lastItem.setAttribute('id','last-item')

let attr = document.createAttribute('title')
attr.value="I am title"

lastItem.setAttributeNode(attr)