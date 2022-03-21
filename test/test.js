const myDB = require('../db/db');

myDB.create('User 1', 20);
myDB.create('User 2', 20);
myDB.create('User 3', 20);
myDB.create('User 4', 20);
myDB.create('User 5', 20);
myDB.bulkCreate('User 6', 10, 5);
const tickets = myDB.find();
// console.log('All tickets:', tickets);
const winners = myDB.draw(5);
console.log('Winners:', winners);
