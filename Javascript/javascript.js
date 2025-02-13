document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const navbar = document.querySelector(".navbar");
    let slideIndex = 0;
    let slideTimer;
  
    menuIcon.addEventListener("click", function () {
      navbar.classList.toggle("show");
    });
  
    startSlideshow(); // Avvia lo slideshow
  
    // Avvia o riavvia lo slideshow
    function startSlideshow() {
      showSlide(); // Mostra la slide corrente
      slideTimer = setTimeout(startSlideshow, 3000); // Avvia il prossimo cambio immagine dopo 3 secondi
    }
  
    // Funzione per mostrare la slide corrente
    function showSlide() {
      let slides = document.querySelectorAll(".slide");
      slides.forEach(slide => slide.classList.remove("active")); // Rimuove la classe active da tutte le immagini
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
      slides[slideIndex - 1].classList.add("active"); // Aggiunge la classe active all'immagine corrente
    }
  
    // Funzione per cambiare immagine manualmente
    function manualChangeSlide(n) {
      clearTimeout(slideTimer); // Ferma il timer corrente
      let slides = document.querySelectorAll(".slide");
      slides.forEach(slide => slide.classList.remove("active"));
      slideIndex += n;
      if (slideIndex > slides.length) slideIndex = 1;
      if (slideIndex < 1) slideIndex = slides.length;
      slides[slideIndex - 1].classList.add("active");
      startSlideshow(); // Riavvia il timer
    }
  
    // Associa le frecce ai controlli manuali
    document.querySelector(".prev").addEventListener("click", () => manualChangeSlide(-1));
    document.querySelector(".next").addEventListener("click", () => manualChangeSlide(1));
  });
  