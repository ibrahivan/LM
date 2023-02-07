function ejemplo(){
	let array =["Hola","mundo","sevillista"];
	let pos0=array[0];
	let pos1=array[1];
	let pos2=array[2];
	document.write("El array es [Hola,mundo,sevillista]"+"<br>")
	document.write(pos0+pos1+pos2);
}

function ejemplo2(){
	let partes = ["posiciones", "se cuentan", "Las", "array", "cero.", "a partir", "del"];
	document.write("El array es [posiciones, se cuentan, Las, array, cero., a partir, del]"+"<br>");
	document.write("Ordenado seria: <br>")
	document.write(partes[2]+" "+partes[0]+" "+partes[6]+" "+partes[3]+" "+partes[1]+" "+partes[5]+" "+partes[6]+" "+partes[4]);
}