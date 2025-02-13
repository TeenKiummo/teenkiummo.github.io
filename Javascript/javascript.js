document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const navbar = document.querySelector(".navbar");
  let slideIndex = 1;  // Imposta l'indice iniziale a 1
  let slideTimer;

  menuIcon.addEventListener("click", function () {
    navbar.classList.toggle("show");
  });

  // Avvia lo slideshow inizialmente
  showSlide();
  startSlideshow(); // Avvia lo slideshow inizialmente

  // Funzione per avviare lo slideshow
  function startSlideshow() {
    slideTimer = setTimeout(function () {
      manualChangeSlide(1); // Cambia immagine automaticamente
    }, 3000); // Avvia il prossimo cambio immagine dopo 3 secondi
  }

  // Funzione per mostrare la slide corrente
  function showSlide() {
    let slides = document.querySelectorAll(".slide");
    slides.forEach(slide => slide.classList.remove("active")); // Rimuove la classe active da tutte le immagini
    if (slideIndex > slides.length) {
      slideIndex = 1; // Resetta l'indice se arriva alla fine delle immagini
    }
    slides[slideIndex - 1].classList.add("active"); // Aggiunge la classe active all'immagine corrente
  }

  // Funzione per cambiare immagine manualmente
  function manualChangeSlide(n) {
    clearTimeout(slideTimer); // Ferma il timer corrente
    let slides = document.querySelectorAll(".slide");
    slides.forEach(slide => slide.classList.remove("active"));
    
    slideIndex += n;

    // Gestisci il ciclo delle immagini
    if (slideIndex > slides.length) slideIndex = 1;
    if (slideIndex < 1) slideIndex = slides.length; // Gestisce il caso in cui slideIndex scende sotto 1

    slides[slideIndex - 1].classList.add("active");
    startSlideshow(); // Riavvia il timer
  }
  document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const navbar = document.querySelector(".navbar");
  
    menuIcon.addEventListener("click", function () {
      navbar.classList.toggle("show");
    });
  });
  
  // Associa le frecce ai controlli manuali
  document.querySelector(".prev").addEventListener("click", () => manualChangeSlide(-1));
  document.querySelector(".next").addEventListener("click", () => manualChangeSlide(1));

});
