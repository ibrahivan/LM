function ejemplo1(){
	 let numero = 12;
	 numero+=5;
	 document.write("Incrementa 5 al numero=12 <br>");
	 document.write("numero+=5 <br>");
	 document.write("Solucion= "+numero+"<br>");
	 document.write("Decrementa el resultado anterior en 1 <br>");
	 numero--;
	 document.write(numero+"-- <br>");
	 document.write("Simplifica multiplicacion = 10 * 10 * 10 * 10 * 10; <br>");
	 let multiplicacion = 10;
	 multiplicacion**=4;
	 document.write("multiplicacion=10<br>");
	 document.write("multiplicacion**=4")
	 document.write("<br>Solucion= "+multiplicacion+"<br>");
	 let resto =57409%16789;
	 document.write("Resto de 57409/16789= "+resto);
}

function ejemplo2(){
	    function coche(marca, modelo, anioFabricacion) {
          this.marca  =  marca  ;
          this.modelo  =  modelo  ;
          this.anioFabricacion  =  anioFabricacion  ;
    }
    var Vehiculo = new coche('Honda', 'Civic', 2010);
    var Vehiculo1 = new coche('Honda', 'Civic', 2010);
    let a1=Vehiculo == Vehiculo1 
    document.write(a1+"<br>");
    //no tiene sentido hacer esto para eso se ve con el type of
    
    var a5 = 'Cat' && 'Dog'; 
    document.write(a5 +"<br>");
    var o5 = 'Cat' || 'Dog';
    document.write(o5);
    
}