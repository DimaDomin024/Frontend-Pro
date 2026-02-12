const user =  {
    name: prompt("Enter your name:"),
    age: +prompt("Enter your age:"),
    city: prompt("Enter your city:"),
    Number  : +prompt("Enter your phone number:")
}

for (const key of Object.values(user)){
    console.log(key);
}