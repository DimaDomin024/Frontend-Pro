


let array = ["sdsd",2,22,"232dsd",NaN,true];

function check(array){
    let numbers = array.filter(function(item) {
        return typeof item === 'number' && !isNaN(item)
    });
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}
console.log(check(array));