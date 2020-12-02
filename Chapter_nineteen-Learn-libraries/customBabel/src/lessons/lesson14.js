// let title = document.getElementById('title')
// title.style.color='#f00'
// title.style.fontSize='4rem'
// title.style.background= '#ddd'
// console.log(title.style);

let styleObj = {
    background:'black',
    fontSize:'30px',
    color:'#efefef'
}

let list = document.getElementById('list');

[...list.children].forEach(li=>Object.assign(li.style, styleObj))



console.log(list.style);