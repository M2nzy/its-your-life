
const users = require('./user');
const hello = require('./hello');

//console.log(users);
hello(users.user3);

console.log('------------------------');

const person = require('./user');
//console.log(person);
console.log('name >> ', users.person.name);
console.log('age >> ', users.person.age);
console.log('tel >> ', users.person.tel);