// If an li element is clicked, toggle the class "done" on the <li>

let array = document.querySelectorAll('li')
console.log(array)
for(let i = 0;i<array.length;i++){
  array[i].addEventListener('click',()=>{
    array[i].setAttribute('class', 'done')
  })
}

// If a delete link is clicked, delete the li element / remove from the DOM

let remove = document.getElementsByClassName('delete')
console.log(remove)

for(let i = 0;i<array.length;i++){
  for(let j =0; j<remove.length;j++){
    remove[i].addEventListener('click', ()=>{
      array[i].remove()
    })
  }
}
// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)
const addListItem = function(e) {
  e.preventDefault();
  const input = this.parentNode.getElementsByTagName('input')[0];
  const text = input.value; // use this text to create a new <li>

    
  // Finish function here

  const todayList = document.querySelector('.today-list');
  const li = document.createElement('li');
  const spanTag = document.createElement('span');
  spanTag.textContent = text + " ";
  const aTag = document.createElement('a');
  aTag.textContent = 'Delete'
  aTag.setAttribute('class', 'delete');
  li.append(spanTag);
  li.append(aTag);
  console.log(li)
  todayList.append(li);
};

const addList = document.getElementsByClassName('add-item')[0]
// addList.addEventListener('click', ()=>{
//   test = new addListItem()
//   console.log(test)
// })

addList.addEventListener('click',addListItem)
