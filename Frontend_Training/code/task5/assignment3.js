const arr = [20, 4, 23, 56, 1, 23, 65, 78, 45, 3, 9, 6, 23, 1, 50];

const sum = arr.reduce((acc, num) => acc + num, 0);
console.log("Sum:", sum);