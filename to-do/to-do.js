const fs = require('fs');

let listadoToDo = [];

const guardar = () =>{
	let data  = JSON.stringify(listadoToDo);

	fs.writeFile('./db/data.json', data, (err) => {
            if (err) console.log(err);
        });
}

const getListado = () =>{
	cargardb();

	return listadoToDo;
}

const actualizar = (desc, comp = true) =>{
	cargardb();

	let index = listadoToDo.findIndex(tarea=>{
		return tarea.desc === desc;
	});

	if (index >= 0){
		listadoToDo[index].completado = comp;
		guardar();
		return true;
	}else{
		return false;
	}
}

const cargardb = () =>{
		listadoToDo = require('../db/data.json');	
}

const crear = (desc) =>{

	cargardb();

	let porhacer={
		desc,
		comp: false,
	};
	listadoToDo.push(porhacer);

	guardar();
	
	return porhacer;
}

module.exports = {
	crear,
	getListado
}