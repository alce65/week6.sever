import inquirer from 'inquirer';
import { exit } from 'process';

const askAge = () => {
    return inquirer.prompt({
        name: 'age',
        message: 'Dime tu edad',
        type: 'number',
    });
};

askAge().then(({ age }) => {
    if (age) {
        console.log(age);
        exit(0);
    }
    inquirer
        .prompt({
            name: 'ok',
            message: 'El valor no es válido. Deseas volver a intentarlo',
            type: 'confirm',
        })
        .then(({ ok }) => {
            if (!ok) exit(-1);
            askAge();
        });
});
