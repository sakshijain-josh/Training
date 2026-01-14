const user = {
    name: "John",
    age: 25,
  };
  
// 1. Create copy inside function
function updateAge(u) {
    return { ...u, age: 30 };
  }
  const updatedUser = updateAge(user);
  console.log(user.age);        
  console.log(updatedUser.age);

// 2. Copy before passing
const copyUser = { ...user };
updateAge(copyUser);
console.log(user.age);
console.log(copyUser.age);
