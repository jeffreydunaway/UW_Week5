// Create a new <a> element containing the text "Buy Now!" 
// with an id of "cta" after the last <p>
let main = document.getElementsByTagName('main')[0]
let nextTag = document.createElement('a')
nextTag.setAttribute('href', '#')
nextTag.innerText="Buy Now!"

console.log(main, nextTag)

main.appendChild(nextTag)


// Access (read) the data-color attribute of the <img>,
// log to the console
let imgAttribute = document.getElementsByTagName('img')[0].getAttribute('data-color')
console.log(imgAttribute)

// Update the third <li> item ("Turbocharged"), 
// set the class name to "highlight"
let order = document.querySelector('ul :nth-child(3)')
order.setAttribute('class', 'highlight')

console.log(order)
let q= document.getElementsByTagName('q')[0]
q.remove()
