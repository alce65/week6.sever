import fs from 'fs/promises';

// IIFE
(async () => {
    const file = 'dist/data.txt';
    const data = await fs.readFile(file);
    const info = 'Estudio Node 😍';
    console.log(data.toLocaleString());
    const finalInfo = data.toLocaleString() + info;
    const file2 = 'dist/data2.txt';
    await fs.writeFile(file2, finalInfo);
    const data2 = await fs.readFile(file2);
    console.log(data2.toLocaleString());
})();
