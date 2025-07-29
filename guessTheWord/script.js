let secretWord = getRandomInt(1, 3);

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    if (secretWord === 1) {
        let secretWord = programming
    }
    if (secretWord === 2) {
        let secretWord = furniture
    }
    if (secretWord === 3) {
        let secretWord = kitchen
    }
}

let word = "programming";
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
        }
//        if (letter >= 2) {
//            alert("please enter only 1 letter");
//            console.log("hi")
//        };
    };
    console.log(answer)
};