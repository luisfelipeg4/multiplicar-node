

const fs =require('fs')


let crearArchivo = (base)=>{
    return new Promise ((resolve,reject)=>{
        if(!Number(base)){
            reject("no es un numero ")
            return;
        }
        let data =''
        for (let index = 0; index <= 10; index++) {
           data+= `${base} x ${index} = ${base*index}\n`
        }
        
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
          if (err) reject(err);

          resolve(`tabla-${base}.txt`);
        
        });
    })
}
let listarTabla = (base,limite)=>{
    return new Promise ((resolve,reject)=>{
        if(!Number(base)){
            reject("no es un numero ")
            return;
        }
        let data =''
        for (let index = 0; index <= limite; index++) {
           data+= `${base} x ${index} = ${base*index}\n`
        }
        resolve(data)
    })
}

module.exports = {crearArchivo,listarTabla}