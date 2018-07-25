const argv = require('yargs')
				.command('crear', 'Crea una nueva tarea',
				{
					descripcion:{
						demand: true,
						alias:'d',
						desc: 'Descripcion de la tarea por hacer'
					}
				})
				.command('listar', 'Lista las tareas creadas',
				{
					descripcion:{
						alias:'d',
						desc: 'Descripcion de la tarea por hacer'
					},
					completado:{
						alias:'c',
						default: true,
						desc: 'Marca si está pendiente o completado'
					}
				})
				.help()
				.argv;

module.exports={
	argv
}