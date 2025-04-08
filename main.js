import lodash from 'lodash';
import chalk from 'chalk';
import faker from 'faker';
import validator from 'validator';
import colors from 'colors';

const array = [1,2,2,3,4,5,5,5,6,7,8,8,9];
const uniqueNums = lodash.uniq(array);

console.log(chalk.green(uniqueNums));
console.log(chalk.gray(array));

console.log(chalk.red.bgBlue("Hello, with chalk!"));
console.log(chalk.blue.bgRed.bold('Hello world!'));
console.log(chalk.red("Red text"));


// Faker package

let fakeAccount = {
    userID: faker.addres,
    Company: faker.company,
    Vehicle: faker.vehicle,
    Money: faker.finance
}

// console.log(fakeAccount);
// Validator package
const person1 = "Jackie";
const idk = validator.equals(person1, "Jackie");
console.log(idk);

// Colors package
colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red'
  });


console.log("ERROR: 404 NOT FOUND".error);
console.log("WOAH RAINBOW".rainbow);

