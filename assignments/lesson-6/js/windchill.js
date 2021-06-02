// function getWindChillValue () {

//     var f;
//     var t = 76;
//     var s = 5;
//     var e = Math.pow (s, 0.16);
    
//     f = 35.74 + (0.6215 * t) - (35.75 * e) + (0.4275 * t * e);
    
//     document.getElementById("windChillValue").innerHTML = getWindChillValue;
//     }


var temp= 54.1;
var wSpeed= 12;
var windChillValue= (35.74 + (0.6215 * temp))-(35.75 * Math.pow(wSpeed,0.16)) + (0.4275*temp*Math.pow(wSpeed,0.16));

var windChillValue= Math.round(windChillValue);
document.getElementById("windChillValue").innerHTML= windChillValue;

if (highTempValue <= 50 && windChillValue > 3) {
    windChillValue = 35.74 + + (0.6215 * highTempValue) - (35.75 * (windChillValue ** 0.16)) + (0.4275 * highTempValue * (windChillValue * 0.16));
    document.querySelector('#windChillValue').innerHTML = windChillValue;
} else {
    document.querySelector('#windChillValue').innerHTML = 'N/A';
}



// var temp= 54;
// var wSpeed= 2;

// let highTemp = document.querySelector('#highTempValue');
// let windChillValue = document.querySelector('#windChillValue');

// // var windChillValue;

// if (highTempValue <= 50 && windChillValue > 3) {
//     windChillValue = 35.74 + + (0.6215 * highTempValue) - (35.75 * (windChillValue ** 0.16)) + (0.4275 * highTempValue * (windChillValue * 0.16));
//     document.querySelector('#windChillValue').innerHTML = windChillValue;
// } else {
//     document.querySelector('#windChillValue').innerHTML = 'N/A';
// }



//ANOTHER WAY TO GET THE WIND CHILL FUNCTION

// document.addEventListener("DOMContentLoaded", function(){
//     //Call the modified date function
//     buildModDate();
//     //Work with the small screen menue
//     const hambutton = document.querySelector('.ham');
//     const mainnav = document.querySelector('#navigation');

//     hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);
//     //Use the wind chill function
//     let speed = 3;
//     let temp = 10;
//     buildWC(speed, temp);
// })


// function buildWC(speed, temp) {
//     let feelTemp = document.getElementById('feelTemp');

//     // Compute the windchill
//     let wc = 35.74 +0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);
//     console.log(wc);

//     // Round the answer down to integer
//     wc = Math.floor(wc);

//     // If chill is greater than temp, return the temp
//     wc = (wc > temp) ? temp : wc;

//     // Display the windchill
//     console.log(wc) ;
//     // wc = 'Feels like' '+wc+' '&deg;F';
//     feelTemp.innerHTML = wc;
//     return wc;
<<<<<<< HEAD
// }
=======
// }
>>>>>>> 4d074ee3c46b8ec5cb5c4a583fa9dd1c7214b293
