function sum(){
	let suma =10.25+0.75;
	document.writeln("suma=10.25+0.75= "+suma);
	document.write("El tipo es: "+typeof(suma));
}

function sum2(){
	let numero1 = 23;
	let numero2 = 34;
	let resultadoOperacion = numero1 + numero2;
	console.log(resultadoOperacion);
	document.writeln(resultadoOperacion = numero1 + numero2);
}

function par1(){	
	let operacion = 46 + 8 * 2 / 2 + 46;
	console.log(operacion);
	document.writeln("No haria falta colocar paréntesis para que de 100");
	document.writeln("operacion = 46 + 8 * 2 / 2 + 46= "+operacion)
}

function par2(){	
	let operacion = 46 + 8 * 2 / (2 + 46);
	console.log(operacion);
	document.writeln("operacion = 46 + 8 * 2 / (2 + 46)= "+operacion);
}