console.log(
  '%cClasses',
  'color: yellow; font-style: italic; background-color: blue;padding: 4px; font-size: 20px;'
);

class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  //static method can only be called directly under User Obj. eg changeEmail can't call it
  //can directly access without first creating an instance
  //rest args into an array
  static register(...args) {
    //spreads array back into arg for constructor
    return new User(...args);
    //more functionalities
  }

  get foo() {
    return 'foo';
  }

  changeEmail(newEmail) {
    // added through prototype like old way//
    this.email = newEmail;

    // this.register() won't work
  }
}

let user = new User('JeffreyWay', 'support@laracasts.com');

user.changeEmail('foo@bar.com');

console.dir(user);

let user2 = new User('Jane', 'Jane@site.com');

console.dir(user2);

console.log(user.foo);

//class is first class citizen

function log(strategy) {
  strategy.handle();
}
//one off class
log(
  new (class {
    handle() {
      console.log('Using the console strategy to log.');
    }
  })()
);
