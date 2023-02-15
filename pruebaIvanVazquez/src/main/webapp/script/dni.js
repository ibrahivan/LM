var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
var dni=77929815;
var dni2=779298188888888;

function ej1(){
	let letra;
	if (dni<0||dni>99999999)
		alert("El número introducido no es correcto");
	else{
		letra=dni%23;
		console.log(dni+"\n"+letras[letra]);
		document.write("DNI: "+dni+"-"+letras[letra]);
		}
}

function ej2(){
	let letra;
	if (dni2<0||dni2>99999999)
		alert("El número introducido no es correcto");
	else{
		letra=dni%23;
		console.log(dni+"\n"+letras[letra]);
		document.write("DNI: "+dni+"-"+letras[letra]);
		}
}