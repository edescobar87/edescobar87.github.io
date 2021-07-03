/******************************
 WEATEHER API PRESTON/FISH/SODA
 ******************************/

 const apiURL = "https://api.openweathermap.org/data/2.5/weather?zip=83287&appid=ec88a9a3a0d62c0053ddeb7408e1bda3";

 fetch(apiURL)
 .then((response) => response.json())
 .then((jsObject) => {
     document.querySelector('#currently').textContent = jsObject.weather[0].description;
     document.querySelector('#currentTemp').textContent = Math.round(jsObject.main.temp);
     document.querySelector('#highTempValue').textContent = Math.round(jsObject.main.temp_max);
     document.querySelector('#humid').textContent = jsObject.main.humidity;
     document.querySelector('#windSpeedValue').textContent = Math.round(jsObject.wind.speed);
 });


/***********************************************
FIVE DAY WEATHER DAY FORECAST SODA/PRESTON/FISH
***********************************************/


 const forecastapiURL = "https://api.openweathermap.org/data/2.5/forecast?zip=83287&appid=ec88a9a3a0d62c0053ddeb7408e1bda3";

 fetch(forecastapiURL) 
     .then ((response) => response.json())
     .then((jsObject) =>{
         console.log(jsObject);
         let count = 0;
         var dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
         jsObject.list.forEach(element => {
             /**************************
              CHECKING TIME FOR EACH DAY
              **************************/
             if(element.dt_txt.includes('18:00:00')){

                 /**************************************
                   SETTING THE LABLE FOR THE CORRECT DAY
                  **************************************/ 
             document.querySelector('#forecastTempDays' + count).textContent = (dayNames[new Date(element.dt_txt.slice(0, 10)).getDay()]);
 
                 /***********************************
                  SETTING UP TEMPERATURE FOR EACH DAY
                  ***********************************/ 
             document.querySelector('#temp' + count).textContent = Math.round(element.main.temp_max) + " °F";
 
                 /*******************************************
                  SETTING UP THE ICONS FOR EACH OF THERE DAYS 
                  *******************************************/ 
                
             document.querySelector('#weatherimg' + count).setAttribute('src', "http://openweathermap.org/img/wn/" + element.weather[0].icon + "@2x.png")
             count = count + 1;
             };
         });
     });
 
