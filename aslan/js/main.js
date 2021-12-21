const 
    hamburgerButton = document.querySelector('.hamburger'),
    menuMobile = document.querySelector('.menu-mobile');

hamburgerButton.addEventListener('click', ()=>{
    hamburgerButton.classList.toggle('is-active');
    menuMobile.classList.toggle('active');
})


