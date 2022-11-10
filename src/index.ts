import http from 'http';
import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

const port = process.env.PORT || 3300;
const server = http.createServer((request, response) => {
    request.method;
    request.url;
    response.write('Hola Mundo, soy Alejandro');
    response.end();
});

server.listen(port);
console.log('Listen on port ', port);
