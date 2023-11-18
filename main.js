const navMenu=document.getElementById('nav-menu');

const navToggle= document.getElementById('nav-toggle');

const navClose=document.getElementById('nav-close');

if(navToggle){
    navToggle.addEventListener("click",()=>{
        navMenu.classList.add('show-menu');
    });
}

if(navClose){
    navClose.addEventListener("click",()=>{
        navMenu.classList.remove('show-menu');
    });
}

const navLink = document.querySelectorAll(".nav-link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}

//dark mode

const themeButton = document.getElementById('theme-button');

const darkTheme="dark-theme";
const iconTheme="fa-sun";

const selectedTheme=localStorage.getItem('selected-theme');
const selectedIcon =localStorage.getItem('selected-icon');

const getCurrentTheme=()=>{
    document.body.classList.contains(darkTheme)?'dark':'light';
}

const getCurrentIcon=()=>{
    document.body.classList.contains(iconTheme)? 'fa-moon' : 'fa-sun';
}

if(selectedTheme){
    document.body.classList[selectedTheme==='dark' ? 'add' : 'remove'](
        darkTheme
    );

    themeButton.classList[selectedIcon==='fa-moon' ? 'add' : 'remove'](
        iconTheme
    );
}

themeButton.addEventListener("click",()=>{
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
});