const myButton1 = document.querySelector("#myButton1")
const myButton2 = document.querySelector("#myButton2")
let a = "";  

myButton1.addEventListener("click", (e) => {
     a = prompt("give me a link");
    console.log(a);
    console.log(e.target);
})

myButton2.addEventListener("click", (e) => {
    window.open(a);
})
