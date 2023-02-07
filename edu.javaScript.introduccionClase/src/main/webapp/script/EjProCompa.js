
function ejemplo(){
	function persona(nombre, apellido,edad, deporte) {
  		this.nombre  =  nombre  ;
  		this.apellido  =  apellido  ;
  		this.deporte  =  deporte  ;
  		this.edad= edad;
	}
	var alumno = new persona('Ivan', 'Vazquez','23', 'Fútbol');

	
	window.alert(alumno.nombre+ " " + alumno.apellido+ " " +alumno.edad + " "+ alumno.deporte );

} 
