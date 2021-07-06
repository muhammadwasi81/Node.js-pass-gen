const fs = require('fs');
const path = require('path');
const os = require('os');
const chalk = require('chalk');

const savePassword = (password) => {
    fs.open(path.join(__dirname, '../', 'password.txt'), 'a', 666, (e, id) => {
        fs.write(id, password + os.EOL, null, 'utf-8', (e, id) => {
            fs.close(id, () => {
                console.log(chalk.green('Password has saved to password.txt'));
            })
        })
    })
}

module.exports = savePassword



