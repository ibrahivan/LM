function ej4(){
	var valores = [true, 5, false, "hola", "adios", 2];
	document.write("¿Cuál es mas largo: 'hola' o 'adios'?: <br>");
	//Apartado 1. Comparo los tamaños de ambas palabras y escribe cual sea mayor
	 if (valores[3].length>valores[4].length)
		 document.write(valores[3]+ "<br>");			
	 else
		document.write(valores[4] + "<br>");
	//Apartado 2
	document.write("true && false= "+ (valores[0]&&valores[2])+"<br>");
	document.write("true || false= "+ (valores[0]||valores[2])+"<br>");
	//Apartado 3
	document.write("5+2= "+(valores[1]+valores[5])+"<br>");
	document.write("5-2= "+(valores[1]-valores[5])+"<br>");
	document.write("5*2= "+valores[1]*valores[5]+"<br>");
	document.write("5/2= "+valores[1]/valores[5]+"<br>");
	document.write("5%2= "+valores[1]%valores[5]+"<br>");
	//Apartado 4
	let numero = valores[1];
	let numero1 = valores[1];
	numero++;
	numero1--;
	document.write("Incremento primer valor numerico= "+ numero +"<br>");
	document.write("Decremento primer valor numerico= "+numero1 +"<br>");
	//Apartado 5
	let num =valores[5];
	let num1= valores[1];
	document.write("2^5= "+(num**=num1))
}