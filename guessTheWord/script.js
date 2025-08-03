//function getRandomInt(min, max) {
//    return Math.floor(Math.random() * (max - min + 1)) + min;
//}
//
//let randomNumber = getRandomInt(1, 3);
//let word = ""
//
//if (randomNumber === 1) {
//    word = "programming"
//}
//if (randomNumber === 2) {
//    word = "furniture"
//}
//if (randomNumber === 3) {
//    word = "kitchen"
//}
//alert(word)

let words = ["programming", "furniture", "kitchen", "apple", "orange", "banana", "pineapple", "cherry"]
function getRandomWord(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}
let word = getRandomWord(words)
alert(word)

document.getElementById("winImg").style.visibility = 'hidden';
document.querySelector(".win").style.visibility = 'hidden';

let attempts = 5;
document.querySelector("span").innerHTML = attempts;
document.querySelector(".word").disabled = true

document.querySelector(".start").onclick = function() {
    letters = [];
    document.querySelector(".word").value = "";
    attempts = 5;
    document.querySelector(".check").disabled = false;
    document.querySelector(".letter").disabled = false;
    document.querySelector("span").innerHTML = attempts;
    document.querySelector(".start").innerHTML = "Start again";
};
let letters = []

document.querySelector(".check").onclick = function() {
    let letter = document.querySelector(".letter").value;
    if (letter.length > 1) {
        alert("please enter 1 letter");
        document.querySelector(".letter").value = "";
        return;
    };
    letters.push(letter);
    let answer = "";
    if (word.indexOf(letter) == -1) {
            attempts -= 1
            document.querySelector("span").innerHTML = attempts;
    }
    if (attempts == 0) {
        document.querySelector(".check").disabled = true;
        document.querySelector(".letter").disabled = true;
    }
    for (let i = 0; i < word.length; i++) {
        let char = word[i]
        if (letters.indexOf(char) != -1) {
            answer += char;
        }

        else {
            answer += "*";
        }
        document.querySelector(".word").value = answer;
        document.querySelector(".letter").value = "";
        document.querySelector(".letter").focus();
        if (word == answer) {
            document.querySelector(".letter").disabled = true
            document.querySelector(".check").disabled = true
            document.getElementById("winImg").style.visibility = 'visible';
            document.querySelector(".win").style.visibility = 'visible';

        }


    };
    console.log(answer)
};