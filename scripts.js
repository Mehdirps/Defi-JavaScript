let nombre = 0;
let body = document.querySelector("body");

for (let compteur = 1; compteur <= 200; compteur++) {

    let nombre200 = nombre + compteur;
    let affichage = document.createElement("p")
    body.appendChild(affichage)
    
    let multiple3 = nombre200 % 3;
    let multiple5 = nombre200 % 5;
    let multiple15 = nombre200 % 15;
    
    if (multiple3 === 0) {
        
        nombre200 = "fizz";
        affichage.style.color = "red"

    }
    if(multiple5 === 0){
        
        nombre200 = "Buzz";
        affichage.style.color = "green"
    }
    if(multiple15 === 0){
        
        nombre200 = "FizzBuzz";
        affichage.style.color = "blue"
    }
    affichage.textContent = nombre200;
}