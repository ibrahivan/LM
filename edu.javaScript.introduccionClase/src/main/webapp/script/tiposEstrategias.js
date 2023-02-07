
 function ejemplo1(){
	let es = true;
    document.write(typeof(es));
    document.write(es);
	}
 
 function ejemplo2(){
	let numeroGrande = 4567891324657987654;
	let numeroGrandeCasteado = BigInt(987654321654987654);

	document.write(typeof(numeroGrande));
	document.write(numeroGrande);
	document.write(typeof(numeroGrandeCasteado));
	document.write(numeroGrandeCasteado);
	}
	
function ejemplo3(){
	 let variable1 = 10;
     let variable2 = 5.3;

     document.write(typeof(variable1));
     document.write(typeof variable2);
}

function ejemplo4(){
	 let texto = "Soy un string";
     document.write(typeof(texto));
     document.write(texto);
}

function ejemplo5(){
	 let variableVacia;
     document.write(variableVacia);
     document.write(typeof(variableVacia));
}

function ejemplo6(){
     let nulo = null;
     document.write(nulo);
     document.write(typeof(nulo));
}

function ejemplo7(){
	 let Objeto = new Object();
     document.write(Objeto);
}

function ejemplo8(){
	function coche(marca, modelo, anioFabricacion) {
  		this.marca  =  marca  ;
  		this.modelo  =  modelo  ;
  		this.anioFabricacion  =  anioFabricacion  ;
	}
	var vehiculo = new coche('Honda', 'Civic', 2010);

	document.write(vehiculo instanceof coche);
	document.write(vehiculo instanceof Object);
	document.write(vehiculo);
	document.write(vehiculo.marca);
}