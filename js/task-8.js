// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.

function min(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a > b ? `Min = ${b}` : `Min = ${a}`;
  }
  return 'Not a number!';
}

console.log(min(5, 10));
console.log(min(5, -10));
console.log(min('20', 10));
console.log(min(5, true));
