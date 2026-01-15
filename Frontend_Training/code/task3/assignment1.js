let str = "hello world";

let titleCase = str
  .split(" ")
  .map(word => word[0].toUpperCase() + word.slice(1))
  .join(" ");

console.log(titleCase); 
