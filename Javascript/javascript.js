document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const navbar = document.querySelector(".navbar");
  let slideIndex = 1;
  let slideTimer;

  menuIcon.addEventListener("click", function (event) {
    event.stopPropagation(); // Evita che il clic sull'icona chiuda immediatamente il menu
    navbar.classList.toggle("show");
  });

  // Chiude la navbar se clicchi fuori
  document.addEventListener("click", function (event) {
    if (!navbar.contains(event.target) && !menuIcon.contains(event.target)) {
      navbar.classList.remove("show");
    }
  });

  // Slideshow iniziale
  showSlide();
  startSlideshow();

  function startSlideshow() {
    slideTimer = setTimeout(function () {
      manualChangeSlide(1);
    }, 3000);
  }

  function showSlide() {
    let slides = document.querySelectorAll(".slide");
    slides.forEach(slide => slide.classList.remove("active"));
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].classList.add("active");
  }

  function manualChangeSlide(n) {
    clearTimeout(slideTimer);
    let slides = document.querySelectorAll(".slide");
    slides.forEach(slide => slide.classList.remove("active"));

    slideIndex += n;

    if (slideIndex > slides.length) slideIndex = 1;
    if (slideIndex < 1) slideIndex = slides.length;

    slides[slideIndex - 1].classList.add("active");
    startSlideshow();
  }

  // Controlli manuali per le slide
  document.querySelector(".prev").addEventListener("click", () => manualChangeSlide(-1));
  document.querySelector(".next").addEventListener("click", () => manualChangeSlide(1));
});
