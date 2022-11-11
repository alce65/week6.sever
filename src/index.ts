import http from 'http';
import url from 'url';
import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import { CustomError } from './interfaces/error';
dotenv.config();

const port = process.env.PORT || 3300;
const server = http.createServer((request, response) => {
    if (request.url === undefined) {
        server.emit('error', new Error('URL undefined'));
        return;
    }
    const parse = url.parse(request.url);
    const method = request.method;

    console.log(method, parse.href);

    let err: CustomError;
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
            err = {
                ...new Error('Método no disponible'),
                statusCode: 405,
                statusMessage: 'Method not allowed',
            };
            server.emit('error', err, response);
            break;
    }
});

server.on('listening', () => {
    const addr = server.address();
    if (addr === null) return;
    let bind: string;
    if (typeof addr === 'string') {
        bind = 'pipe ' + addr;
    } else {
        bind =
            addr.address === '::'
                ? `http://localhost:${addr?.port}`
                : `port ${addr?.port}`;
    }
    console.log(`Listening on ${bind}`);
});

server.on('error', (error: CustomError, response: http.ServerResponse) => {
    response.statusCode = error.statusCode;
    response.statusMessage = error.statusMessage;
    response.write(error.message);
    response.end();
});

server.listen(port);
