export default class TaskCollection {
  constructor(tasks = []) {
    this.tasks = tasks;
  }

  dump() {
    console.log(this.tasks);
  }
}

export class AnotherTaskCollection {
  constructor(tasks = []) {
    this.tasks = tasks;
  }

  dump() {
    console.log(this.tasks);
  }
}

//can export multiple things, but most of the time it's just one thing
export let foo = 'bar';

//export default Taskcollection
//can export at the end to have cleaner beginning
