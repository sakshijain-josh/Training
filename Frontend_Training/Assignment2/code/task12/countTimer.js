let timeLeft = 10;

const intervalId = setInterval(() => {
  console.log("Time Left:", timeLeft);

  timeLeft--;

  if (timeLeft < 0) {
    clearInterval(intervalId);
    console.log("Countdown Finished");
  }
}, 1000);
