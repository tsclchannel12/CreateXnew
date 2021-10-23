let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    widthAuto:true,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        1000:{
            items:3
        }


    }
})
