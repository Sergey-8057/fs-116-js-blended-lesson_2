// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

// const min = Math.floor(Math.random() * (59 - 0) + 0);

const min = Math.floor(Math.random() * (59 - 0) + 0);

function findQuarter(min) {
  if (min <= 15) {
    return `${min} входить в першу чверть`;
  } else if (min > 15 && min <= 30) {
    return `${min} входить в другу чверть`;
  } else if (min > 30 && min <= 45) {
    return `${min} входить в третю чверть`;
  } else {
    return `${min} входить в четверту чверть`;
  }
}

console.log(findQuarter(min));
