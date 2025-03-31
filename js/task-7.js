// Напишіть скрипт, який для об'єкту user, послідовно:
// 1 - додасть поле mood зі значенням 'happy',
// 2 - замінить hobby на 'skydiving',
// 3 - замінить значення premium на false,
// 4 - виведе зміст об'єкта user у форматі
// '<ключ>:<значення>' використовуя Object.keys() та for...of

// const user = {
//     name: "John",
//     age: 20,
//     hobby: "tenis",
//     premium: true,
//   };

const user = {
  name: 'John',
  age: 20,
  hobby: 'tenis',
  premium: true,
  addKeyValue(key, value) {
    this[key] = value;
  },
  change(key, newValue) {
    let keyFound = false;
    for (const item of Object.keys(this)) {
      if (item === key) {
        this[key] = newValue;
        keyFound = true;
        break;
      }
    }
    if (!keyFound) {
      console.log(`Key "${key}" not found!!!`);
    }
  },
  show() {
    for (const key of Object.keys(this)) {
      if (typeof this[key] === 'function') {
        console.log(`${key}: function`);
        continue;
      }
      console.log(`${key}: ${this[key]}`);
    }
  },
};

user.show();
console.log('-'.repeat(50));
user.addKeyValue('mood', 'happy');
user.show();
console.log('-'.repeat(50));
user.change('hobby', 'skydiving');
user.change('premium', false);
user.change('Newkey', 'value');
user.show();
