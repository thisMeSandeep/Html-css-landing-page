const toggle = document.getElementById("toggleBtn");
const navLinks = document.getElementById("nav");
const menuIcon = document.getElementById("menu-icon");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuIcon.classList.toggle("fa-xmark");
});

//review slider
let swiper = new Swiper(".reviews-container", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
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

// accordian js
document.querySelectorAll(".feature-item").forEach((item) => {
  item.addEventListener("click", () => {
    const answer = item.querySelector(".accor-ans");
    const isActive = item.classList.contains("active");
    document.querySelectorAll(".feature-item").forEach((el) => {
      el.classList.remove("active");
      el.querySelector(".accor-ans").style.display = "none";
    });
    if (!isActive) {
      item.classList.add("active");
      answer.style.display = "block";
    }
  });
});
