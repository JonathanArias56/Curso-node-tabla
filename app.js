const {crearArchivo} = require('./helper/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

//const [, ,arg3='base=5'] = process.argv;
//const [,base = 5] = arg3.split('=');
//let base = 4;


/*console.log(process.argv);
console.log(argv);
console.log('base: yargs', argv.base);*/

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo=> console.log(nombreArchivo.rainbow,'creado'))
    .catch(err => console.log(err));

