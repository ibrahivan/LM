var listaCitasMedicas = [];
const medicos = ["Ana García", "María Fernández", "Laura Torres", "Luis González", "Javier Rodríguez", "Miguel Martínez"];
const centros = ["Hospital Virgen del Rocío", "Hospital Quirón Sagrado Corazón", "Hospital Virgen Macarena", "Hospital de San Lázaro"];
// Creo la clase "CitasMedicas"
class CitasMedicas {
  //Constructor de las citas con sus distintas variables
  constructor(dniUsuario, idCentroMedico, idConsulta, idMedico, fecha) {
    this.dniUsuario = dniUsuario;
    this.idCentroMedico = idCentroMedico;
    this.idConsulta = idConsulta;
    this.idMedico = idMedico;
    this.fecha = fecha;
  }
}
  // Método que se utiliza para poder crear un objeto de citas e insertarlo en la base de datos
  function crearCitaMedica() {
    let dniUsuario = prompt("Introduce tu DNI:");
    let idCentroMedico =  centros[Math.floor(Math.random() * centros.length)];
    let idConsulta = Math.floor(Math.random() * 100) + 1;
    let idMedico = medicos[Math.floor(Math.random() * medicos.length)];
    // obtener la fecha actual
	let fechaActual = new Date();

	// generar un número aleatorio de días en el rango de 0 a 730 (2 años)
	let diasAleatorios = Math.floor(Math.random() * 731);

	// agregar los días aleatorios a la fecha actual
	let fechaAleatoria = new Date(fechaActual.getTime() + (diasAleatorios * 24 * 60 * 60 * 1000));

	// formatear la fecha como cadena de texto en formato "DD/MM/AAAA"
	let dia = fechaAleatoria.getDate().toString().padStart(2, "0");
	let mes = (fechaAleatoria.getMonth() + 1).toString().padStart(2, "0");
	let anio = fechaAleatoria.getFullYear();
	let fecha = `${dia}/${mes}/${anio}`;



    let nuevaCita = new CitasMedicas(dniUsuario, idCentroMedico, idConsulta, idMedico, fecha);
    listaCitasMedicas.push(nuevaCita);
    return listaCitasMedicas;
  }

  

// Método para listar y borrar citas según su posición en la lista y según el DNI introducido.
	function borrarCitas() {
			var citasUsuario = []; // Lista para poder mostrar todas las ids de todas las citas de forma más cómoda
			var dni = prompt("Introduce tu DNI: ");
			var contador = 0;
			for (var i = 0; i < listaCitasMedicas.length; i++) {
				if (dni == listaCitasMedicas[i].dniUsuario) {
					citasUsuario.push(i);
					contador++;
				}
			}
			if (contador == 0) {
				var mensaje = document.createElement("p");
				mensaje.textContent = "No hay ninguna cita asignada a este DNI: " + dni;
				document.body.appendChild(mensaje);
			} else {
				var mensaje = document.createElement("p");
				mensaje.textContent = "Usuario con DNI: "+dni+". Aqui tienes el listado de tus citas, además tienes la opcion de eliminar la cita que desea:";
				document.body.appendChild(mensaje);
				// Crear un elemento <select> para mostrar todas las citas disponibles para el usuario
				var selectCitas = document.createElement("select");
				selectCitas.id = "selectCitas";
				document.body.appendChild(selectCitas);
				// Crear una opción para cada cita disponible para el usuario
				for (var i = 0; i < citasUsuario.length; i++) {
					var optionCita = document.createElement("option");
					optionCita.value = citasUsuario[i];
					optionCita.textContent = "ID_cita: " + citasUsuario[i] + ", Centro: " + listaCitasMedicas[citasUsuario[i]].idCentroMedico + ", Consulta: " + listaCitasMedicas[citasUsuario[i]].idConsulta + ", Médico: " + listaCitasMedicas[citasUsuario[i]].idMedico + ", Fecha: " + listaCitasMedicas[citasUsuario[i]].fecha;
					selectCitas.appendChild(optionCita);
				}
				// Crear un botón para borrar la cita seleccionada
				var btnBorrarCita = document.createElement("button");
				btnBorrarCita.textContent = "Borrar cita seleccionada";
				btnBorrarCita.addEventListener("click", function() {
					var idCitaSeleccionada = selectCitas.value;
					listaCitasMedicas.splice(idCitaSeleccionada, 1); // borro la cita de lista
					mensaje.textContent = "Cita eliminada correctamente.";
					selectCitas.remove(); // elimino el select
					btnBorrarCita.remove(); // elimino el botón
				});
				document.body.appendChild(btnBorrarCita);
			}
		}
	

