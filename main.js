import lodash from 'lodash';
import chalk from 'chalk';

const array = [1,2,2,3,4,5,5,5,6,7,8,8,9];
const uniqueNums = lodash.uniq(array);

console.log(chalk.green(uniqueNums));

console.log(chalk.red.bgBlue("Hello, with chalk!"));
console.log(chalk.blue.bgRed.bold('Hello world!'));
console.log(chalk.red("Red text"));
