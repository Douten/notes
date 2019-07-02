//need to set resolve for .then()
const timer = new Promise((resolve, reject) => {
  // reject() for an error
  console.log('Init Promise');
  setTimeout(() => {
    console.log('Timeout done.');
    resolve();
  }, 2000);
});

timer.then(() => {
  console.log('Proceed now that timer has concluded.');
});

//a silly example
const customTimer = function(length) {
  return new Promise((resolve, reject) => {
    // reject() for an error
    console.log('Init Promise');
    setTimeout(() => {
      console.log('Timeout done.');
      resolve();
    }, length);
  });
};

customTimer(5000).then(() =>
  console.log('Proceed now that timer has concluded.')
);
