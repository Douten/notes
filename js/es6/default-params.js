console.log(
  '%cDefault Params',
  'color: yellow; font-style: italic; background-color: blue;padding: 4px; font-size: 20px;'
);

function applyDiscount(cost, discount = 0.1) {
  //ES5
  //discount = discount || .10

  return cost - cost * discount;
}

function getSaleRate() {
  return 0.3;
}

//works for other values besides premitive (functions, obj, etc)
function applySale(cost, discount = getSaleRate()) {
  return cost - cost * discount;
}

console.log(applyDiscount(100));
console.log(applySale(100));
