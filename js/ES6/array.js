console.log(
  '%cArray',
  'color: yellow; font-style: italic; background-color: blue;padding: 4px; font-size: 20px;'
);

console.log([2, 4, 6, 8, 10].includes(8));

console.log([2, 4, 6, 8, 10, 11].find(item => item % 2 > 0));

console.log([2, 4, 6, 8, 10, 11].findIndex(item => item % 2 > 0));

class sysUser {
  constructor(name, isAdmin) {
    this.name = name;
    this.isAdmin = isAdmin;
  }
}

let sysUsers = [
  new sysUser('Minh', false),
  new sysUser('Josh', true),
  new sysUser('John', false)
];

console.log(sysUsers.find(user => user.isAdmin).name);

// .fill()
// .keys()
// .values()
// .entries()
