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

    switch (method) {
        case 'get':
            response.write('Hola Mundo, soy Alejandro');
            response.end();
            break;
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
});

server.listen(port);
