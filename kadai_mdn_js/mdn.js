const date = new Date ([2023, 8, 22]);

const [month, day, year] = [
    date.getMonth(),
    date.getDate(),
    date.getFullYear(),
]

console.log(year + '年', month + '年', day + '日');
