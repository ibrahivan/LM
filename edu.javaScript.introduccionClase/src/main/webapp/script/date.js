function ejemplo1(){
	let date = new Date(Date.parse("2012-01-26T13:51:50.417-07:00"));
	let date1=new Date(2011, 0, 1);
	let date2=new Date("2017-01-26");
	
document.write(date+"<br>");
document.write(Date.now()+"<br>");
document.write(date1+"<br>");
document.write(date2+"<br>");
}