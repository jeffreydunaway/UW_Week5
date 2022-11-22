// Attach one listener that will detect clicks on any of the <td>
// elements.  Should update that element's innerHTML to be the
// x, y coordinates of the mouse at the time of the click

let square = document.querySelectorAll('td')
for(let i =0;i<square.length;i++){
    square[i].addEventListener('click', (e)=>{
        let x = e.clientX
        let y = e.clientY
        square[i].innerHTML = `(${x} , ${y})`
    })
}
