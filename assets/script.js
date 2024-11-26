const form = document.querySelector("form");

const name = document.getElementById("name")
const km = document.getElementById("km");
const age = document.getElementById("age");
const button = document.getElementById("btn");

const card = document.querySelector(".carta")

const nameCard = document.getElementById("name-card")
const kmCard = document.getElementById("km-card");
const ageCard = document.getElementById("age-card");
const priceCard = document.getElementById("price-card");
const carrozCard = document.getElementById("carroz-card");
const cpCard = document.getElementById("cp-card");


form.addEventListener("submit", (event) => {
  event.preventDefault();

  card.classList.remove("d-none");
  
  nameCard.innerText = "Benvenuto a bordo, " + name.value.trim() + "!";
  kmCard.innerText = km.value.trim() + "km";
  ageCard.innerText = age.value.trim() + " anni";
  carrozCard.innerText = "Carrozza: " + Math.floor(Math.random() * 20);
  cpCard.innerText = "CP: 0" + Math.floor(Math.random() * 9999);

  
  let price = km.value * 0.21;

  let message = " Intero Web: "+ price.toFixed(2) + "€.";

  if (age.value<18){
    price*=0.8; //20% di sconto
    message += " Sconto Under18: "+ price.toFixed(2) + "€";
  } else if(age.value>=65) {
   price*=0.6; //40% di sconto
   message += " Sconto over65: "+ price.toFixed(2) + "€";
  }

  priceCard.innerText = message;
})

form.addEventListener("reset", () =>{
  card.classList.add("d-none")
})




