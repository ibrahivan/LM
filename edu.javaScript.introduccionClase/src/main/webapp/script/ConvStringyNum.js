/*¿Qué imprime por pantalla el siguiente bloque de código?*/
function ejemplo(){
let texto = "No soy un número";
let conversion= Number(texto);
document.write(typeof(conversion) + " " + conversion);
}

function ejercicio(){
	let num1= 7;
	let num2=19;
	let num3=8;
	let conca=num1.toString()+num2.toString()+num3.toString();
	let suma=num1+num2+num3;
	document.write("Los numeros son 7,19 y 8. <br>")
	document.write("Numeros concatenados: "+conca+" - Tipo: "+typeof(conca)+"<br>");
	document.write("Numeros sumados: "+suma+" - Tipo: "+typeof(suma));
}