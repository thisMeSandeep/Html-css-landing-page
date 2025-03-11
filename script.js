const toggle = document.getElementById("toggleBtn");
const navLinks = document.getElementById("nav");
const menuIcon = document.getElementById("menu-icon");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuIcon.classList.toggle("fa-xmark");
});

//review slider
let swiper = new Swiper(".reviews-container", {
  // Changed from .mySwiper to .reviews-container
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    // Add navigation to make prev/next buttons work
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3, // 3 slides instead of 4 for better layout
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4, // 4 slides instead of 5 for better spacing
      spaceBetween: 40,
    },
  },
});

// header slider
let swiper2 = new Swiper(".swiper-container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  centeredSlides: true,
  initialSlide: 1,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 10,
    initialSlide: 3,
    slideShadows: true,
  },
});
