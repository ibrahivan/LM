const medicos = ["Ana García", "María Fernández", "Laura Torres", "Luis González", "Javier Rodríguez", "Miguel Martínez"];
const centros = ["Hospital Virgen del Rocío", "Hospital Quirón Sagrado Corazón", "Hospital Virgen Macarena", "Hospital de San Lázaro"];

class Usuario {
  constructor(nombre, apellidos, edad, telefono, direccion, id, medico, centro) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.edad = edad;
    this.telefono = telefono;
    this.direccion = direccion;
    this.id = id;
    this.medico = medico;
    this.centro = centro;
    this.citas = [];
  }
}

const usuarios = [];

function registrarUsuario() {
  let nombre = document.getElementById("nombre").value;
  let apellidos = document.getElementById("apellidos").value;
  let edad = parseInt(document.getElementById("edad").value);
  let telefono = parseInt(document.getElementById("telefono").value);
  let direccion = document.getElementById("direccion").value;

  if (nombre && apellidos && !isNaN(edad) && !isNaN(telefono)) {
    let id = usuarios.length + 1;
    let medico = medicos[Math.floor(Math.random() * medicos.length)];
    let centro = centros[Math.floor(Math.random() * centros.length)];
    let fecha = prompt("Introduzca la fecha de la cita (formato DD/MM/AAAA)");

    if (fecha) {
      let citaId = Math.floor(Math.random() * 1000000) + 1;
      let usuario = new Usuario(nombre, apellidos, edad, telefono, direccion, id, medico, centro);
      usuario.citas.push({ id: citaId, medico: medico, centro: centro, fecha: fecha });
      usuarios.push(usuario);
      alert(`Se ha registrado al usuario ${nombre} correctamente y se ha agregado una cita con el médico ${medico} en el centro ${centro} para el ${fecha}`);
    } else {
      alert("Debe introducir una fecha válida para la cita.");
    }
  } else {
    alert("Por favor, llene todos los campos requeridos correctamente.");
  }
}

function listarCitas(usuarioId) {
  let citasHtml = "";
  let usuario = usuarios.find(u => u.id === usuarioId);

  if (usuario && usuario.citas.length > 0) {
    for (let i = 0; i < usuario.citas.length; i++) {
      citasHtml += `<div class="cita">
        <p>Fecha: ${usuario.citas[i].fecha}</p>
        <p>Médico: ${usuario.citas[i].medico}</p>
        <p>Centro: ${usuario.citas[i].centro}</p>
        <button onclick="eliminarCita(${usuario.id}, ${usuario.citas[i].id})">Eliminar cita</button>
      </div>
      `;
    }
    document.getElementById("citas").innerHTML = citasHtml;
} else {
citasHtml = "<p>No hay citas agendadas.</p>";
document.getElementById("citas").innerHTML = citasHtml;
}
}

function eliminarCita(usuarioId, citaId) {
let usuario = usuarios.find(u => u.id === usuarioId);
let citaIndex = usuario.citas.findIndex(c => c.id === citaId);

if (citaIndex !== -1) {
let medico = usuario.citas[citaIndex].medico;
let centro = usuario.citas[citaIndex].centro;
let fecha = usuario.citas[citaIndex].fecha;
usuario.citas.splice(citaIndex, 1);
alert("Se ha eliminado la cita con el médico ${medico} en el centro ${centro} para el ${fecha}");
listarCitas(usuarioId);
} else {
alert("No se ha encontrado la cita.");
}
}
