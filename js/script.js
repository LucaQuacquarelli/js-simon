function getRandomNumber(min, max) {
    var randomNumber = Math.floor(Math.random() * (max - min) + min);
    return randomNumber;
}

function isInArray(element, array) {
    //verifico tutti gli elementi dell'array 
    for (var i = 0; i < array.length; i++) {
        // verifico se un elemento è uguale ad un elemento presente nell'array 
        if (element == array[i]) {
            return true;
        }
    }
    return false;
}

// Un alert() espone 5 numeri generati casualmente.
var specialNumber = [];

while (specialNumber.length < 5) {
    
    var genNumbers = getRandomNumber(1, 100);

    if (!isInArray(genNumbers, specialNumber)) {
        specialNumber.push(genNumbers);
    }
    
}
alert("I numeri vincenti sono:" + " " +specialNumber);
// Da li parte un timer di 30 secondi.
var count = 30;

 var countdown = setInterval(function (){
     document.getElementById("countdown"). innerHTML = "<p>" + count + "</p>";
     if (count == 0) {
         clearInterval(countdown)
         for (var i = 0; i < 5; i++) {
            var userNumbers = parseInt(prompt("Inserisci i tuoi numeri"));
            var check = isInArray(userNumbers, specialNumber);
            if (check == true) {
                guessedNumbers.push(userNumbers);
            } else {
                wrongNumbers.push(userNumbers);
            }
        }
        alert("Hai indovinato" + " " + guessedNumbers.length + " " + "numeri:" + " " + guessedNumbers + "\n" + "Hai sbagliato" + " " + wrongNumbers.length + " " + "numeri:" + " " + wrongNumbers + "\n" + "I numeri vincenti erano:" + " " +specialNumber);
        console.log(wrongNumbers);
     }
     count--;
 }, 1000)
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
var guessedNumbers = [];
var wrongNumbers = [];

// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
