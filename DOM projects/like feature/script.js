var like = document.querySelector(".container");
var icon = document.querySelector("i");

like.addEventListener("dblclick",()=>{
    icon.style.opacity = 1;    
    setTimeout(() => {
        icon.style.opacity = 0; 
    },800);
});
