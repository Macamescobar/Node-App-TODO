require('colors');
const { showMenu, pause } = require('./helpers/messages');

const main = async() => {
    console.clear();
    console.log('Hola mundo');
    showMenu();
    pause();
}

main();