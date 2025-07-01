let word = "programming";
let answer = ""


document.querySelector(".start").onclick = function() {
    for (let i = 0; i < word.length; i++) {
        console.log(word[i]);
    }
};

document.querySelector(".check").onclick = function() {
    let letter = document.querySelector(".letter").value;
    for (let i = 0; i < word.length; i++) {
        if (word[i] == letter) {
            answer += word[i];
        }
        else {
            answer += "*";
        }
    };
    console.log(answer)
};