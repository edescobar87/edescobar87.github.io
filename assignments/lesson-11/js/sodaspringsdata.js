// connnect using XHR to JSON file
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {

    var towndata = request.response;
    var towns = towndata['towns'];

    for (var i = 0; i < towns.length; i++) {

        if (towns[i].name == 'Soda Springs' || towns[i].name == '' || towns[i].name == '') {
            var myArticle = document.createElement('article');
            var myH2 = document.createElement('h2');
            var myPara1 = document.createElement('p');
            var myPara2 = document.createElement('p');
            var myPara3 = document.createElement('p');
            var myPara4 = document.createElement('p');
            var myPara5 = document.createElement('p');
            var myList = document.createElement('ul');
            

            myH2.textContent = towns[i].name;
            myPara1.textContent =  towns[i].motto;
            myPara2.textContent = 'Year Founded: ' + towns[i].yearFounded;
            myPara3.textContent = 'Current Population: ' + towns[i].currentPopulation;
            myPara4.textContent = 'Average Rainfall: ' + towns[i].averageRainfall;
            myPara5.textContent = 'Events: ';

            var townevents = towns[i].events;
            for (var j = 0; j < townevents.length; j++) {
                var listItem = document.createElement('ul');
                listItem.textContent = townevents[j];
                myList.appendChild(listItem);
            }

         let image = document.createElement('img');
         image.setAttribute('src', 'images/' + towns[i]["photo"]);
        //  image.setAttribute('alt', h2 + i);
        

            var section = document.querySelector('#cities');

            myArticle.appendChild(myH2);
            myArticle.appendChild(myPara1);
            myArticle.appendChild(myPara2);
            myArticle.appendChild(myPara3);
            myArticle.appendChild(myPara4);
            myArticle.appendChild(myPara5);
            myArticle.appendChild(myList);
            myArticle.appendChild(image);

            section.appendChild(myArticle);
        }
    }

}