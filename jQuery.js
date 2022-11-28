//Figured I'd add this since we just did this in class. :) 
//Change the class of the second <li> from to "sun" to "cloudy"
$(document).ready(
    function(){
        let y = $('#weather li:nth-child(2)')
        y.attr('class', 'cloudy')
    }
);
