import fs from 'fs/promises';

const file = 'dist/data.txt';

const file2 = 'dist/data2.txt';
fs.readFile(file)
    .then((data) => {
        const info = 'Estudio Node 😍';
        console.log(data.toLocaleString());
        return data.toLocaleString() + info;
    })
    .then((data) => {
        fs.writeFile(file2, data);
    })
    .then(() => {
        return fs.readFile(file2);
    })
    .then((data) => console.log(data.toLocaleString()));
