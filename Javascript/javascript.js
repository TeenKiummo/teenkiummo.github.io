document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const navbar = document.querySelector(".navbar");
    let slideIndex = 1;  // Imposta l'indice iniziale a 1
    let slideTimer;
  
    menuIcon.addEventListener("click", function () {
      navbar.classList.toggle("show");
    });
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
        slideIndex = 0;
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
  
    // Associa le frecce ai controlli manuali
    document.querySelector(".prev").addEventListener("click", () => manualChangeSlide(-1));
    document.querySelector(".next").addEventListener("click", () => manualChangeSlide(1));

    // Funzione per aprire la modale e visualizzare l'immagine
function openModal(imgElement) {
  var modal = document.getElementById("imageModal");
  var modalImg = document.getElementById("modalImage");
  var captionText = document.getElementById("caption");

  modal.style.display = "flex"; // Mostra la modale
  modalImg.src = imgElement.src; // Imposta l'immagine nella modale
  captionText.innerHTML = imgElement.alt; // Imposta la didascalia (opzionale)
}

// Funzione per chiudere la modale
function closeModal() {
  var modal = document.getElementById("imageModal");
  modal.style.display = "none"; // Nasconde la modale
}

  });
  