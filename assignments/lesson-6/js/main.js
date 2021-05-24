window.addEventListener('load', ()=> {
    const hambutton = document.querySelector('.ham');
    const mainnav = document.querySelector('#navigation');

    hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);
        // 
    // window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};
});

// if its friday it will hopefull display ananouncement about pancakes in the park oh baby I hope this owrks if not then.... that sucks//
// const pday = document.querySelector('pday');
// if (currentDate.getDay() == 5) {
//     pday.style.display = 'block';
// }
// else {
//     pday.style.display = 'none';
// }

// const pancake = document.getElementById('pancakes');
//     if (d.getDay() == 5) { //5 is Friday
        
//         pancake.style.display = "block";
//     }
//     else {
//         pancake.style.display = "none";
//     }


const pday = document.querySelector('pday');
if (dayWeek !== 5) {
    pday.style.display = "none";
  } else {
    pday.style.display = "flex";
  }

