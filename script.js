let company = {
    
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600}],
    
    development: {

        web: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800}],

        internals: [{name: 'Jack', salary: 1300}]
    }
};


function sumSalary(obj){
    if (Array.isArray(obj)) {
    let sum = 0;
    for (let i = 0; i < obj.length; i++) {
      sum += obj[i].salary ;
    }
    return sum;
    }    
    let sum = 0;
    for(let key in obj) {
        sum += sumSalary(obj[key]);
    }

    return sum;

}

console.log(
    sumSalary(company)
);