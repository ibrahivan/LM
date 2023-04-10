function guardar(){
    let mensaje = document.getElementsByName('tuMensaje')[0].value;
    document.write("Se guarda el mensaje " + mensaje);
}

/*function porciento(){
    let valor = document.getElementsByName('valor')[0].value;
    document.write("El 30% de "+ valor +" es: "+ valor*0.3);
    console.log("El 30% de "+ valor +" es: "+valor*0.3);
}
Lo voy a dejar comentado porque el siguiente paso es hacerlo
pasandole al javascript el formulario y es mas pro que esto
*/

function operar(form){
	let valor =form.valor.value
	form.resultado.value=eval(valor);
}