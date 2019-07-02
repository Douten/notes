console.log(
  '%cString',
  'color: yellow; font-style: italic; background-color: blue;padding: 4px; font-size: 20px;'
);

let title = 'Red Rising';

if (!title.includes('Blue')) {
  console.log('This book does not begin with Blue');
}

if (title.includes('Rising')) {
  console.log('This book has Rising');
}

if (title.startsWith('Red')) {
  console.log(`It does start with red`);
}

if (title.endsWith('Red')) {
  console.log(`It doesn't end with Red`);
}

//.startsWidth('string', i) => i: index to start with

let str = 'trol';
console.log(str + 'ol'.repeat(20));
