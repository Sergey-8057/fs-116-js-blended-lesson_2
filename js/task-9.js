// Напишіть функцію isAdult(age), яка  приймає число - вік користувача і повертає true,
// якщо параметр age більше чи дорівнює 18.
// В іншому випадку вона запитує підтвердження через confirm
// і повертає його результат (true/false).

function isAdult(age) {
  if (age >= 18) {
    return true;
  } else if (age < 18) {
    return false;
  } else {
    return confirm('Ваш вік більше 18 років?');
  }
}

console.log(isAdult(18));
console.log(isAdult(36));
console.log(isAdult());
console.log(isAdult(17));
