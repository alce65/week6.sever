import fs from 'fs';

const file = 'dist/data.txt';
const info = 'Estudio Node 😍';
const file2 = 'dist/data2.txt';
fs.readFile(file, (err, data) => {
    console.log(data.toLocaleString());
    const finalInfo = data.toLocaleString() + info;
    fs.writeFile(file2, finalInfo, () => {
        fs.readFile(file2, (err, data) => {
            console.log(data.toLocaleString());
        });
    });
});
