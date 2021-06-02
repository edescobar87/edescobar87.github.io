window.addEventListener('load',(event)=>{
    lazyLoad();
});
function lazyLoad(){
    const images = document.querySelectorAll("[data-src]");
    for (const image of images){
        image.src = image.getAttribute("data-src");
    }
}