
const number = [];
while (true) {
    const input = prompt("Enter a number (or type 'stop' to finish):");
    if (input === null || input === "stop" || input === "") {
        break;
    }
    else {
        if (input % 2 === 0) {
            number.push(input);
        
        }
    }   
}
console.log(number);

