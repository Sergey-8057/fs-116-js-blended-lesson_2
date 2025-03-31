// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

function caclculateAverage(...arr) {
  console.log("arr =", arr);
  const newArr = [];
  let sum = 0;
  for (const item of arr) {
    console.log(item);
    if (typeof item === 'number' && !Number.isNaN(item)) {
      newArr.push(item);
      sum += item;
    }
  }
  console.log('newArr =', newArr);
  return sum / newArr.length;
}


console.log(caclculateAverage(0, 10, 20, 30, true, NaN, 'NaN', ' ', 40));
