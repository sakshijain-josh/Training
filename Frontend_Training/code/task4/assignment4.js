const users = [
    { name: "Pratik", role: "admin" },
    { name: "Amit", role: "user" },
    { name: "Neha", role: "admin" },
    { name: "Ravi", role: "user" },
  ];
const groupedByRole = users.reduce((acc, user) => {
    const role = user.role;
  
    if (!acc[role]) {
      acc[role] = [];
    }
  
    acc[role].push(user);
    return acc;
  }, {});
  
  console.log(groupedByRole);
  