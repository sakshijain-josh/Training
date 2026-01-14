const nums = [1, 2, 3, 4];
const result = nums.filter((n) => {
  if (n % 2 === 0) {
    return n * 2;
  }
});
console.log(result);
