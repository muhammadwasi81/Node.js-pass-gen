#!/usr/bin/env node
const program = require('commander')
const chalk = require('chalk')
const clipboardy = require('clipboardy')
const log = console.log
const createPassword = require('./utils/CreatePassword')
const savePassword = require('./utils/SavePassword')

program.version('1.0.0').description('Simple Password Generator')

program
    .option('-l, --length <number>', 'length of password', '8')
    .option('-s, --save', 'save password to passwords.txt')
    .option('-nn, --no-numbers', 'remove numbers')
    .option('-ns, --no-symbols', 'remove symbols')
    .parse()

const { length, save, numbers, symbols } = program.opts();

//get generated password
const generatedPasswords = createPassword(length, numbers, symbols);

//Save to file
if (save) {
    savePassword(generatedPasswords)
}
//copy to clipboard
clipboardy.writeSync(generatedPasswords)

//output generated passwords
console.log(chalk.blue('Generated Password: ') + chalk.bold(generatedPasswords))
log(chalk.yellow('Password copied to clipboard: ') + chalk.bold)