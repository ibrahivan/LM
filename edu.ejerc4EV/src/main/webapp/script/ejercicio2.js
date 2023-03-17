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
document.write("Altura polígono: "+pol.altura+" cm<br>");
document.write("Ancho polígono: "+pol.ancho+" cm<br>");

class Cuadrado extends Poligono{
	constructor(lado){
		super(lado,lado);
		this.nombre="Cuadrado";	
	}
	calculoArea(){
		return this.altura*this.ancho;
	}

}
var cua= new Cuadrado(20);
document.write("Área cuadrado= "+cua.calculoArea()+" cm^2.");

