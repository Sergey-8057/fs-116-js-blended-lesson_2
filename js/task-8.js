// Є об'єкт, в якому зберігаються зарплати команди
// Напишіть код для додавання усіх зарплат та
// збережіть його результат в змінній sum.
// Якщо об'єкт salaries пустий, то результат має бути 0

// const salaries = {
//     Mango: 100,
//     Poly: 160,
//     Ajax: 1470,
//   };

function totalSalaries(object) {
  let sum = 0;
  for (const val of Object.values(object)) {
    sum += val;
  }
  return sum;
}

const salaries = {
  Mango: 100,
  Poly: 160,
  Ajax: 1470,
};

console.log(totalSalaries(salaries));
console.log(totalSalaries({}));
