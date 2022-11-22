// Change the text of the "Seattle Weather" header to "February 10 Weather Forecast, Seattle"

const headline = document.getElementById('weather-head')
headline.innerText = 'February 10 Weather Forecast, Seattle'

// Change the styling of every element with class "sun" to set the color to "orange"
const sunEls = document.querySelectorAll('.sun')

sunEls.forEach((el) => el.style.color = 'orange')
 
// Change the class of the second <li> from to "sun" to "cloudy"
//creating a loop through the array, using the ternary. have to create the class first then 
// log it, and then loop it. :)
let classes = document.getElementsByClassName("sun")
console.log(classes)
for(let i =0; i<classes.length; i++){
    classes[i].setAttribute('style', 'color:orange')
}
// for reference: JQuery

const bubbie2 = document.querySelector('#weather :nth-child(2)');
bubbie2.setAttribute('name', 'Star_Trek_DS9_is_the_best')
