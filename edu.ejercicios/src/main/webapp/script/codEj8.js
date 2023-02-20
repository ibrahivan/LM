function ej8(){
	let cadena=prompt("Escribe una frase con mayúsculas, minúsculas o ambas");
	if (cadena==cadena.toUpperCase())
		document.write("La cadena es formada por mayúsculas");
	else if (cadena==cadena.toLowerCase())
		document.write("La cadena es formada por minúsculas");
	else
		document.write("La cadena es formada por mayúsculas y minúsculas");

}