function guardar(){
    let mensaje = document.getElementsByName('tuMensaje')[0].value;
    document.write("Se guarda el mensaje " + mensaje);
}

function porciento(){
    let valor = document.getElementsByName('valor')[0].value;
    document.write("El 30% de "+ valor +" es: "+ valor*0.3);
    console.log("El 30% de "+ valor +" es: "+valor*0.3);
}