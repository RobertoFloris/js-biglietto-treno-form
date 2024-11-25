
const km = document.getElementById("chilometri")

const age = document.getElementById("eta")

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Si percorranno: " + km.value + "Km");
  console.log("Hai: " + age.value + " anni");
  let price = km.value * 0.21;

if (age.value<18){
  price*=0.8; //20% di sconto
  console.log("Sei minorenne per cui ti viene applicato uno sconto del 20%");
} else if(age.value>=65) {
  price*=0.6; //40% di sconto
  console.log("Sei over65 per cui ti viene applicato uno sconto del 40%");
}

console.log("Il prezzo del tuo biglietto è: "+ price.toFixed(2) + "€");  //arrotondamento a 2 numeri decimali per i centesimi
})




