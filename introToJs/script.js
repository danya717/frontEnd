// console.log('2' + '4')
// console.log(typeof(2))
// console.log(typeof('2'))

let name = "danya"
console.log("Hello " + name)

let age = 14
console.log("You are " + age + " years old")

// alert('Hello ' + name)

document.querySelector("button").onclick = function (){
    alert('Hello ' + name)
}

document.querySelector(".bye").onclick = function (){
    alert("bye " + name)
}