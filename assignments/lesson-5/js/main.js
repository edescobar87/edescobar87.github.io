window.addEventListener('load', ()=> {
    const hambutton = document.querySelector('.ham');
    const mainnav = document.querySelector('#navigation');

    hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);
        // 
    // window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};
});

// if its friday it will hopefull display ananouncement about pancakes in the park//
const pancakes = document.querySelector('#pancakes');
if (currentDate.getDay() == 5) {
    pancakes.style.display = 'block';
}
else {
    pancakes.style.display = 'none';
}


