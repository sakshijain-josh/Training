function runAfter10Seconds(callback) {
    console.log("Waiting 10 seconds...");
  
    setTimeout(() => {
      callback();
    }, 10000);
  }
  function myCallback() {
    console.log("✅ Callback executed after 10 seconds!");
  }
  
  runAfter10Seconds(myCallback);
  