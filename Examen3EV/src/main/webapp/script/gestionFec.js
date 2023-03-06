function ej2(){
	//Construimos el objeto Date para fecha y horas actuales en GMT (horario Europa Central)
	let ahora=new Date();
	//pedimos al usuario la ciudad a introducir, para que funcione escribir el nombre tal como pide, ucluso tilde
	let ciudad=prompt("Introduce una de las ciudades para calcula su fecha y hora actual. Las opciones son Madrid, París y Londres. (Escritas tal como se indica).");
	
	//He intentado controlar el error con esta parte de codigo, pero no me funcionaba.
	
//	while(ciudad!=="Madrid"||ciudad!=="París"||ciudad!=="Londres"){
//		alert("La ciudad introducida no es correcta.");
//		ciudad=prompt("Introduce una de las ciudades para calcula su fecha y hora actual. Las opciones son Madrid, París y Londres. (Escritas tal como se indica, inclusive tildes).");
//	}
	
	//Mostramos en la ventana la información. 
	//Londres tiene una hora menos que el resto. Se le añade 1 al mes ya que los meses empiezan en 0.
	if (ciudad=="Londres"){
		document.write ("Ciudad: "+ciudad+".<br>");
	document.write ("Fecha: "+ahora.getDate()+"-"+(ahora.getMonth()+1)+"-"+ahora.getFullYear()+"<br>");
	document.write ("Hora: "+(ahora.getHours()-1)+":"+ahora.getMinutes()+":"+ahora.getSeconds());
	}
	else {
	document.write ("Ciudad: "+ciudad+".<br>");
	document.write ("Fecha: "+ahora.getDate()+"-"+(ahora.getMonth()+1)+"-"+ahora.getFullYear()+"<br>");
	document.write ("Hora: "+ahora.getHours()+":"+ahora.getMinutes()+":"+ahora.getSeconds());
		}
}
	
