// connnect using XHR to JSON file
// var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
// var request = new XMLHttpRequest();
// request.open('GET', requestURL);
// request.responseType = 'json';
// request.send();

// request.onload = function () {

//     var towndata = request.response;
//     var towns = towndata['towns'];

//     for (var i = 0; i < towns.length; i++) {

//         if (towns[i].name == 'Preston' || towns[i].name == 'Fish Haven' || towns[i].name == 'Soda Springs') {
//             var myArticle = document.createElement('article');
//             var myH2 = document.createElement('h2');
//             var myPara1 = document.createElement('p');
//             var myPara2 = document.createElement('p');
//             var myPara3 = document.createElement('p');
//             var myPara4 = document.createElement('p');
//             var myPara5 = document.createElement('p');
//             var myList = document.createElement('ul');

//             myH2.textContent = towns[i].name;
//             myPara1.textContent =  towns[i].motto;
//             myPara2.textContent = 'Year Founded: ' + towns[i].yearFounded;
//             myPara3.textContent = 'Current Population: ' + towns[i].currentPopulation;
//             myPara4.textContent = 'Average Rainfall: ' + towns[i].averageRainfall;
//             myPara5.textContent = 'Events: ';

//             var townevents = towns[i].events;
//             for (var j = 0; j < townevents.length; j++) {
//                 var listItem = document.createElement('ul');
//                 listItem.textContent = townevents[j];
//                 myList.appendChild(listItem);
//             }

//             var section = document.querySelector('#cities');

//             myArticle.appendChild(myH2);
//             myArticle.appendChild(myPara1);
//             myArticle.appendChild(myPara2);
//             myArticle.appendChild(myPara3);
//             myArticle.appendChild(myPara4);
//             myArticle.appendChild(myPara5);
//             myArticle.appendChild(myList);

//             section.appendChild(myArticle);
//         }
//     }

// }



async function getTowns() {
    const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

    fetch(requestURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonObject) {
            console.table(jsonObject); // temporary checking for valid response and data parsing
            const towns = jsonObject['towns'];

            let prestonMotto = document.querySelector(".preston-motto");
            let prestonYear = document.querySelector(".preston-year");
            let prestonPop = document.querySelector(".preston-population");
            let prestonRain = document.querySelector(".preston-rain");

            prestonMotto.textContent = towns[6].motto;
            prestonYear.textContent = "Year Founded: " + towns[6].yearFounded;
            prestonPop.textContent = "Current Population: " + towns[6].currentPopulation;
            prestonRain.textContent = "Average Rainfall: " + towns[6].averageRainfall;

            let sodaMotto = document.querySelector(".soda-motto");
            let sodaYear = document.querySelector(".soda-year");
            let sodaPop = document.querySelector(".soda-population");
            let sodaRain = document.querySelector(".soda-rain");

            sodaMotto.textContent = towns[0].motto;
            sodaYear.textContent = "Year Founded: " + towns[0].yearFounded;
            sodaPop.textContent = "Current Population: " + towns[0].currentPopulation;
            sodaRain.textContent = "Average Rainfall: " + towns[0].averageRainfall;

            let fishMotto = document.querySelector(".fish-motto");
            let fishYear = document.querySelector(".fish-year");
            let fishPop = document.querySelector(".fish-population");
            let fishRain = document.querySelector(".fish-rain");

            fishMotto.textContent = towns[2].motto;
            fishYear.textContent = "Year Founded: " + towns[2].yearFounded;
            fishPop.textContent = "Current Population: " + towns[2].currentPopulation;
            fishRain.textContent = "Average Rainfall: " + towns[2].averageRainfall;
        });
}

window.addEventListener('load', (event) => {
    getTowns();
})