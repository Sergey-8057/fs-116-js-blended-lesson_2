// Напишіть код, який запитуватиме у користувача
// логін за допомогою prompt і виводить результат в консоль браузера

// Після цього додайте перевірку введеного користувачем значення:
// Якщо відвідувач вводить "Адмін",
// то prompt запитує пароль (не забудьте зберігти його у змінну для подальшої перевірки).
// Якщо нічого не ввели або натиснули Cancel,
// Вивести в alert строку "Скасовано"
// В іншому випадку вивести в alert рядок "Я вас не знаю"

// Пароль перевіряти так:
// Якщо введено пароль "Я головний",
// то вивести в alert рядок "Добрий день!",
// в іншому випадку вивести в alert рядок "Невірний пароль!"

const message = prompt('Enter login:');

function invalideLogin(message) {
  switch (message) {
    case 'Адмін':
      const pass = prompt('Enter password:');

      if (pass === 'Я головний') {
        alert('Добрий день!');
      } else {
        alert('Невірний пароль!');
      }
      break;

    case '':
      alert('Скасовано');
      break;
    case null:
      alert('Скасовано');
      break;
    default:
      alert('Я вас не знаю');
  }
}

function invalideLoginTwo(message) {
  if (message === 'Адмін') {
    const pass = prompt('Enter password:');
    if (pass === 'Я головний') {
      alert('Добрий день!');
    } else {
      alert('Невірний пароль!');
    }
  } else if (message === '' || message === null) {
    alert('Скасовано');
  } else {
    alert('Я вас не знаю');
  }
}

// invalideLogin(message);
invalideLoginTwo(message);
