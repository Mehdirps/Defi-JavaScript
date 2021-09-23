let body = document.querySelector("body");

for (let compteur = 1; compteur <= 200; compteur++){ 

    let affichage = document.createElement("p");
    body.appendChild(affichage);
    affichage.textContent = compteur;

    if (compteur % 3 === 0) {  
        affichage.textContent = "fizz";
        affichage.style.color = "red";
    }
    if(compteur % 5 === 0){
        
        affichage.textContent = "Buzz";
        affichage.style.color = "green";
    }
    if(compteur % 15 === 0){
        
        affichage.textContent = "FizzBuzz";
        affichage.style.color = "blue";
    }
}