function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  const hamburger = document.querySelector(".hamburger");

  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
}
function showDescription(card) {
  const description = card.querySelector(".--worktitle p");
  description.style.visibility = "visible";
  description.style.opacity = "1";
}

function hideDescription(card) {
  const description = card.querySelector(".--worktitle p");
  description.style.visibility = "hidden";
  description.style.opacity = "0";
}
