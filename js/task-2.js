// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

// const logins = ["Peter", "John", "Igor", "Sasha"];

const logins = ['Peter', 'John', 'Igor', 'Sasha'];

function checkLogin(array) {
  const login = prompt('Enter your login:');
  if (array.includes(login)) {
    alert(`Welcome, ${login}!`);
  } else {
    alert('User not found');
  }
}

checkLogin(logins);
