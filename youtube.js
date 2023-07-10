const menuicon = document.querySelector(".menu_icon");
const aside = document.querySelector(".aside");

menuicon.addEventListener("click",function(){
    aside.classList.toggle("small_aside");
})

const container = document.querySelector(".container");

menuicon.addEventListener("click",function(){
    container.classList.toggle("big_container");
})