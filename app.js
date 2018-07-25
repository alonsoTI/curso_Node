const argv = require('./config/yargs').argv;
const porHacer = require('./to-do/to-do.js');
const color = require('colors');

let comando = argv._[0];

switch(comando){
	case 'crear':
	let tarea = porHacer.crear(argv.descripcion);
	console.log(tarea);
	break;

	case 'listar':
	let listado = porHacer.getListado();

	for (let tarea of listado){
		console.log("=======Tarea por hacer========".green);
		console.log("Tarea: " + tarea.desc);
		console.log("Estado : " + tarea.comp);
		console.log("=============================".green)
	}

	break;

	case 'actualizar':
	console.log('Actualiza alguna tarea');
	break;

	default : 'Comando no reconocido';
}