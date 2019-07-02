class TaskCollection {
  constructor(tasks = []) {
    this.tasks = tasks;
  }

  dump() {
    console.log(this.tasks);
  }
}

class AnotherTaskCollection {
  constructor(tasks = []) {
    this.tasks = tasks;
  }

  dump() {
    console.log(this.tasks);
  }
}

//can export multiple things, but most of the time it's just one thing
let foo = 'bar';

//export default Taskcollection
//can export at the end to have cleaner beginning

//default, other ones
//but usually only one thing, ie default

// ES5
// var TaskCollection = require('./TaskCollection')

new TaskCollection(['Go to the store', 'Finish screencast', 'Eat cake']).dump();
new AnotherTaskCollection(['more tasks', 'sleep']).dump();
console.log(foo);
