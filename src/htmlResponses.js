const fs = require('fs'); // pull the file system module

const index = fs.readFileSync(`${__dirname}/../client/client.html`);

const page2 = fs.readFileSync(`${__dirname}/../client/client2.html`);

const page3 = fs.readFileSync(`${__dirname}/../client/client3.html`);


const getIndex = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(index);
  response.end();
};
module.exports.getIndex = getIndex;


const getPage2 = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(page2);
  response.end();
};
module.exports.getPage2 = getPage2;

const getPage3 = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(page3);
  response.end();
};
module.exports.getPage3 = getPage3;


