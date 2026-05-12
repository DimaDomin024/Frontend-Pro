const myButton = document.querySelector("#myButton")
const myText = document.querySelector("#myText")



function changeColor(){
    myText.classList.toggle("active");
}


myButton.addEventListener("click",changeColor);
