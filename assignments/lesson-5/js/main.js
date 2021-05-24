window.addEventListener('load', ()=> {
    const hambutton = document.querySelector('.ham');
    const mainnav = document.querySelector('#navigation');

    hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);
        // 
    // window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};
});

// if its friday it will hopefull display ananouncement about pancakes in the park oh baby I hope this owrks if not then.... that sucks//
// const pancake = document.querySelector('pancakes');
// if (currentDate.getDay() == 5) {
//     pancake.style.display = 'block';
// }
// else {
//     pancakes.style.display = 'none';
// }

const pancake = document.getElementById('pancakes');
    if (d.getDay() == 5) { //5 is Friday
        
        pancake.style.display = "block";
    }
    else {
        pancake.style.display = "none";
    }


