function ej3(){
	let edad = prompt("Introduzca su edad: ");
	if (edad<1||edad>100)
		alert("**ERROR** La edad no puede ser menor de 1 ni mayor de 100.");
	else if (edad>=18)
		 alert("Tiene permiso para acceder.");
	else 
		alert("No se permite acceso a menores de edad.");
}