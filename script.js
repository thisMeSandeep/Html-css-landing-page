const toggle = document.getElementById("toggleBtn");
const navLinks = document.getElementById("nav");
const menuIcon = document.getElementById("menu-icon");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuIcon.classList.toggle("fa-xmark");
});
