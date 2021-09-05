const backToTopBtn = document.querySelector("back-to-top");
window.addEventListener("scroll", () => {
  backToTopBtn.style.opacity = window.scrollY > 500 ? 1 : 0;
});

