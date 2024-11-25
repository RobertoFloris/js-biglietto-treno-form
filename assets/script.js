const form = document.querySelector("form");

const km = document.getElementById("km");
const age = document.getElementById("age");

const kmCard = document.getElementById("km-card");
const ageCard = document.getElementById("age-card");
const priceCard = document.getElementById("price-card");


form.addEventListener("submit", () => {
  kmCard.innerText = km.value.trim() + "km";
  ageCard.innerText = age.value.trim() + " anni";
  let message="";
  
  let price = km.value * 0.21;

  if (age.value<18){
    price*=0.8; //20% di sconto
    message = "Sei minorenne per cui ti viene applicato uno sconto del 20%.";
  } else if(age.value>=65) {
   price*=0.6; //40% di sconto
   message= "Sei over65 per cui ti viene applicato uno sconto del 40%.";
  }

  message += " Il prezzo del tuo biglietto è: "+ price.toFixed(2) + "€";
  priceCard.innerText = message;
})




