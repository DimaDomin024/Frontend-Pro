// Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.

// Наприклад:

const array = [1, 3, 4, 6, 2, 5, 7];

function removeElement(array, item){
    if (item > 0 && item < array.length){
        array.splice(item , 1)
    }
}


removeElement(array,1);

console.log(array); // Результат: [1, 3, 6, 2, 5, 7]