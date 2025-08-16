let count = 0
let wrongCount = 0
document.querySelector(".check").disabled = false

document.querySelector(".check").onclick = function() {
    wrongCount = 0
    count = 0
    document.querySelector(".check").disabled = true
    let value1 = document.querySelector(".select1").value;
    if (value1 == "num456") {
        count += 1
//        alert("1 correct")
    }
    if (value1 !== "num456") {
        wrongCount += 1
    }

    let value2 = document.querySelector(".select2").value;
    if (value2 == "redLightGreenLight") {
        count += 1
//        alert("2 correct")
    }
    if (value2 !== "redLightGreenLight") {
    wrongCount += 1
    }

    let value3 = document.querySelector(".select3").value;
    if (value3 == "hwangIn-ho") {
        count += 1
//        alert("3 correct")
    }
    if (value3 !== "hwangIn-ho") {
    wrongCount += 1
    }
    let value4 = document.querySelector(".select4").value;
    if (value4 == "brothers") {
        count += 1
//        alert("4 correct")
    }
    if (value4 !== "brothers") {
    wrongCount += 1
    }
    let value5 = document.querySelector(".select5").value;
    if (value5 == "sixBillionWon") {
        count += 1
//        alert("5 correct")
    }
    if (value5 !== "sixBillionWon") {
    wrongCount += 1
    }
    let value6 = document.querySelector(".select6").value;
    if (value6 == "lavaFloor") {
        count += 1
//        alert("6 correct")
    }
    if (value6 !== "lavaFloor") {
    wrongCount += 1
    }
    let value7 = document.querySelector(".select7").value;
    if (value7 == "true") {
        count += 1
//        alert("7 correct")
    }
    if (value7 !== "true") {
    wrongCount += 1
    }
    let value8 = document.querySelector(".select8").value;
    if (value8 == "red") {
        count += 1
//        alert("8 correct")
    }
    if (value8 !== "red") {
    wrongCount += 1
    }
    let value9 = document.querySelector(".select9").value;
    if (value9 == "vips") {
        count += 1
//        alert("9 correct")
    }
    if (value9 !== "vips") {
    wrongCount += 1
    }
    let value10 = document.querySelector(".select10").value;
    if (value10 == "num320") {
        count += 1
//        alert("10 correct")
    }
    if (value10 !== "num320") {
    wrongCount += 1
    }
    let value11 = document.querySelector(".select11").value;
    if (value11 == "num1Correct") {
        count += 1
//        alert("11 correct")
    }
    if (value11 !== "num1Correct") {
    wrongCount += 1
    }
    let value12 = document.querySelector(".select12").value;
    if (value12 == "green") {
        count += 1
//        alert("12 correct")
    }
    if (value12 !== "green") {
    wrongCount += 1
    }

    alert("You have " + count + " correct answers")
    document.querySelector(".check").disabled = false
}

document.querySelector(".statistic").onclick = function() {
    alert("You have " + count + " correct answers, and " + wrongCount + " incorrect answers")
}

document.querySelector(".resetStats").onclick = function() {
    alert("Your stats has been reset")
    count = 0
    wrongCount = 0
}

