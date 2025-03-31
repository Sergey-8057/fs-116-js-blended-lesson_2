// Напишіть функцію findLongestWord(string), яка
// приймає довільний рядок, що складається лише зі слів, розділених
// пробілами (параметр string), і повертатиме найдовше слово у реченні.

// Скористайтесь цим прикладом виклику функції для перевірки її роботи:
// console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'

function findLongestWord(string) {
  const listString = string.split(' ');
  let longerWord = listString[0];
  for (const word of listString) {
    if (longerWord.length < word.length) {
      longerWord = word;
    }
  }
  return longerWord;
}

console.log(findLongestWord('London is the capital of Great Britain')); // 'capital'
