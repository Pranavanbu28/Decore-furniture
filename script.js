var menu = document.querySelector(".menu");
var close = document.querySelector(".close");
var list = document.querySelector("nav");
menu.addEventListener("click",()=>{
    list.classList.add("swoop");
    
})

close.addEventListener("click", ()=>{
    list.classList.remove("swoop");
})


