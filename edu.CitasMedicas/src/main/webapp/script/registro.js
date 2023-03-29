var datUsu=[];
class Usuario {
  constructor(nombre, apellidos, edad, telefono, direccion,idUsu) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.edad = edad;
    this.telefono = telefono;
    this.direccion = direccion;
    this.idUsu=idUsu;
    }
      static calculoIdUsuario(datUsu) {
		let auxiliar = 0;
		for(let i = 0; i< datUsu.length; i++) {
			let j = datUsu[i].idUsu;
			if(auxiliar<j) {
				auxiliar = j;
			}
		}
		return auxiliar + 1;
	
  }
}

  
function registrarUsu() {
  
  let nombre = prompt("Introduzca su nombre");
  let apellidos = prompt("Introduzca sus apellidos");
  let edad = prompt("Introduzca su edad");
  let telefono = prompt("Introduzca su teléfono");
  let direccion = prompt("Introduzca su dirección");

  if (nombre && apellidos && !isNaN(edad) && !isNaN(telefono)) {
    let usu = new Usuario(nombre, apellidos, edad, telefono, direccion);
    usu.idUsu= datUsu.length + 1;
    datUsu.push(usu);
  } else {
    alert("Por favor, llene todos los campos y use números para la edad y el teléfono.");
  }

  return datUsu;
}


function listarUsu() {
   	
  datUsu.forEach((usuario) => {
    document.getElementById("reg").innerHTML="Nombre: " +
        usuario.nombre +
        "<br/>Apellidos: " +
        usuario.apellidos +
        "<br/>Edad: " +
        usuario.edad +
        "<br/>Teléfono: " +
        usuario.telefono +
        "<br/>Dirección: " +
        usuario.direccion +
        "<br/>Id Usuario: " +
        usuario.idUsu +
        "<hr/><br>" ;
  });

}

