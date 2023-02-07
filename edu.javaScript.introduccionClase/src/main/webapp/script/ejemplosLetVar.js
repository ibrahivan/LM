var x = "global";
//EJEMPLO 1
function ejemplo1(){
	var a = 5;
	var b = 10;

	if (a === 5) {
  		let a = 4;
  		var b = 1;

  		document.write("let a en if: " + a); 
  		document.write(" || var b en if : " + b); 
	}

	document.write(" || var a fuera if: " + a);
	document.write(" || var b fuera if: " + b);
}

//EJEMPLO 2
function ejemplo2(){
	if (x) {
  		let foo;
  		//let foo;
	}
}

//EJEMPLO 3
function ejemplo31(){
  	var x = 31;
  	if (true) {
    	var x = 71;   
    	document.write("x como var dentro de if " + x);
  	} 
	document.write(" || x como var fuera del if " + x);
}
function ejemplo32(){
  	let x = 31;
  	if (true) {
    	let x = 71;
    	document.write("x como let dentro de if " + x); 
  	}
	document.write(" || x como let fuera del if " + x); 
}

//EJEMPLO 4
// La variable var que hay dentro de la función, está definida como global a nivel 
// de función, pero no de todo el archivo. Por eso al utilizar this.x sin haberla definido
// a nivel de archivo devuelvo error undefined.
/* Al definir una variable con let no está en el ámbito global, por lo tanto, this no la encuentra.
*/
function ejemplo4(){
	var x = 'globalperopoco';
	let y = 'global';
	document.write(this.x);
	document.write(this.y);
	document.write(x)
}