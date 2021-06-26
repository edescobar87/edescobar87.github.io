/******************************
 WEATEHER API PRESTON/FISH/SODA
 ******************************/

    const apiURL = "https://api.openweathermap.org/data/2.5/weather?&id=5604473&units=imperial&appid=ec88a9a3a0d62c0053ddeb7408e1bda3";

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


    const forecastapiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=ec88a9a3a0d62c0053ddeb7408e1bda3";

    fetch(forecastapiURL) 
        .then ((response) => response.json())
        .then((jsObject) =>{
            console.log(jsObject);
            let count = 0;
            var dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
            jsObject.list.forEach(element => {
                // check for same time each day
                if(element.dt_txt.includes('18:00:00')){
                    // set lable to correct day
                    document.querySelector('#forecastTempDays' + count).textContent = (dayNames[new Date(element.dt_txt.slice(0, 10)).getDay()]);
    
                    // set temp for each day
                    document.querySelector('#temp' + count).textContent = Math.round(element.main.temp_max) + " °F";
    
                    // set icon for each day
                    document.querySelector('#weatherimg' + count).setAttribute('src', "http://openweathermap.org/img/wn/" + element.weather[0].icon + ".png")
                    count = count + 1;
                };
            });
        });
    


// function weather() {
//     const current = getDailyWeather()
//         .then(function (weather) {
//             console.log(weather);
            
//             let temp = document.getElementById('temp');
//             let highTempValue = document.getElementById('highTempValue');
//             let humid = document.getElementById('humid');
//             let wind = document.getElementById('wind');

           
//             temp.textContent = Math.round(weather.main.temp);
//             highTemp.textContent = Math.round(weather.main.temp_max);
//             humid.textContent = weather.main.humidity;
//             wind.textContent = Math.round(weather.wind.speed);
//         });
//     const forecast = getForecastWeather()
//         .then(function (weather) {
//             console.log(weather);

//             var dayNum = 0;
//             for (let i = 0; i < weather.list.length; i++) {
//                 let date = new Date(weather.list[i].dt_txt);
//                 if (date.getHours() == 18) {
//                     let day = document.getElementById('day' + dayNum);
//                     var weekday = daysOfWeek(date);
//                     day.textContent = weekday[date.getDay()];

//                     let temp = document.getElementById('temp' + dayNum);
//                     temp.textContent = Math.round(weather.list[i].main.temp);

//                     let img = document.getElementById('img' + dayNum);
//                     img.setAttribute('src', 'https://openweathermap.org/img/wn/'+ weather.list[i].weather[0].icon +'@2x.png')
//                     //https://openweathermap.org/img/wn/04d@2x.png

//                     dayNum++;
//                 }
//                 console.log(dayNum);
//             }
//         });
// }


// function weather() {
//     const current = getWeather()
//         .then(function (weather) {
//             console.log(weather);
    
//             let temp = document.getElementById('temp');
//             let highTempValue = document.getElementById('highTempValue');
//             let humid = document.getElementById('humid');
//             let windSpeedValue = document.getElementById('windSpeedValue');

            
//             temp.textContent = Math.round(weather.main.temp);
//             highTempValue.textContent = Math.round(weather.main.temp_max);
//             humid.textContent = weather.main.humidity;
//             windSpeedValue.textContent = Math.round(weather.wind.speed);
//         });

// const forecast = getWeatherForecast()
// .then(function (weather) {
//     console.log(weather);

//     var dayNum = 0;
//     for (let i = 0; i < weather.list.length; i++) {
//         let date = new Date(weather.list[i].dt_txt);
//         if (date.getHours() == 18) {
//             let day = document.getElementById('day' + dayNum);
//             var weekday = daysOfWeek(date);
//             day.textContent = weekday[date.getDay()];

//             let temp = document.getElementById('temp' + dayNum);
//             temp.textContent = Math.round(weather.list[i].main.temp);

//             // let img = document.getElementById('img' + dayNum);
//             // img.setAttribute('src', 'http://openweathermap.org/img/wn/10d@2x.png')

//             let img = document.getElementById('img' + dayNum);
//             img.setAttribute('src', 'https://openweathermap.org/img/wn/'+ weather.list[i].weather[0].icon +'@2x.png')
//             //https://openweathermap.org/img/wn/04d@2x.png

//             dayNum++;
//         }
//         console.log(dayNum);
//     }
// });
// }