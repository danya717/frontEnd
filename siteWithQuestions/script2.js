let count = 0
let wrongCount = 0

document.querySelector(".check").onclick = function() {
    count = 0
    wrongCount = 0
    let value1 = document.querySelector(".select2o1").value;
    if (value1 == "red") {
        count += 1
    }
    if (value1 !== "red") {
        wrongCount += 1
    }
    let value2 = document.querySelector(".select2o2").value
    if (value2 == "149") {
        count += 1
    }
    if (value2 !== "149") {
        wrongCount += 1
    }
    let value3 = document.querySelector(".select2o3").value
    if (value3 == "182") {
        count += 1
    }
    if (value3 !== "182") {
        wrongCount += 1
    }
    let value4 = document.querySelector(".select2o4").value
    if (value4 == "91") {
        count += 1
    }
    if (value4 !== "91") {
        wrongCount += 1
    }
    let value5 = document.querySelector(".select2o5").value
    if (value5 == "9,1") {
        count += 1
    }
    if (value5 !== "9,1") {
        wrongCount += 1
    }
    let value6 = document.querySelector(".select2o6").value
    if (value6 == "continue") {
        count += 1
    }
    if (value6 !== "continue") {
        wrongCount += 1
    }
    let value7 = document.querySelector(".select2o7").value
    if (value7 == "sixLegs") {
        count += 1
    }
    if (value7 !== "sixLegs") {
        wrongCount += 1
    }
    let value8 = document.querySelector(".select2o8").value
    if (value8 == "5plrs") {
        count += 1
    }
    if (value8 !== "5plrs") {
        wrongCount += 1
    }
    let value9 = document.querySelector(".select2o9").value
    if (value9 == "cross") {
        count += 1
    }
    if (value9 !== "cross") {
        wrongCount += 1
    }
    alert("You have " + count + " correct ")
}

document.querySelector(".stats").onclick = function() {
    alert("You have " + count + " answers correct and " + wrongCount + " incorrect ")
}

document.querySelector(".resetStats").onclick = function() {
    count = 0
    wrongCount = 0
    alert("Your stats has been reset")
}