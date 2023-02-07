function ejemplo(){
	let alumnos = ["Alfonso","Alberto","Carlos","José María"];
	let alumno= alumnos [3].charAt(2); //el 4 nombre y la 3 letra
	document.writeln("[Alfonso,Alberto,Carlos,José María]: ");
	let alumno2= alumnos[3][2]; // se puede asi tb pq hace
	// matrices con cada posicion ,
	// es decir hace las posiciones multidimensionales
	
	document.writeln(alumno);
	document.writeln(alumno2)
}

function ejemplo2(){
	let array =[321,"Alberto"];
	let solucion1=array[0][1];
	let solucion2=array[1][1];
	document.write("[321,Alberto]"+"<br>"+solucion1+"<br>"+solucion2+"<br>");
	document.write("Tipo 1: "+typeof(array[0])+"<br>"+"Tipo 2: "+typeof(array[1]))
	
}