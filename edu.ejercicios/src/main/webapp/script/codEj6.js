function ej6(){
	let n =prompt("Indique numero para calcularle el factorial");
	let factorial=1;
	for(let i =1; i<=n ;i++)
		 factorial=factorial*i;
	document.write("El factorial es "+n+"!="+factorial);
}