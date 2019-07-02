console.log(
  '%cGenerators',
  'color: yellow; font-style: italic; background-color: blue;padding: 4px; font-size: 20px;'
);

//allows function to pause at a point and then resume

function* numbers() {
  console.log('Begin');

  yield 1; //sort of like a return, but able to jump back in at same point with same state

  yield 2;

  yield 3;
}

let iterator = numbers();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

function* range(start, end) {
  console.log('begin');
  while (start < end) {
    yield start;
    start++;
  }
}

let i2 = range(1, 5);

for (let i of)