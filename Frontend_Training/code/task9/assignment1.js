function getUserData(userId) {
    return new Promise((resolve, reject) => {
      if (userId === 1) {
        resolve({
          name: "Akshay",
          age: 25,
          city: "Pune",
        });
      } else if (userId === 0) {
        reject(" Error: Invalid userId (0)");
      } else {
        reject(" Error: User not found");
      }
    });
  }
  
  getUserData(1)
    .then((data) => {
      console.log(" User Data:", data);
    })
    .catch((error) => {
      console.log(error);
    });
  
  getUserData(0)
    .then((data) => {
      console.log("User Data:", data);
    })
    .catch((error) => {
      console.log(error);
    });
  