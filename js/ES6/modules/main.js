import TaskCollection, {
  AnotherTaskCollection,
  foo
} from './TaskCollection.js';
//default, other ones
//but usually only one thing, ie default

// ES5
// var TaskCollection = require('./TaskCollection')

new TaskCollection(['Go to the store', 'Finish screencast', 'Eat cake']).dump();
new AnotherTaskCollection(['more tasks', 'sleep']).dump();
console.log(foo);
