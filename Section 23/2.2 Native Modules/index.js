import { writeFile } from 'node:fs';
import { Buffer } from 'node:buffer';

const data = new Uint8Array(Buffer.from('index.js'));
writeFile('message.txt', "hello , I am reduan", (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});


import { readFile } from 'node:fs';

readFile('./message.txt', (err, data) => {
  if (err) throw err;
  console.log(String(data));
});