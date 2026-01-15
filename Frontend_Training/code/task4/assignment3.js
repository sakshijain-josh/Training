const user = {
    name: "Sakshi",
    age: 22,
    city: "Chalisgaon",
  };

// Add
user.mobileNumber = "9876543210";
console.log("After adding mobileNumber:", user);

// Delete
delete user.city;
console.log("After deleting city:", user);

