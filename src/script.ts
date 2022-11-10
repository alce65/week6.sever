import { program } from 'commander';
import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

const key = process.env.KEY as string;
const port = process.env.PORT || 3500;
console.log(key, port);

program.option('-u, --user <char>').option('-h, --help');
program.parse();

const { user, help } = program.opts();
console.log({ user }, { help });
if (help) {
    console.log('--user o -u seguido del usuario');
}
