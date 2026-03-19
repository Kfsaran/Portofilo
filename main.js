
// let showMenu = (toggleId, navMenu) => {
// let toggle = document.getElementById(toggleId);
// let menu = document.getElementById(navMenu); 

// if (toggle && menu) {
//     toggle.addEventListener('click', () => {
//         menu.classList.toggle("show")
//     })
// }
// }

// showMenu('nav_toggle', 'nav_menu');

let toggle = document.getElementById("nav_toggle");
let menu = document.getElementById("nav_menu"); 

if (toggle && menu) {
    toggle.addEventListener('click', () => {
        menu.classList.toggle("show")
    })
}


// active and remove active

const navLink = document.querySelectorAll(".nav_link");
navLink.forEach(n => n.classList.remove("active"))

function linkAction() {
    navLink.forEach(n => n.classList.remove("active"))
    this.classList.add("active")

    let navMenu = document.getElementById("nav_menu");
    navMenu.classList.remove("show")
}
navLink.forEach(n => n.addEventListener("click", linkAction))