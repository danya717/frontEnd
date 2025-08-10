let min = 1;
let max = 9;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkAnswer(correctAnswer, userAnswer) {
    if (correctAnswer == userAnswer) {
        alert("You are right!");
    }
    else {
        alert("Oh no! " + userAnswer + " is not correct. Right answer is " + correctAnswer);
    }
}

document.querySelector(".add").onclick = function() {
    let numA = getRandomInt(min, max);
    let numB = getRandomInt(min, max);
    let correctAnswer = numA + numB;
    let userAnswer = prompt(numA + " + " + numB + " = ", "");
    console.log(correctAnswer, userAnswer);
    checkAnswer(correctAnswer, userAnswer);
}

document.querySelector(".subtract").onclick = function() {
    let numA = getRandomInt(min, max);
    let numB = getRandomInt(min, max);
    let correctAnswer = numA - numB;
    let userAnswer = prompt(numA + " - " + numB + " = ", "");
    checkAnswer(correctAnswer, userAnswer);

}

document.querySelector(".multiply").onclick = function() {
    let numA = getRandomInt(min, max);
    let numB = getRandomInt(min, max);
    let correctAnswer = numA * numB;
    let userAnswer = prompt(numA + " * " + numB + " = ", "");
    checkAnswer(correctAnswer, userAnswer);
}

document.querySelector(".divide").onclick = function() {
    let numA = getRandomInt(min, max);
    let numB = getRandomInt(min, max);
    let correctAnswer = numA / numB;
    correctAnswer = Math.round(correctAnswer)
    alert("Please round your number to integer")
    let userAnswer = prompt(numA + " / " + numB + " = ", "");
    checkAnswer(correctAnswer, userAnswer);
}

document.querySelector("select").onchange = function() {
    let value = document.querySelector("select").value;
    if (value == "easy") {
        min = 1;
        max = 9;
    }
    else if (value == "medium") {
        min = 10;
        max = 99;
    }
    else if (value == "hard") {
        min = 100;
        max = 999;
    }
}