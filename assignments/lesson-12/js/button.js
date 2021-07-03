// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
//     document.getElementById("smallViewBtoTop").style.display = "block";
//   } else {
//     document.getElementById("smallViewBtoTop").style.display = "none";
//   }
  
// }


// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }

window.addEventListener('load', ()=> {
  const hambutton = document.querySelector('.ham');
  const mainnav = document.querySelector('#navigation');

  hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);
      // 
  // window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};
});