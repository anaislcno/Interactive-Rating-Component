const btn = document.getElementById("btn__submit");
const clear = document.getElementById("btn__again");
const main = document.getElementById("rating--state");
const thanks = document.getElementById("thanks--state");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn");

btn.addEventListener("click", () => {
  // Si aucune note n'est sélectionné
  let ratingSelected = false;
  rates.forEach((rate) => {
    if (rate.classList.contains("selected")) {
      ratingSelected = true;
      return;
    }
  });
  // Alerte pour prévenir si aucune note n'a été sélectionnée
  if (!ratingSelected) {
    alert("You need to select a rate before submitting");
    return;
  }
  // Changement de container si une sélection a été faite
  thanks.style.display = "flex";
  main.style.display = "none";
});

clear.addEventListener("click", () => {
  thanks.style.display = "none";
  main.style.display = "flex";
  // Réinitialiser la notation
  rates.forEach((btn) => {
    btn.classList.remove("selected");
  });
  rating.innerHTML = "";
});

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    // Ajout d'une classe si une noté à été sélectionnée
    rates.forEach((btn) => {
      btn.classList.remove("selected");
    });
    rate.classList.add("selected");
    // Update de la note
    rating.innerHTML = rate.innerHTML;
  });
});
