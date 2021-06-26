

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
/******************************
 WEATEHER API PRESTON/FISH/SODA
 ******************************/
 async function getWeather() {
    const url = "https://api.openweathermap.org/data/2.5/weather?&id=5604473&units=imperial&appid=ec88a9a3a0d62c0053ddeb7408e1bda3";

    const response = await fetch(url);

    if (response.status == 200) {
        return response.json();
    } else {
        throw new Error("No weather available + " + response.status);
    }
}


async function getWeather() {
    const url = "https://api.openweathermap.org/data/2.5/forecast?&id=5604473&units=imperial&appid=ec88a9a3a0d62c0053ddeb7408e1bda3";

    const response = await fetch(url);

    if (response.status == 200) {
        return response.json();
    } else {
        throw new Error("No weather available + " + response.status);
    }
}


function weather() {
    const current = getDailyWeather()
        .then(function (weather) {
            console.log(weather);
    
            let temp = document.getElementById('temp');
            let highTempValue = document.getElementById('highTempValue');
            let humid = document.getElementById('humid');
            let windSpeedValue = document.getElementById('windSpeedValue');

            
            temp.textContent = Math.round(weather.main.temp);
            highTempValue.textContent = Math.round(weather.main.temp_max);
            humid.textContent = weather.main.humidity;
            windSpeedValue.textContent = Math.round(weather.wind.speed);
        });
    const forecast = getForecastWeather()
        .then(function (weather) {
            console.log(weather);

            var dayNum = 0;
            for (let i = 0; i < weather.list.length; i++) {
                let date = new Date(weather.list[i].dt_txt);
                if (date.getHours() == 18) {
                    let day = document.getElementById('day' + dayNum);
                    var weekday = daysOfWeek(date);
                    day.textContent = weekday[date.getDay()];

                    let temp = document.getElementById('temp' + dayNum);
                    temp.textContent = Math.round(weather.list[i].main.temp);

                    // let img = document.getElementById('img' + dayNum);
                    // img.setAttribute('src', 'http://openweathermap.org/img/wn/10d@2x.png')

                    let img = document.getElementById('img' + dayNum);
                    img.setAttribute('src', 'https://openweathermap.org/img/wn/'+ weather.list[i].weather[0].icon +'@2x.png')
                    //https://openweathermap.org/img/wn/04d@2x.png

                    dayNum++;
                }
                console.log(dayNum);
            }
        });
}




// async function getWeather() {
//     const url = "https://api.openweathermap.org/data/2.5/forecast?zip=5604473,us&units=imperial&appid=ec88a9a3a0d62c0053ddeb7408e1bda3";
//     const response = await fetch(url);

//     if (response.status == 200) {
//         return response.json();
//     } else {
//         throw new Error("No weather found + " + response.status);
//     }
// }

// function daysOfWeek(date) {

//     var weekday = new Array(7);
//     weekday[0] = "Sunday";
//     weekday[1] = "Monday";
//     weekday[2] = "Tuesday";
//     weekday[3] = "Wednesday";
//     weekday[4] = "Thursday";
//     weekday[5] = "Friday";
//     weekday[6] = "Saturday";

//     return weekday;
// }

// function weather() {
//     const w = getWeather()
//         .then(function (weather) {
//             // const date = new Date(); // Make this dynamic (Pull the next couple dates instead of hard coding them)
//             // console.log(date);

//             console.log(weather);
//             let currentWeather = document.querySelector('#current-weather');
//             let dayOne = document.querySelector('#one');
//             let dayTwo = document.querySelector('#two');
//             let dayThree = document.querySelector('#three');
//             let dayFour = document.querySelector('#four');
//             let dayFive = document.querySelector('#five');
//             currentWeather.textContent = Math.floor(weather.list[0].main.temp) + "°F";
//             dayOne.textContent = Math.floor(weather.list[8].main.temp);
//             dayTwo.textContent = Math.floor(weather.list[16].main.temp);
//             dayThree.textContent = Math.floor(weather.list[24].main.temp);
//             dayFour.textContent = Math.floor(weather.list[32].main.temp);
//             dayFive.textContent = Math.floor(weather.list[39].main.temp);

//             // Dynamically change city name
//             let cityName = document.querySelector("#city-name");
//             cityName.textContent = weather.city.name;

//             let desc = document.querySelector("#current-weather-desc");
//             desc.textContent = capitalizeFirstLetter(weather.list[0].weather[0].description);

//             var dayNum = 1;
//             var week = daysOfWeek();
//             for (let i = 0; i < weather.list.length; i++) {
//                 if (i == 8 || i == 16 || i == 24 || i == 32 || i == 39) {
//                     let day = document.querySelector('#weekday' + dayNum);
//                     var day1 = new Date(weather.list[i].dt_txt);
//                     day1.getDay();
//                     day.textContent = week[day1.getDay()];

                   

//                     let icon = document.querySelector('#icon' + dayNum);
//                     switch (weather.list[i].weather[0].main) {
//                         case 'Clear':
//                             icon.setAttribute('class', 'wi wi-day-sunny')
//                             break;
//                         case 'Thunderstorm':
//                             icon.setAttribute('class', 'wi wi-thunderstorm')
//                             break;
//                         case 'Drizzle':
//                             icon.setAttribute('class', 'wi wi-showers')
//                             break;
//                         case 'Rain':
//                             icon.setAttribute('class', 'wi wi-rain')
//                             break;
//                         case 'Snow':
//                             icon.setAttribute('class', 'wi wi-snow')
//                             break;
//                         case 'Clouds':
//                             icon.setAttribute('class', 'wi wi-cloud')
//                             break;
//                         default:
//                     }

//                     dayNum++;
//                 }
//             }

//         });

//     function capitalizeFirstLetter(string) {
//         return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
//     }
// }

// window.addEventListener('load', weather());

