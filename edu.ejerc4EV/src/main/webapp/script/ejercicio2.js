class Poligono{
	constructor(altura, ancho){
		this.altura=altura;
		this.ancho=ancho;
		this.nombre  =  "Polígono";
	}
	
	devuelveNombre(){
		return this.nombre;
	}
}

let pol = new Poligono(100,200);
console.log("Nombre: "+pol.devuelveNombre());
document.write("Altura: "+pol.altura+" cm<br>");
document.write("Ancho: "+pol.ancho+" cm<br>");

class Cuadrado extends Poligono{
	constructor(lado){
		super();
		this.nombre="Cuadrado";	
	}
	calculoArea(){
		return pol.altura*pol.ancho;
	}
	
}
let cua= new Cuadrado();
document.write("Área= "+cua.calculoArea()+" cm^2.");
