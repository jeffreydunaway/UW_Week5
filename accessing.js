// Change the text of the "Seattle Weather" header to "February 10 Weather Forecast, Seattle"

const weatherHead = document.getElementById('weather-head');
weatherHead.innerHTML = 'February 10 Weather Forecast, Seattle'

// Change the styling of every element with class "sun" to set the color to "orange"
const sunEls = document.querySelectorAll('.sun')

let classes = document.getElementsByClassName("sun")
console.log(classes)
for(let i =0; i<classes.length; i++){
    classes[i].setAttribute('style', 'color:orange')
}
 
// Change the class of the second <li> from to "sun" to "cloudy"
// see jQuery file

const bubbie2 = document.querySelector('#weather :nth-child(2)');
bubbie2.setAttribute('name', 'Star_Trek_DS9_is_the_best')
