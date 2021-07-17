
async function getTemples() {
    const requestURL = 'json/temples2.json';

    fetch(requestURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonObject) {
            console.table(jsonObject); // temporary checking for valid response and data parsing
            const temples = jsonObject;
            for (let i = 0; i < temples.length; i++) {
                let card = document.createElement('section');
                let grid = document.createElement('div');
                let h2 = document.createElement('h1');
                let phone = document.createElement('p');
                let email = document.createElement('p');
                let address = document.createElement('p');
                let services = document.createElement('p');
                let milestones = document.createElement('p');
                let ordinance = document.createElement('section');
                let closures = document.createElement('p');
                let summary = document.createElement('p');
                let image = document.createElement('img');

                h2.textContent = temples[i].name;
                phone.innerHTML += `
                    <b>Phone Number</b>
                    <br>
                    ${temples[i].phone}`;
                email.innerHTML += `
                    <b>Email Address</b>
                    <br>
                    ${temples[i].email}`;
                address.innerHTML = `
                <b>Address</b>
                <br>
                ${temples[i].address1}
                <br>
                ${temples[i].city}, ${temples[i].state} ${temples[i].zip}
                `;
                const service = temples[i].services;
                services.innerHTML += `
                    <b>Services</b>
                    <br>`;
                for (let i = 0; i < service.length; i++) {
                    if (i != 0) {
                        services.innerHTML += `
                        <br>
                        `;
                    }
                    services.innerHTML += `${service[i]}`;
                }
                const milestonesS = temples[i].milestones;
                milestones.innerHTML += `
                    <b>milestones</b>
                    <br>`;
                for (let i = 0; i < milestonesS.length; i++) {
                    if (i % 2 != 0 && i != 0) {
                        milestones.innerHTML += ` - `
                    }
                    if (i % 2 == 0 && i != 0) {
                        milestonesy.innerHTML += `
                        <br>
                        `;
                    }
                    milestonesy.innerHTML += `${milestonesS[i]}`;
                }
                ordinance.innerHTML = `
                <p><b>Ordinance and Session Schedule</b>
                <br>
                ${temples[i].ordinance}</p>
                `;
                const closure = temples[i].closures;
                closures.innerHTML += `
                    <b>Closures</b>
                    <br>`;
                for (let i = 0; i < closure.length; i++) {
                    closures.innerHTML += `${closure[i]}
                    <br>`;
                }
                summary.innerHTML = `
                <b>Summary</b>
                <br>
                ${temples[i].summary}`;
                image.setAttribute('src', temples[i].imageurl);
                image.setAttribute('alt', temples[i].name);

                phone.classList.add("left");
                email.classList.add("left");
                address.classList.add("left");
                services.classList.add("left");
                milestones.classList.add("left");
                image.classList.add("right");

                grid.appendChild(phone);
                grid.appendChild(email);
                grid.appendChild(address);
                grid.appendChild(services);
                grid.appendChild(milestones);
                grid.appendChild(image);

                card.appendChild(h2);
                card.appendChild(grid);
                card.appendChild(ordinance);
                card.appendChild(summary);
                card.appendChild(closures);

                document.querySelector('div.cards').appendChild(card);
                card.classList.add("card");

            }
        });
}

window.addEventListener('load', (event) => {
    getTemples();
})

// var myRequest = new XMLHttpRequest();
// myRequest.open('GET', '\directory/temples2.json');



// myRequest.onload = function () {
//     var data = JSON.parse(myRequest.responseText);

//     showSnowflakeAZClosures(data);
//     showRexburgClosures(data);
//     showKCMissouriClosures(data);
//     showOCOklahomaClosures(data);

//     // Idaho Falls
//     function showSnowflakeAZClosures(jsonObj) {
//         var closureDate = jsonObj.temple[0].closures;

//         $.each( closureDate, function( index ) {
//             var dateData = closureDate[index].date;

//             var myP = document.createElement('p');
//             myP.textContent = dateData;
//             document.getElementById('SnowfalkeAZClosures').appendChild(myP);
//             console.log( index + ": " + dateData );
//           });
//     }

//     // Rexburg
//     function showRexburgClosures(jsonObj) {
//         var closureDate = jsonObj.temple[1].closures;

//         $.each( closureDate, function( index ) {
//             var dateData = closureDate[index].date;

//             var myP = document.createElement('p');
//             myP.textContent = dateData;
//             document.getElementById('RexburgClosures').appendChild(myP);
//             console.log( index + ": " + dateData );
//           });
//     }

//     // Kansas City Missouri
//     function showKCMissouriClosures(jsonObj) {
//         var closureDate = jsonObj.temple[3].closures;

//         $.each( closureDate, function( index ) {
//             var dateData = closureDate[index].date;

//             var myP = document.createElement('p');
//             myP.textContent = dateData;
//             document.getElementById('KCMissouriClosures').appendChild(myP);
//             console.log( index + ": " + dateData );
//           });
//     }

//     // Oklahoma City
//     function showOCOklahomaClosures(jsonObj) {
//         var closureDate = jsonObj.temple[3].closures;

//         $.each( closureDate, function( index ) {
//             var dateData = closureDate[index].date;

//             var myP = document.createElement('p');
//             myP.textContent = dateData;
//             document.getElementById('OCOklahomaClosures').appendChild(myP);
//             console.log( index + ": " + dateData );
//           });
//     }
// }

// myRequest.send();