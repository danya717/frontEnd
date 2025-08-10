let count = 0
document.querySelector(".check").disabled = false

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

    alert("You have " + count + " correct answers")
    document.querySelector(".check").disabled = false
}

