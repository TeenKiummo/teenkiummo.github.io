document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const navbar = document.querySelector(".navbar");
  
    menuIcon.addEventListener("click", function () {
      navbar.classList.toggle("show");
    });

    let slideIndex = 0;
    showSlides();
    
    function showSlides() {
      let slides = document.querySelectorAll(".slide");
      slides.forEach(slide => slide.classList.remove("active")); // Rimuovi la classe active da tutte le immagini
      
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
      
      slides[slideIndex - 1].classList.add("active"); // Aggiungi la classe active all'immagine corrente
      setTimeout(showSlides, 3000); // Cambia immagine ogni 3 secondi
    }
    
    function toggleMenu() {
        const navbar = document.querySelector(".navbar");
        navbar.classList.toggle("show");
      }
      

  });
  
