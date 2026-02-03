let number = +prompt("Enter a number:");
for (let i = 1 ; i <= 100 ; i ++){
    if (i * i < number){
        console.log(i);
    }
}