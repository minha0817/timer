const timers = [10, 3, 5, 15, 9];

for (const time of timers) {
  if (!isNaN(time) && time >= 0) {
    setTimeout(() => {
      console.log(`${time} seconds`);
      process.stdout.write("\x07");
    }, time * 1000);
  }
}
