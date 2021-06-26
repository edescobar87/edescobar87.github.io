

var highTempValue = parseInt(document.querySelector('#highTempValue'));
var windSpeedValue = parseInt(document.querySelector('#windSpeedValue'));
var windChillValue = document.querySelector('#windChillValue');
var windChillCalc = 0;

if (highTempValue <= 50 && windChillValue > 3) {
    windChillValue = 35.74 + + (0.6215 * highTempValue) - (35.75 * (windChillValue ** 0.16)) + (0.4275 * highTempValue * (windChillValue * 0.16));
    console.log(windChillCalc);
    windChillValue.innerHTML = windChillCalc;
} else {
   windChillValue.innerHTML = 'N/A';
}
