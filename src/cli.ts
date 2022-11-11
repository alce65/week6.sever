import inquirer from 'inquirer';

const courses = ['Angular', 'React', 'Vue'];

inquirer
    .prompt([
        {
            name: 'userName',
            message: 'Dime tu nombre',
            type: 'input',
        },
        {
            name: 'age',
            message: 'Dime tu edad',
            type: 'number',
        },
        {
            name: 'course',
            message: 'Selecciona un curso',
            type: 'list',
            choices: courses,
        },
        {
            name: 'courses',
            message: 'Selecciona un curso',
            type: 'checkbox',
            choices: courses,
        },
        {
            name: 'ok',
            message: 'Aceptas ....',
            type: 'confirm',
        },
    ])
    .then((answers) => {
        console.log(answers);
        console.log(`Hola ${answers.userName}`);
    });
