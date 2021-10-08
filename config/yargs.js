const { builtinModules } = require('module');

const argv = require('yargs')
                .options('b',{
                    alias:'base',
                    type:'number',
                    demandOption:true,
                    describe: 'Es la base de multiplicar'
                })
                .options('l',{
                    alias:'listar',
                    type:'boolean',
                    demandOption:true,
                    default:false,
                    describe: 'Es la opción para imprimir por consola la tabla'
                })
                .options('h',{
                    alias:'hasta',
                    type:'number',
                    demandOption:false,
                    describe: 'Rango de cálculo'
                })
                .check((argv,options)=>{
                    if(isNaN(argv.b)){
                        throw 'La base tiene que ser un número'
                    }
                    return true;
                })
                .argv

module.exports = argv;