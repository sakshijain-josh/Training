function createCounter() {
    let count = 0; 
  
    return function () {
      count++;
      console.log("Count:", count);
    };
  }
  
  const counter = createCounter();
  
  counter(); 
  counter(); 
  counter(); // 3
  
  const counter2 = createCounter();
  console.log("New Variable Value starting from 0")
  counter2(); // 1
