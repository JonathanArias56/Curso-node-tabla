const fs = require('fs');
const colors = require('colors');

/*const crearArchivo = (base = 5)=>{
    
    return new Promise((resolve,reject)=>{

        let resultado = '';
        for (let i = 1; i <= 10; i++) { 
            resultado +=`${base} x ${i} = ${base*i} \n`; 
        }
        
        console.log(resultado);

        fs.writeFileSync(`tabla-${base}.txt`, resultado);

        (`tabla- ${base}.txt`)?resolve(`tabla- ${base}.txt`):reject(`El archivo no existe`);

    });

}*/

const crearArchivo = async(base = 5, listar=false, hasta = 10)=>{

    try{

        let resultado, consola = '';
        for (let i = 1; i <= hasta; i++) { 
            resultado +=`${base} x ${i} = ${base*i} \n`; 
            consola +=`${base} ${'x'.green} ${i} ${'='.green} ${base*i} \n`; 
        }
        
        if(listar){
            console.log('---- Tabla de multiplicar ----'.blue);
            console.log(consola);
        }
      

        fs.writeFileSync(`./tablas/tabla-${base}.txt`, resultado);

        return `tabla- ${base}.txt`;
    }catch(err){
        throw err;
    }

}

module.exports = {
    crearArchivo
};
