const user = {
    name: "Sakshi",
    age: 22,
    city: "Chalisgaon",
  };
  
console.log(user);
  
const keys = Object.keys(user);
console.log("Keys:", keys);

const values = Object.values(user);
console.log("Values:", values);

Object.keys(user).forEach((key) => {
    console.log(key, ":", user[key]);
  });
  