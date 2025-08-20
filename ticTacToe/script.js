let secTurn = 0;
let turn = 1;
let char = "X";
let area = [
        ["*", "*", "*"],
        ["*", "*", "*"],
        ["*", "*", "*"]
        ];

function checkWinner() {
    if (area[0][0] == "X" && area[0][1] == "X" && area[0][2] == "X") {
        return "X";
    }

    if (area[1][0] == "X" && area[1][1] == "X" && area[1][2] == "X") {
        return "X";
    }

    if (area[2][0] == "X" && area[2][1] == "X" && area[2][2] == "X") {
        return "X";
    }

    if (area[0][0] == "X" && area[1][0] == "X" && area[2][0] == "X") {
        return "X";
    }

    if (area[0][1] == "X" && area[1][1] == "X" && area[2][1] == "X") {
        return "X";
    }

    if (area[0][2] == "X" && area[1][2] == "X" && area[2][2] == "X") {
        return "X";
    }

    if (area[0][0] == "X" && area[1][1] == "X" && area[2][2] == "X") {
        return "X";
    }

    if (area[0][2] == "X" && area[1][1] == "X" && area[2][0] == "X") {
        return "X";
    }

    if (area[0][0] == "0" && area[0][1] == "0" && area[0][2] == "0") {
        return "0";
    }

    if (area[1][0] == "0" && area[1][1] == "0" && area[1][2] == "0") {
        return "0";
    }

    if (area[2][0] == "0" && area[2][1] == "0" && area[2][2] == "0") {
        return "0";
    }

    if (area[0][0] == "0" && area[1][0] == "0" && area[2][0] == "0") {
        return "0";
    }

    if (area[0][1] == "0" && area[1][1] == "0" && area[2][1] == "0") {
        return "0";
    }

    if (area[0][2] == "0" && area[1][2] == "0" && area[2][2] == "0") {
        return "0";
    }

    if (area[0][0] == "0" && area[1][1] == "0" && area[2][2] == "0") {
        return "0";
    }

    if (area[0][2] == "0" && area[1][1] == "0" && area[2][0] == "0") {
        return "0";
    }
    return false;

};

function newGame() {
    let rows = document.querySelectorAll("tr");
    for (let i = 0; i < row.length; i++) {
        let row = rows[i]
        let cells = row.querySelectorAll("td");
        for (let j = 0; j < cells.length; j++) {

        }
    }
}

document.querySelector("button").onclick = function() {
    let row = document.querySelector(".row").value;
    let column = document.querySelector(".column").value;
    let rows = document.querySelectorAll("tr");
    let cells = rows[row].querySelectorAll("td");
    let cell = cells[column];
    cell.innerHTML = char;
    area[row][column] = char;
    console.log(checkWinner())
    document.querySelector(".xFirst").disabled = true;
    document.querySelector(".oFirst").disabled = true;
    document.querySelector(".row").value = "";
    document.querySelector(".column").value = "";
    turn += 1;
    secTurn += 1;

    if (checkWinner()) {
        document.querySelector(".markTheCell").disabled = true
    }
//    console.log(secTurn)

    if (secTurn == 9) {
        if (checkWinner() !== "X") {
            if (checkWinner() !== "0") {
                alert("draw")
                document.querySelector(".markTheCell").disabled = true
            }
        }
    }

    if (char == "X") {
        cell.style.backgroundColor = "gray";
        cell.style.color = "white";
    }
    else if (char == "0") {
        cell.style.backgroundColor = "brown";
        cell.style.color = "white";
    }

    if (turn % 2 == 0) {
        char = "0";
    }
    else {
        char = "X";
    }
    document.querySelector("span").innerHTML = char;
    if (checkWinner() === "X") {
        alert("X has won")
    }
    if (checkWinner() === "0") {
        alert("0 has won")
    }
}

document.querySelector(".xFirst").onclick = function() {
    char = "X"
    document.querySelector("span").innerHTML = char;
}

document.querySelector(".oFirst").onclick = function() {
    char = "0"
    document.querySelector("span").innerHTML = char;
}

