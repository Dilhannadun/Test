global.fetch = require("node-fetch");

console.log("Hello World");
const os = require('os');

console.log('Architecture ' + os.arch());
console.log('CPUs ' + os.cpus().length);
console.log('OS ' + os.platform());

const fs = require('fs');

const fileName = __dirname + '/test.txt';

fs.readFile(fileName, (err, data) => {
    if (err) {
        console.error(err);
    }
    console.log(data.toString());
});

const data = fs.readFileSync(fileName);
console.log(data.toString());



fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => console.log(json))


