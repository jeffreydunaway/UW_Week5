// When a user clicks the + element, the count should increase by 1 on screen.
function plus(){
    let stringNum = document.getElementsByTagName('p')[0].innerText
    let num = parseInt(stringNum)
    num+=1
    document.getElementsByTagName('p')[0].innerText = num
}
// When a user clicks the – element, the count should decrease by 1 on screen.
function minus() {
    let stringNum = document.getElementsByTagName('p')[0].innerText
    let num = parseInt(stringNum)
    num-=1
    document.getElementsByTagName('p')[0].innerText = num
}