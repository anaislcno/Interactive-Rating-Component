const btn = document.getElementById("btn__submit");
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
