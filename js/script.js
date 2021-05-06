function getRandomNumber(min, max) {
    var randomNumber = Math.floor(Math.random() * (max - min) + min);
    return randomNumber;
}

// Un alert() espone 5 numeri generati casualmente.
var specialNumber = [];

for (var i= 0; i < 5; i++) {
    var genNumbers = getRandomNumber(1, 100);
    specialNumber.push(genNumbers);
}
alert("I numeri vincenti sono:" + " " +specialNumber);
// Da li parte un timer di 30 secondi.
var count = 30;

var countdown = setInterval(function (){
    document.getElementById("countdown"). innerHTML = "<p>" + count + "</p>";
    if (count == 0) {
        clearInterval(countdown)
    }
    count--;
}, 1000)
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.