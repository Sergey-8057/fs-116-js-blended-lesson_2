// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).

const styles = ['jazz', 'blues'];
console.log('styles_1 =', styles);

styles.push('rock-n-roll');
console.log('styles_2 =', styles);

const indexStyle = styles.indexOf('blues');
styles[indexStyle] = 'classic';
console.log('styles_3 =', styles);

function logItems(array) {
  let index = 1;
  for (const item of array) {
    console.log(`${index} - ${item}`);
    index++;
  }
}

logItems(styles);
