// Attach one listener that will detect clicks on any of the <td>
// elements.  Should update that element's innerHTML to be the
// x, y coordinates of the mouse at the time of the click

let box = document.querySelectorAll('td')
for(let i =0;i<box.length;i++){
    box[i].addEventListener('click', (e)=>{
        let x = e.clientX
        let y = e.clientY
        box[i].innerHTML = `(${x} , ${y})`
    })
}
