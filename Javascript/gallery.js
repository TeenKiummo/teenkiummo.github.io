document.addEventListener("DOMContentLoaded", function () {
  const galleryImages = document.querySelectorAll(".gallery-item img");

  // Verifica se l'utente è su dispositivo mobile
  const isMobile = window.innerWidth <= 768;

  if (!isMobile) {
    // Aggiungi evento di apertura della modale solo se non sei su mobile
    galleryImages.forEach(img => {
      img.addEventListener("click", function() {
        openModal(img);
      });
    });
  }

  // Funzione per aprire la modale
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

  const closeButton = document.querySelector(".modal .close");
  if (closeButton) {
    closeButton.addEventListener("click", closeModal);
  }
});
