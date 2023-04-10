function calPeso(form){
	let sexo=form.sexo.value;
	let altura= form.altura.value;
	let edad=form.edad.value;
	var peso;
	if (sexo=="hombre"||sexo=="Hombre")
		 peso=50+((altura-150)/4)*3 + (edad - 20)/4;
	
	else
	 	peso=(50+((altura-150)/4)*3 + (edad - 20)/4)*0.9;
	
	form.resultado.value=eval(peso)+" kg";
}