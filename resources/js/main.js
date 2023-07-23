/*=================CHANGE BACKGROUND HEADER=====================*/
function scrollHeader(){
    const header = document.querySelector("#header");
//when the scroll is greater than 50 viewport height , add the scroll-header class to the header tag
    if(this.scrollY >= 50){
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
}
window.addEventListener("scroll", scrollHeader);

/*=================SERVICES MODAL SETION=====================*/
const modalViews = document.querySelectorAll(".services__modal");
const modalBtns = document.querySelectorAll(".services__button");
const modalClose = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick){
    modalViews[modalClick].classList.add("active-modal");
}
modalBtns.forEach((mb, i) => {
    mb.addEventListener("click", function(){
        modal(i);
    });
});
modalClose.forEach((mc) => {
    mc.addEventListener("click", function(){
        modalViews.forEach((mv)=> {
            mv.classList.remove("active-modal");
        })
    });
});

/*=================MIXITUP FILTER PORTFOLIO=====================*/
let mixerPortfolio = mixitup(".work__container", {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});
/*---LINK ACTIVE WORK--- */
const linkWorkItem = document.querySelectorAll(".work__item");

function activeWork(){
    linkWorkItem.forEach((link) => {
        link.classList.remove("active-work");
    });
    this.classList.add("active-work");
}
linkWorkItem.forEach(link => link.addEventListener("click", activeWork));


/*=================SWIPER JS SPACE BETWEEN TESTIMONIAL SECTION=====================*/
let swiperTestimonail = new Swiper(".testimonial__container", {
    spaceBetween: 16,
    loop: true,
    grabCursor: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
/*---responsive breakpoint--- */
    breakpoints: {
        576: {
        slidesPerView: 2,
        },
        768: {
        slidesPerView: 2,
        spaceBetween: 48,
        },
        992: {
            slidesPerView: 3,
        }
    },
});

/*=================SCROLL SECTIONS ACTIVE LINK=====================*/
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY = window.pageYOffset
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive);


/*=================LIGHT DARK THEME=====================*/
const themeButton = document.getElementById('theme-button');
const lightTheme = 'light-theme';
const iconTheme = 'fa-sun';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the light-theme class
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'far fa-moon' : 'fa-solid fa-sun';

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme);
  themeButton.classList[selectedIcon === 'far fa-moon' ? 'add' : 'remove'](iconTheme);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the light / icon theme
    document.body.classList.toggle(lightTheme);
    themeButton.classList.toggle(iconTheme);
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});

/*=================SCROLL REVEAL ANIMATION=====================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true,
});
sr.reveal('.home__data, .footer__title');
sr.reveal('.home__handle', {delay: 700});
sr.reveal('.home__social, .home__scroll, .skills__content, .work__card , .footer__copy', {delay: 900, origin: 'bottom'});
sr.reveal('.section__title, .section__subtitle,.about__img, .about__info, .btn , .about__description');
sr.reveal(".work__item, .contact__card, .footer__item", {origin: 'left', delay : 100, duration : 1000})
sr.reveal(" .footer__social-link", {origin: 'right'})