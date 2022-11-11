import http from 'http';
import url from 'url';
import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import { exit } from 'process';
dotenv.config();

const port = process.env.PORT || 3300;
const server = http.createServer((request, response) => {
    if (request.url === undefined) throw new Error('URL undefined');
    const parse = url.parse(request.url);
    const method = request.method;

    console.log(parse);
    console.log(method);

    switch (method?.toLowerCase()) {
        case 'get':
            response.writeHead(200, { 'Content-type': 'text/html' });
            response.write('<p>Hola Mundo, soy Alejandro</p>');
            response.end();
            break;
        case 'post':
        case 'patch':
        case 'delete':
        default:
            response.statusCode = 405;
            response.statusMessage = 'Method not allowed';
            response.write('Método no disponible');
            response.end();
            break;
    }
});

server.on('listening', () => {
    console.log('Listen on port ', port);
});

server.on('error', (error) => {
    console.log(error);
    exit(-1);
});

server.listen(port);
