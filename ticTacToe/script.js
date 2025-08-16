let turn = 1;
let char = "";

document.querySelector("button").onclick = function() {
    let row = document.querySelector(".row").value;
    let column = document.querySelector(".column").value;
    let rows = document.querySelectorAll("tr");
    let cells = rows[row].querySelectorAll("td");
    let cell = cells[column]
    turn += 1;
    console.log(turn)

    if (turn % 2 == 0) {
        cell.innerHTML = "0"
        char = "0"
    }
    else {
        cell.innerHTML = "X"
        char = "X"
    }
}