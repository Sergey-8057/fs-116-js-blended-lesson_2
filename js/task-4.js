// Напишіть функцію, яка сумуватиме сусідні числа
// і пушитиме їх в новий масив.

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// уточнення: складати необхідно перше число з другим, потім друге - з третім,
// третє - з четвертим і так до кінця.
// В результаті функція має повертати масив [33, 45, 39, 17, 25, 27, 29].

function sumTwoNumbers(array) {
  const newArray = [];
  for (let i = 0; i < array.length - 1; i++) {
    const sumNumber = array[i] + array[i + 1];
    newArray.push(sumNumber);
  }
  return newArray;
}

const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
console.log(sumTwoNumbers(someArr)); //[33, 45, 39, 17, 25, 27, 29]
