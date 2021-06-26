async function getWeather() {
    const url = "https://api.openweathermap.org/data/2.5/weather?&id=5604473&units=imperial&appid=ec88a9a3a0d62c0053ddeb7408e1bda3";

    const response = await fetch(url);

    if (response.status == 200) {
        return response.json();
    } else {
        throw new Error("No weather found + " + response.status);
    }
}

    // .then(function (response) {
    //     return response.json();
    // })
    // .then(function (jsObject) {

    //     console.log(jsObject);

        // document.getElementById('des').innerHTML = jsObject.weather[0].description;
        // document.getElementById('des1').innerHTML = jsObject.weather[0].description;
        // document.getElementById('temp').innerHTML = jsObject.main.temp;
        // document.getElementById('hum').innerHTML = jsObject.main.humidity;
        // document.getElementById('windspeed').innerHTML = jsObject.wind.speed;


        // let imagesrc = 'http://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
        // let desc = jsObject.weather[0].description;
        // document.getElementById('weatherimage').innerHTML = imagesrc;
        // document.getElementById('icon').setAttribute('src', imagesrc);
        // document.getElementById('icon').setAttribute('alt', desc);
        

    


       /*****************
         CURRENT VERSION 
         *****************/
//    fetch('https://api.openweathermap.org/data/2.5/weather?id={city id}&appid={API key}')