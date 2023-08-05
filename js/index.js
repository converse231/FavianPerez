const hamburger = document.querySelector(".hamburger");
const navLinks = document.getElementById("navLinks");
const toggleMenu = () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
};

document.addEventListener("DOMContentLoaded", () => {
  const workoutCards = document.querySelectorAll(".--workoutcards");

  const removeClickedClass = () => {
    workoutCards.forEach((card) => card.classList.remove("clicked"));
  };

  document.addEventListener("click", (event) => {
    const clickedCard = event.target.closest(".--workoutcards");
    if (!clickedCard) {
      removeClickedClass();
    } else {
      workoutCards.forEach((card) => {
        if (card === clickedCard) {
          card.classList.toggle("clicked");
        } else {
          card.classList.remove("clicked");
        }
      });
    }
  });
});

hamburger.addEventListener("click", toggleMenu);
