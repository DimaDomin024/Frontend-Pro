// let number = Math.floor(prompt("Enter a number:"));

// let i = 2;

// if (number <= 1) {
//     console.log("Просте");
// } else {
//     while (i < number) {
//         if (number % i === 0) {
//             console.log("складне")
//             break;
//         }
//         i++;
        
//     }
    
// }
// console.log("Просте");
//З'ясувати, чи просто воно (простим називається число, більше 1, що не має інших дільників, крім 1 і себе).

let number = Math.floor(prompt("Enter a number:"));

let config = true ;

for(let i = 2 ; i < number ; i ++){
    if(number % i === 0 ){
        config = false;
        break;
    }
    
}
if (config === true){
        console.log("Просте");
    }else {
        console.log("Складне");
    }

