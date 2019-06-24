console.log(
  '%cProperty Shorthand, Method Shorthand, Object Destructuring',
  'color: yellow; font-style: italic; background-color: blue;padding: 4px; font-size: 20px;'
);

// Object Shorthand

function getPerson() {
  let name = 'John';

  let age = 25;

  // ES5
  // return {
  //   name: name,
  //   age: age,
  //   greet: function () {
  //     return 'Hello ' + this.name;
  //   }
  // };

  return {
    name,
    age,
    greet() {
      return `Hello, ${this.name}`;
    }
  };
}

console.log(getPerson().name);
console.log(getPerson().greet());

let data = {
  name: 'Karen',
  age: 32,
  results: ['foo', 'bar'],
  count: 30
};

// ES5
// var results = data.results;
// var count = data.count;

// destructing object into variable
let { results, count } = data;
console.log(`${results} and ${count}`);

function getData({ results, count }) {
  console.log(results, count);
}

getData({
  name: 'Karen',
  age: 32,
  results: ['foo', 'bar'],
  count: 30
});
