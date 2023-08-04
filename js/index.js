const hamburger = document.querySelector(".hamburger");
const navLinks = document.getElementById("navLinks");
const toggleMenu = () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
};
const showDescription = (card) => {
  const description = card.querySelector(".--worktitle p");
  description.style.visibility = "visible";
  description.style.opacity = "1";
};

const hideDescription = (card) => {
  const description = card.querySelector(".--worktitle p");
  description.style.visibility = "hidden";
  description.style.opacity = "0";
};

hamburger.addEventListener("click", toggleMenu);
