// Get http module
const http = require('http');
const chuck = require('./chuck');

const server = http.createServer((req, res) => {

    // Get a joke and console.log it
    chuck.getJoke()
        .then((jokeText) => {
            res.write(jokeText);
            res.end();
        })
    //chuck.getDadJoke();

    // You can just say res.end('it works')
});

server.listen(3000);