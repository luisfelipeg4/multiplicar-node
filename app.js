const {
    argv
} = require('./config/yargs')


const {
    crearArchivo,
    listarTabla
} = require('./multiplicar/multiplicar');



let comando = argv._[0]

console.log(comando);

switch (comando) {
    case 'listar':
        console.log(argv);
        
        listarTabla(argv.base,argv.limite).then(archivo =>{console.log(`Archivo Creado : ${archivo}`)}).catch(err => console.log(err))
        break;
    case 'crear':
        crearArchivo(argv.base).then(archivo =>{console.log(`Archivo Creado : ${archivo}`)}).catch(err => console.log(err))
        break;
    default:
        console.log("error comando no reconocido ");
        
        break;
}

// console.log("argv2",argv2);
