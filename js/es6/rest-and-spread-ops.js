console.log(
  '%cRest and Spread Operators',
  'color: yellow; font-style: italic; background-color: blue;padding: 4px; font-size: 20px;'
);

//REST
function sum(...numbers) {
  //the 'rest' of the numbers
  //turns the arguments into an array
  //should come last eg (foo, ...numbers)

  return numbers.reduce((prev, current) => prev + current);
}

console.log(sum(1, 2, 3));

//SPREAD
function sum2(x, y, z) {
  //split an array into arguments for a function
  return x + y + z;
}

let nums = [4, 5, 6];

console.log(sum(...nums));
