// Given the <body> element as variable body,
// access the <main> node and log to the console.

const body = document.querySelector('body');

console.log(body.querySelector('main'))
// Given the <ul> element as variable ul,
// access <body>  and log to the console.

const ul = document.querySelector('ul');

// ul is a child of the main and main is a child of body
console.log(ul.parentNode.parentNode)
// Given the <p> element as var p,
// access the 3rd <li>  and log to the console.

const p = document.querySelector('p');
let child3 = p.parentElement.childNodes[3].childNodes[5]
console.log(child3)
