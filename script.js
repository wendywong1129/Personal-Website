let formBtn = document.querySelector('#info-btn');
let messageForm = document.querySelector('.form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let typed = new Typed(".typing-text", {
    strings: [
        "Lance Lin",
        "A Senior Accountant",
        "A Web Designer",
        "A Senior Accountant",
    ],
    loop: true,
    typeSpeed: 150,
  });

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    messageForm.classList.remove('active');
}

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

formBtn.addEventListener('click', () =>{
    messageForm.classList.add('active');
});

formClose.addEventListener('click', () =>{
    messageForm.classList.remove('active');
});