document.addEventListener("DOMContentLoaded", function () {
  const banner = document.getElementById("cookie-banner");
  const acceptButton = document.getElementById("accept-cookies");
  const declineButton = document.getElementById("decline-cookies");

  const consent = localStorage.getItem("cookieConsent");

  if (!consent) {
    banner.style.display = "block";
  } else if (consent === "accepted") {
    loadGoogleAnalytics();
  }

  acceptButton.addEventListener("click", function () {
    localStorage.setItem("cookieConsent", "accepted");
    banner.style.display = "none";
    loadGoogleAnalytics();
  });

  declineButton.addEventListener("click", function () {
    localStorage.setItem("cookieConsent", "declined");
    banner.style.display = "none";
  });

  function loadGoogleAnalytics() {
    const gaScript = document.createElement("script");
    gaScript.src = "https://www.googletagmanager.com/gtag/js?id=G-EFD8KL9K2G";
    gaScript.async = true;
    document.head.appendChild(gaScript);

    gaScript.onload = function () {
      window.dataLayer = window.dataLayer || [];
      function gtag() { dataLayer.push(arguments); }
      gtag('js', new Date());
      gtag('config', 'G-EFD8KL9K2G', { 'anonymize_ip': true });
    };
  }
});
