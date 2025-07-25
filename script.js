const btn = document.getElementById("menu-btn");
const menu = document.getElementById("mobile-menu");
const icon = document.getElementById("menu-icon");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  // Swap icon between bars and X
  if (icon.classList.contains("fa-bars")) {
    icon.classList.replace("fa-bars", "fa-times");
  } else {
    icon.classList.replace("fa-times", "fa-bars");
  }
});

// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 1000, // Animation duration (1s)
  easing: "ease-in-out", // Smooth easing
  once: false, // Animate everytime
  mirror: true,
});
