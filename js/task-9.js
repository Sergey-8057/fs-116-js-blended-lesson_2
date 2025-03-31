// Створіть об'єкт calculator з наступними методами:
// read(a, b) - приймає два аргумента і зберігає їх як властивості об'єкта,
// sum() - повертає сумму збереженних значень (з перевіркою на наявність властивостей в об'єкті),
// mult() - перемножає збереженні значення і повертає результат (з перевіркою на наявність властивостей в об'єкті),
// винесіть перевірку на наявність властивостей в об'єкті в окремий метод exist().

// Якщо вказані властивості в обʼєкті відсутні (тобто метод exist повертає false),
// методи sum і mult мають повертати рядок 'No such propeties'

const calculator = {
  read(a, b) {
    this['a'] = a;
    this['b'] = b;
  },
  sum() {
    if (this.exist()) {
      return this.a + this.b;
    } else {
      return 'No such propeties';
    }
  },
  mult() {
    if (this.exist()) {
      return this.a * this.b;
    } else {
      return 'No such propeties';
    }
  },
  exist() {
    return typeof this.a === 'number' && typeof this.a === 'number' ? true : false;
  },
};

console.log(calculator.sum());
console.log(calculator.mult());

calculator.read(3, 4);
console.log(calculator);

console.log(calculator.sum());
console.log(calculator.mult());
