// Напишіть функцію getNumbers(min, max), що приймає 2 параметри -
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.

function getNumbers(min, max) {
  let count = 0;
  for (let i = max; i >= min; i--) {
    console.log(`Число - ${i}`);
    if (!(i % 2)) {
      if (i === 0) {
        continue;
      }
      count += 1;
    }
  }
  console.log(`Сума всіх парних чисел - ${count}`);
  return count;
}

getNumbers(0, 20);
