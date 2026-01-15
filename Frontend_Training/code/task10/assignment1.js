function getUserData(userId) {
    return new Promise((resolve, reject) => {
      if (userId === 1) {
        resolve({
          name: "Akshay",
          age: 25,
          city: "Pune",
        });
      } else if (userId === 0) {
        reject("Error: Invalid userId (0)");
      } else {
        reject("Error: User not found");
      }
    });
  }
  
  async function fetchUserData(userId) {
    try {
      const data = await getUserData(userId);
      console.log("User Data:", data);
    } catch (error) {
      console.log("Caught Error:", error);
    }
  }
  
  fetchUserData(1);
  fetchUserData(0);
  