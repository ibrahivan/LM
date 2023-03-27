
	class Vehiculo{
		constructor(marca,modelo,cilindrada)
		{
			this._marca=marca;
			this._modelo=modelo;
			this._cilindrada=cilindrada;
		}
		
		set marca(valor){
			this._marca=valor;
			
      	}

 		get marca(){
        	return this._marca;
		}
		 
		set modelo(valor){
			this._modelo=valor;
			
      	}

 		get modelo(){
        	return this._modelo;
		}
		 
		set cilindrada(valor){
			this._cilindrada=valor;
      	}

 		get cilindrada(){
        	return this._cilindrada;
        	
		}
}
	
	class Coche extends Vehiculo{
		constructor(nPuertas,nOcupantes,marca, modelo, cilindrada){
			super(marca, modelo, cilindrada);
			this._nPuertas=nPuertas;
			this.nOcupantes=nOcupantes;
		}
		set nPuertas(valor){
			this._nPuertas=valor;
      	}

 		get nPuertas(){
        	return this._nPuertas;
		 }
	
	}
	
	class Moto extends Vehiculo{
		constructor(AnioDisenio, carnet,marca, modelo, cilindrada){
			super(marca, modelo, cilindrada);
			this._AnioDisenio=AnioDisenio;
			this.carnet=carnet;
		}
		set AnioDisenio(valor){
			this._AnioDisenio=valor;
      	}

 		get AnioDisenio(){
        	return this._AnioDisenio;
		 }

	}
	
	let car= new Coche("5","5","Mercedes","CLA","220");
	
	let mt= new Moto("2010","A","Honda","500x","500");
	
	document.write(car.marca+" " + car.modelo+" "  + car.cilindrada+" "  + car.nOcupantes+" "  +car.nPuertas+" "  +"<br>");
	


