var listaAlumnos = [];
function Menu() {
	

	let opcion;

		opcion = prompt("1. Matrícula de alumno\n2. Borrar alumno\n3. Listar alumnos\n0. Salir");
		
		while (opcion != "0" && opcion != "1" && opcion != "2" && opcion != "3") {
			alert("[Error] Introduzca una opción válida: ");
			opcion = prompt("1. Matrícula de alumno\n2. Borrar alumno\n3. Listar alumnos\n0. Salir");
		}
		
		switch (opcion) {
			case "1":
				AlumnoPort.añadirAlumno(listaAlumnos);
				break;
			case "2":
				AlumnoPort.eliminarAlumno(listaAlumnos);
				break;
			case "3":
				
				AlumnoPort.listarAlumnos(listaAlumnos);
				
				break;
		}
}

class AlumnoPort {
	constructor(idAlum,nombre, apellidos, telefono, idPortatil,marca,modelo) {
		this.idAlum = idAlum;
		this.nombre = nombre;
		this.apellidos = apellidos;
		this.telefono = telefono;
		this.idPortatil = idPortatil;
		this.marca = marca;
		this.modelo = modelo;
	}
	
	static calculoIdAlumno(listaAlumnos) {
		let auxiliar = 0;
		for(let i = 0; i< listaAlumnos.length; i++) {
			let j = listaAlumnos[i].idAlum;
			if(auxiliar<j) {
				auxiliar = j;
			}
		}
		return auxiliar + 1;
	}
	
	static concatenacionMarcaModelo( marca,  modelo) {
		let idPortatil;
		if(marca.length<3) {
			idPortatil = marca;
		}else {
			idPortatil = marca.substring(0,3);
		}
		idPortatil += "-";
		if(marca.length<3) {
			idPortatil += modelo;
		}else {
			idPortatil += modelo.substring(0,3);
		}
		return idPortatil;
	}
	
	static añadirAlumno(listaAlumnos) {
		
		let nombre = prompt("Introduzca el nombre: ");
		let apellidos = prompt("Introduzca los apellidos: ");
		let telefono = prompt("Introduzca el teléfono: ");
		let marca = prompt("Introduzca la marca del portátil: ");
		let modelo = prompt("Introduzca el modelo del portátil: ");
		let idAlum= this.calculoIdAlumno(listaAlumnos);
		let idPortatil= this.concatenacionMarcaModelo(marca,modelo);
		//Creo en objeto con los nuevos parametros
		var alumport = new AlumnoPort(idAlum,nombre,apellidos,telefono,idPortatil,marca,modelo);
		//le paso a la lista el objeto
		alumport.idAlum= listaAlumnos.length + 1;
		listaAlumnos.push(alumport);
	}

	static eliminarAlumno(listaAlumnos) {
		let idBorrar = prompt("Introduzca el id del alumno para borrar su información: ");

		if (idBorrar > listaAlumnos.length || idBorrar < 1 || listaAlumnos.length == 0)
			alert("[Error] No se ha podido borrar la información.");
		else {
			listaAlumnos.splice(idBorrar - 1, 1);
			alert("La información se ha borrado correctamente.");
		}
	}

	static listarAlumnos(listaAlumnos) {
		if (listaAlumnos.length != 0){
			for (let i = 0; i < listaAlumnos.length; i++)
				document.write(JSON.stringify((listaAlumnos[i]))); 
			document.write("<br><button onclick=\"Menu()\">Menú de la aplicacion (Pulsar para realizar otra funcion)</button><br><hr>")
			
		}
		else
			alert("[Error] No existe información para listar.");
	}
}

