
	class Segmento{
		constructor (a,b){
			this.a=prompt("Indique cual es el punto inicial del segmento");
			this.b=prompt("Indique cual es el punto final del segmento");
		}
		calculoLongSeg(){
			return this.b-this.a;
		}

	}

	let Seg=new Segmento();
	console.log("La distancia del segmento es de "+Seg.calculoLongSeg()+" cm.");
