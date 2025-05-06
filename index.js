document.getElementById("btn-location").addEventListener("click", () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
  
          fetch('/save-location', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ latitude, longitude })
          })
          .then(response => {
            if (response.ok) {
              alert("Géolocalisation activée !");
              document.getElementById("start-exam").style.display = "inline-block";
            } else {
              alert("Erreur lors de l'enregistrement de la position.");
            }
          });
        },
        error => {
          alert("Erreur de géolocalisation : " + error.message);
        }
      );
    } else {
      alert("Géolocalisation non supportée par ce navigateur.");
    }
  });