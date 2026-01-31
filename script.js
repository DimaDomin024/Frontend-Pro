let newNumber = prompt("Enter u naumber with 5 digits");

let d1 = Math.floor(newNumber / 10000)
let d2 = Math.floor(newNumber / 1000) % 10
let d3 = Math.floor(newNumber / 100) % 10
let d4 = Math.floor(newNumber / 10) % 10
let d5 = newNumber % 10 

let result = `${d1} ${d2} ${d3} ${d4} ${d5}`

console.log(result);
