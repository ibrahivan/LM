var ventana;
function abrir(){
  ventana = window.open("https://github.com/ibrahivan/LM", "ventana1" , "width=300,height=600,scrollbars=NO");
}

function cerrar(){
	ventana.close();
}

setTimeout(cerrar, 5000);

 