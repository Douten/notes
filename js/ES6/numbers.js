//allows function to pause at a point and then resume
function* numbers() {
  console.log('Begin');
  yield 1; //sort of like a return, but able to jump back in at same point with same state
  yield 2;
  yield 3;
}
