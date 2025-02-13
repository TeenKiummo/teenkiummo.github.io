document.addEventListener("DOMContentLoaded", function () {
    // Aggiungi l'evento di apertura della modale per tutte le immagini
    const galleryImages = document.querySelectorAll(".gallery-item img");
    galleryImages.forEach(img => {
      img.addEventListener("click", function() {
        openModal(img);
      });
    });
  
    // Funzione per aprire la modale e visualizzare l'immagine
    function openModal(imgElement) {
      var modal = document.getElementById("imageModal");
      var modalImg = document.getElementById("modalImage");
  
      modal.style.display = "flex"; // Mostra la modale
      modalImg.src = imgElement.src; // Imposta l'immagine nella modale
    }
  
    // Funzione per chiudere la modale
    function closeModal() {
      var modal = document.getElementById("imageModal");
      modal.style.display = "none"; // Nasconde la modale
    }
  
    // Associa l'evento di chiusura della modale (cliccando sullo sfondo)
    document.querySelector(".modal").addEventListener("click", function(event) {
      if (event.target === document.querySelector(".modal")) {
        closeModal(); // Chiude la modale se si clicca sullo sfondo
      }
    });
  });
  