document.querySelector(".add").onclick = function (){
    let num1 = document.querySelector(".number1").value
    let num2 = document.querySelector(".number2").value
    alert(parseInt(num1) + parseInt(num2))
}

document.querySelector(".substract").onclick = function (){
    let num1 = document.querySelector(".number1").value
    let num2 = document.querySelector(".number2").value
    alert(parseInt(num1) - parseInt(num2))
}

document.querySelector(".multiply").onclick = function (){
    let num1 = document.querySelector(".number1").value
    let num2 = document.querySelector(".number2").value
    alert(parseInt(num1) * parseInt(num2))
}

document.querySelector(".divide").onclick = function (){
    let num1 = document.querySelector(".number1").value
    let num2 = document.querySelector(".number2").value

    if (num2 == 0) {
        alert("Error: Zero division is impossible!")
    }
    else {
        alert(parseInt(num1) / parseInt(num2))
    }

}

document.querySelector(".square").onclick = function () {
    let num1 = document.querySelector(".number1").value
    let num2 = document.querySelector(".number2").value
    alert(parseInt(num1) ** parseInt(num2))
}

document.querySelector(".square2").onclick = function () {
    let num1 = document.querySelector(".number1").value
    alert(parseInt(num1) ** 2)
}