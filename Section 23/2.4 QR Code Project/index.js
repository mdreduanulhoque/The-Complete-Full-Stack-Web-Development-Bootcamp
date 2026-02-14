/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import fs from 'fs';

const answers = await inquirer.prompt([
  {
    type: 'input',
    name: 'url',
    message: 'Enter a URL:',
  },
]);

fs.appendFileSync('urls.txt', answers.url + '\n');
console.log('URL saved ✅');