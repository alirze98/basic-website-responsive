const header = document.querySelector(".header");
const logoLight = document.querySelector('.header__logo--light');
const logoDark = document.querySelector('.header__logo--dark');
const headerHeight = document.querySelector('.header').offsetHeight;
const heroSection = document.querySelector('.section-hero');
console.log(headerHeight);
// Sticky header
window.addEventListener('scroll',()=>{
    header.classList.toggle("sticky", window.scrollY > 0);
    if(header.className === 'header'){
      logoDark.classList.add('hidden');
      logoLight.classList.remove("hidden");
    }else if (header.className === "header sticky"){
      logoDark.classList.remove('hidden');
      logoLight.classList.add('hidden');
    }

})

let pageLoad = performance.getEntriesByType("navigation")[0];
if (pageLoad.type === "reload" || pageLoad.type === "navigate") {
  logoDark.classList.add("hidden");
}

// Mobile navigation
const mobileBtn = document.querySelector('.btn-mobile-nav');
mobileBtn.addEventListener("click",function(){
  header.classList.toggle('nav-open')
})

// const effects = window.innerWidth <= 400 ? 'cards' : 'slide'    

// Swiper init
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  effect: 'cards',

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
