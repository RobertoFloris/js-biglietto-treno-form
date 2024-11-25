const form = document.querySelector("form");

const name = document.getElementById("name")
const km = document.getElementById("km");
const age = document.getElementById("age");
const button = document.getElementById("btn");

const card = document.querySelector(".card")

const nameCard = document.getElementById("name-card")
const kmCard = document.getElementById("km-card");
const ageCard = document.getElementById("age-card");
const priceCard = document.getElementById("price-card");


form.addEventListener("submit", () => {
  card.classList.toggle("none");

  if(!(card.classList.contains("none"))){
    button.innerText = "Annulla";
  } else {
    button.innerText = "Genera";
    name.value = "";
    km.value = "";
    age.value = "";
  }
  
  nameCard.innerText = "Benvenuto a bordo, " + name.value.trim() + "!";
  kmCard.innerText = km.value.trim() + "km";
  ageCard.innerText = age.value.trim() + " anni";
  
  let price = km.value * 0.21;

  let message = " Il prezzo del tuo biglietto è: "+ price.toFixed(2) + "€.";

  if (age.value<18){
    price*=0.8; //20% di sconto
    message += " Sei minorenne per cui ti viene applicato uno sconto del 20%. Il prezzo aggiornato è: "+ price.toFixed(2) + "€";
  } else if(age.value>=65) {
   price*=0.6; //40% di sconto
   message += " Sei over65 per cui ti viene applicato uno sconto del 40%. Il prezzo aggiornato è: "+ price.toFixed(2) + "€";
  }

  priceCard.innerText = message;
})




