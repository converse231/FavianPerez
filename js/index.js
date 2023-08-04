const hamburger = document.querySelector(".hamburger");
const navLinks = document.getElementById("navLinks");
const toggleMenu = () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
};

hamburger.addEventListener("click", toggleMenu);
