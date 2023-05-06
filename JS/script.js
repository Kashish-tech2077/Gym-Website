console.info("Hi! I am JavaScript")
// Responsive Logic

let burger = document.querySelector(".burger");
let navbar = document.querySelector(".navbar");
let navul = document.querySelector(".nav-ul");
let rightnav = document.querySelector(".right-nav");


burger.addEventListener('click',()=>{
    navbar.classList.toggle('h-nav-resp')
    navul.classList.toggle('v-class-resp')
    rightnav.classList.toggle('v-class-resp')
})

// console.log(burger);
// console.log(header_resp);
// console.log(visible_resp);