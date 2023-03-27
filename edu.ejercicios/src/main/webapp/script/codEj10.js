function ej10(){
	let categoria=prompt("Introduzca alguna de estas categorias para aplicarle su descuento.\n1. Camisetas.\n2. Pantalones.\n3. Ropa interior.\n4. Chaquetones.\n5. Otra");
	var precio, desc;
	if (categoria==1)
	{
		document.write("Las camisetas tienen un 5% de descuento.<br>")
		precio=prompt("Indique el precio que desea gastar en camisetas");
		desc=precio*0.05;
		document.write("El precio final es de "+(precio-desc)+" €.");
	}
	else if (categoria==2)
	{
		document.write("Los pantalones tienen un 10% de descuento.<br>")
		precio=prompt("Indique el precio que desea gastar en pantalones");
		desc=precio*0.1;
		document.write("El precio final es de "+(precio-desc)+" €.");
	}
	else if (categoria==3)
	{
		document.write("La ropa interior no tiene descuento.<br>")
		precio=prompt("Indique el precio que desea gastar en camisetas");
		document.write("El precio final es de "+precio+" €.");
	}
	else if (categoria==4)
	{
		document.write("Los chaquetones tienen un 50% de descuento.<br>")
		precio=prompt("Indique el precio que desea gastar en chaquetones");
		desc=precio*0.5;
		document.write("El precio final es de "+(precio-desc)+" €.");
	}
	else if (categoria==5)
	{
		document.write("Cualquier otra categoria tiene un 2% de descuento.<br>")
		precio=prompt("Indique el precio que desea gastar en camisetas");
		desc=precio*0.02;
		document.write("El precio final es de "+(precio-desc)+" €.");
	}
	else
		alert("**ERROR** Introduzca alguna de las opciones correctas")
}