// Використайте цикл while, щоб вивести в console всі числа від 0 до 20 включно.

function counter(num) {
  for (let i = 0; i <= num; i++) {
    console.log('Число -', i);
  }
}

function counterTwo() {
  let numStart;
  while (true) {
    numStart = prompt(
      'Введіть початкове число лічильника від 0 до 100. За замовчуванням - 0. Для виходу натисніть "Відміна"'
    );
    if (numStart === null) {
      return alert('Лічильник скасовано');
    } else if (numStart === '') {
      numStart = 0;
    }
    numStart = Number(numStart);
    if (isNaN(numStart) || numStart < 0 || numStart > 100) {
      alert('Невірно введено число.');
      continue;
    }
    break;
  }

  let numFinish;
  while (true) {
    numFinish = prompt(
      'Введіть кінцеве число лічильника від 1 до 200. За замовчуванням - 20. Для виходу натисніть "Відміна"'
    );
    if (numFinish === null) {
      return alert('Лічильник скасовано');
    } else if (numFinish === '') {
      numFinish = 20;
    }
    numFinish = Number(numFinish);
    if (isNaN(numFinish) || numFinish < 1 || numFinish > 200) {
      alert('Невірно введено число.');
      continue;
    }
    break;
  }

  let step;
  while (true) {
    step = prompt(
      'Введіть крок лічильника від 1 до 100. За замовчуванням - 1. Для виходу натисніть "Відміна"'
    );
    if (step === null) {
      return alert('Лічильник скасовано');
    } else if (step === '') {
      step = 1;
    }
    step = Number(step);
    if (isNaN(step) || step < 1 || step > 100) {
      alert('Невірно введено число.');
      continue;
    }
    break;
  }

  alert(`Параметри лічильника: початок - ${numStart}, кінець - ${numFinish}, крок - ${step}.`);
  let count = numStart;
  for (let i = numStart + step; i <= numFinish; i += step) {
    count = count + ', ' + String(i);
  }
  alert(`Результат лічильника: ${count}`);
}

// counter(20);
counterTwo();
