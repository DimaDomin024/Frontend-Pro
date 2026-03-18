let first = prompt("Enter u first string")
let second = prompt("Second")

let remove = function(first,second){
    let result = first;

    for(let i = 0; i < second.length; i++ ){
        let char = second[i];
        result = result.replaceAll(char, '');
    }
    return result;
}
console.log(remove(first,second))