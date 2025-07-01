let secretNumber = getRandomInt(1, 100);
let attempts = 10;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;

}

getRandomInt(1, 2);

document.querySelector(".start").disabled = true;


document.querySelector(".check").onclick = function () {
    let userNumber = document.querySelector(".number").value;
    attempts -= 1;
    console.log(attempts);
    document.querySelector(".attempts").innerHTML = attempts;
    if (attempts == 0) {
        document.querySelector(".number").disabled = true;
        document.querySelector(".check").disabled = true;
        document.querySelector(".start").disabled = false;
    }



    if (userNumber == secretNumber) {
        console.log("You guessed the number");
        document.querySelector(".hint").innerHTML = "You guessed the number"

    }
    if (userNumber > secretNumber) {
        console.log("The secret number is less than yours");
        document.querySelector(".hint").innerHTML = "The secret number is less than yours"
    }
    if (userNumber < secretNumber) {
        console.log("The secret number is greater than yours");
        document.querySelector(".hint").innerHTML = "The secret number is greater than yours"
    }
}

document.querySelector(".start").onclick = function() {
    secretNumber = getRandomInt(1, 100);
    document.querySelector(".number").disabled = false;
    document.querySelector(".check").disabled = false;
    document.querySelector(".hint").innerHTML = "Here will be hint";
    document.querySelector(".start").disabled = true;
    attempts = 10
    document.querySelector(".attempts").innerHTML = attempts
}