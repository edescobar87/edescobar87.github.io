window.addEventListener('load',()=>{
    //const serverName = "http://127.0.0.1:5500/ice/temples/"
    const requestURL = "js/temples2.json"
    fetch(requestURL)
    .then((response)=> {
        return response.json();
    })
    .then((jsonObject)=> {
        console.log(jsonObject);
        Object.entries(jsonObject).forEach(([key,temple])=>{
    //         if(temple.state == "ID"){
                buildTempleCard(temple);
    //         }
       });
    });
});

function buildTempleCard(temple){
    console.log(temple);
    let card = document.createElement("section");
    card.classList.add("temple");
    card.innerHTML = `<h2>${temple.name}<h2>
                <img src="${temple.imageurl}" alt="${temple.name}">
                <p>Phone Number: <b>${temple.phone[0]} 1st of ${temple.phone.length}</b></p>
                <p>Current President: <b>${temple.presidents[temple.presidents.length-1]}</b></p>`;
    document.querySelector("#temples").appendChild(card);
}

async function getTemples() {
    const requestURL = 'js/temples2.json';

    fetch(requestURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonObject) {
            console.table(jsonObject); // temporary checking for valid response and data parsing
            const temples = jsonObject;
            for (let i = 0; i < temples.length; i++) {
                let temple = document.createElement('section');
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

                temple.appendChild(h2);
                temple.appendChild(grid);
                temple.appendChild(ordinance);
                temple.appendChild(summary);
                temple.appendChild(closures);

                document.querySelector('div.cards').appendChild(temple);
                temple.classList.add("temple");

            }
        });
}

window.addEventListener('load', (event) => {
    getTemples();
})




// window.addEventListener('load',()=>{
//     //const serverName = "http://127.0.0.1:5500/ice/temples/"
//     const requestURL = "js/temples2.json"
//     fetch(requestURL)
//     .then((response)=> {
//         return response.json();
//     })
//     .then((jsonObject)=> {
//         console.log(jsonObject);
//         Object.entries(jsonObject).forEach(([key,temple])=>{
//     //         if(temple.state == "ID"){
//                 buildTempleCard(temple);
//     //         }
//        });
//     });
// });

// function buildTempleCard(temple){
//     console.log(temple);
//     let card = document.createElement("section");
//     card.classList.add("temple");
//     card.innerHTML = `<h2>${temple.name}<h2>
//                 <img src="${temple.imageurl}" alt="${temple.name}">
//                 <p>Phone Number: <b>${temple.phone[0]} 1st of ${temple.phone.length}</b></p>
//                 <p>Current President: <b>${temple.presidents[temple.presidents.length-1]}</b></p>`;
//     document.querySelector("#temples").appendChild(card);
// }

