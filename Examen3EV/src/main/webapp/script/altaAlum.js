function ej1(){
	let nombre;
	let apellidos;
	let edad;
	
	//pedimos al usuario que introzca los siguientes datos
	nombre=prompt("Indique su nombre: ");
	apellidos=prompt("Indique sus apellidos:");
	edad=prompt("Indique su edad: ");
	//Nos aseguramos que sean del tipo que nos pide el ejercicio
	nombre=nombre.toString();
	apellidos=apellidos.toString();
	edad=Number(edad);
	//Mostramos en la ventana los diferentes datos
	document.write("Nombre y apellidos: "+ apellidos+", "+nombre+".<br>");
	document.write("Edad: "+edad+" años.<br>");
	document.write("Edad es un tipo: "+typeof(edad)+".");
	//Por si quiere comprobar el tipo de nombre y apellidos en consola
	console.log(typeof(nombre), +"\n"+typeof(apellidos));
}