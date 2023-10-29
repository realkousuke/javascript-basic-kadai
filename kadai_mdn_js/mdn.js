const date = new Date();

const [month, day, year] = [
  date.getMonth(),
  date.getDate(),
  date.getFullYear(),
];

console.log(date);
console.log(year + '年', month + '月', day + '日');
