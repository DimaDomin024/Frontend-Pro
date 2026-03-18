function outer(result){
    let x = result;
    
    function first(amount){
        x += amount;
        console.log("first = ", x );
    }
    return first;
}

let finish = outer(0)

finish(4);
finish(6);
finish(10);
finish(7);