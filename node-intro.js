// console.log(document);

// require(<name of the package>);
const chalk = require('chalk');
// and use it
// console.log(chalk.blue('Hello world!'));

const crypto = require('crypto');
const randomString = crypto.randomBytes(64).toString('Hex');
// console.log(randomString);

// use the add from add.js - in that case, bc it is our own code, we have to reference a directory
const addNumbers = require('./add');

// console.log(addNumbers(2, 3));

const functions = require('./functions');
console.log(functions.hello());