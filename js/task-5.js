// Напишіть функцію findSmallestNumber(numbers),
// яка шукає найменше число в масиві.
// Додайте перевірку, що функція отримує саме масив, і
// якщо функція отримує масив - поверніть з функції найменше число,
// в іншому випадку - поверніть 'Sory, it is not an array!'.

// const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];

function findSmallestNumber(numbers) {
  if (Array.isArray(numbers)) {
    return Math.min(...numbers)
  } else {
    return 'Sory, it is not an array!';
  }
}

const numbers = [2, 5, 35, 56, 12, 24, 7, 80, 3];
console.log(findSmallestNumber(numbers));

const letters = 'asd';
console.log(findSmallestNumber(letters));

// Альтернативное решение

function findSmallestNumberAlt(numbers) {
  if (Array.isArray(numbers)) {
    return Math.min(...filterForNumbers(numbers));
  } else {
    return 'Sory, it is not an array!';
  }
}

function filterForNumbers(arr) {
  const newArr = [];
  for (const item of arr) {
    if (typeof item === 'number' && !Number.isNaN(item)) {
      newArr.push(item);
    }
  }
  return newArr;
}

console.log(findSmallestNumberAlt([40, 20, 30, true, NaN, 'NaN', ' ', 10]));
console.log(findSmallestNumberAlt('text'));
