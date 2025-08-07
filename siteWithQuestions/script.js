let count = 0
document.querySelector(".check").disabled = true

document.querySelector(".check").onclick = function() {
    document.querySelector(".check").disabled = true
    let value1 = document.querySelector(".select1").value;
    if (value1 == "num456") {
        count += 1
//        alert("1 correct")
    }
    let value2 = document.querySelector(".select2").value;
    if (value2 == "redLightGreenLight") {
        count += 1
//        alert("2 correct")
    }
    let value3 = document.querySelector(".select3").value;
    if (value3 == "hwangIn-ho") {
        count += 1
//        alert("3 correct")
    }
    let value4 = document.querySelector(".select4").value;
    if (value4 == "brothers") {
        count += 1
//        alert("4 correct")
    }
    let value5 = document.querySelector(".select5").value;
    if (value5 == "sixBillionWon") {
        count += 1
//        alert("5 correct")
    }
    let value6 = document.querySelector(".select6").value;
    if (value6 == "lavaFloor") {
        count += 1
//        alert("6 correct")
    }
    let value7 = document.querySelector(".select7").value;
    if (value7 == "true") {
        count += 1
//        alert("7 correct")
    }
    let value8 = document.querySelector(".select8").value;
    if (value8 == "red") {
        count += 1
//        alert("8 correct")
    }
    let value9 = document.querySelector(".select9").value;
    if (value9 == "vips") {
        count += 1
//        alert("9 correct")
    }
    let value10 = document.querySelector(".select10").value;
    if (value10 == "num320") {
        count += 1
//        alert("10 correct")
    }
    let value11 = document.querySelector(".select11").value;
    if (value11 == "num1Correct") {
        count += 1
//        alert("11 correct")
    }
    let value12 = document.querySelector(".select12").value;
    if (value12 == "green") {
        count += 1
//        alert("12 correct")
    }

    if (count === 1) {
        alert("You have 1 correct")
    }
    if (count === 2) {
        alert("You have 2 correct")
    }
    if (count === 3) {
        alert("You have 3 correct")
    }
    if (count === 4) {
        alert("You have 4 correct")
    }
    if (count === 5) {
        alert("You have 5 correct")
    }
    if (count === 6) {
        alert("You have 6 correct")
    }
    if (count === 7) {
        alert("You have 7 correct")
    }
    if (count === 8) {
        alert("You have 8 correct")
    }
    if (count === 9) {
        alert("You have 9 correct")
    }
    if (count === 10) {
        alert("You have 10 correct")
    }
    if (count === 11) {
        alert("You have 11 correct")
    }
    if (count === 12) {
        alert("You have 12 correct")
    }
}

document.querySelector(".select12").onchange = function () {
    let value12 = document.querySelector(".select12").value;
    if (value12 == "green") {
        document.querySelector(".check").disabled = false
    }
    if (value12 == "purple") {
        document.querySelector(".check").disabled = false
    }
    if (value12 == "blue") {
        document.querySelector(".check").disabled = false
    }
    if (value12 == "iDk") {
        document.querySelector(".check").disabled = false
    }
}