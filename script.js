let number = +prompt("Enter your number:");

if (!number || isNaN(number)) {
  console.log("Невалідне значення");
} else {
  let a = Math.floor(number / 100);
  let b = Math.floor((number % 100) / 10);
  let c = number % 10;

  if (a === b && b === c) {
    console.log("Числа однакові");
  } else if (a === b || a === c || b === c) {
    console.log("Є однакові числа, але не всі");
  } else {
    console.log("Числа всі різні");
  }

}

