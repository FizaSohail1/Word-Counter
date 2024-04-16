#! /usr/bin/env node
// Creating a word counter
import inquirer from "inquirer";
import chalk from "chalk";
const answer = await inquirer.prompt([{
        name: 'sentence',
        type: 'input',
        message: chalk.yellow('Kindly enter your text :')
    }]);
let words = answer.sentence.trim().split(" ");
console.log(words);
//print the word count of the sentences to the console
console.log(chalk.yellow(`'There are ${words.length} words in your sentence`));
