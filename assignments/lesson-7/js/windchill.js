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



let highTemp = document.querySelector('#highTempValue');
let highTemp = document.querySelector('#windChillValue');

