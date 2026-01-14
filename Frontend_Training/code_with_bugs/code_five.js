const user = {
    name: "John",
    age: 25,
  };
  function updateAge(u) {
    u.age = 30;
  }
  updateAge(user);
  console.log(user.age);