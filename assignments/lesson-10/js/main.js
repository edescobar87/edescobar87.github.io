window.addEventListener('load', ()=> {
    const hambutton = document.querySelector('.ham');
    const mainnav = document.querySelector('#navigation');

    hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);
        // 
    // window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};
});

// if its friday it will hopefull display ananouncement about pancakes in the park oh baby I hope this owrks if not then.... that sucks//

let currentDate = new Date();

const pday = document.querySelector('#pday');
if (currentDate.getDay() == 6) {
  pday.style.display = 'block';
}
else {
  pday.style.display = 'none';
}



function adjustRating(rating) {
  document.getElementById("ratingvalue").innerHTML = rating;
}

