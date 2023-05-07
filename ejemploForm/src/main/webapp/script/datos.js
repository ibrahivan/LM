/**
 * Clase que representa a la entidad usuario y donde se define cuales son sus atributos y su funcionalidad (métodos)
 */
class Usuario{
	
	constructor(nombre,apellidos,email,contraseña,fechaNacimiento){
		this._nombre=nombre;
        this._apellidos=apellidos;
        this._email=email;
        this._contraseña=contraseña;
		this._fechaNacimiento=fechaNacimiento;
	}
	get nombre(){
		return this._nombres;
	}
	set nombre(valor){
		this._nombre=valor;
	}
    get apellidos(){
		return this._napellidos;
	}
	set apellidos(valor){
		this._apellidos=valor;
	}
	get email(){
		return this._email;
	}
	set email(email){
		this._email=email;
	}
    get contraseña(){
        return this._contraseña;
    }
    set contraseña(contraseña){
        this._contraseña=contraseña;

    }
	get fechaNacimiento(){
		return `${this._fechaNacimiento.getDate()}/${this._fechaNacimiento.getMonth()+1}/${this._fechaNacimiento.getFullYear()}`;
	}
	set fechaNacimiento(fecha){
		this._fechaNacimiento=fecha;
	}
	
	mostrarDatos(){	
		return `<br><h3>Datos de la persona</h3><br>Nombre: ${this._nombre + ", " + this._apellidos}<br>Correo eléctronico: ${this._email}<br>Fecha de nacimiento: ${this._fechaNacimiento}`;
	}  
};

let listaUsuarios = []; //Array que hace la función de base de datos para users registrados
/**
 * Registra en la aplicación al usuario con los datos introducidos en el formulario.
 * @param {*} event 
 * @returns 
 */
const registrarUsuario = (event) => {

	event.preventDefault();

    let nombre = document.getElementsByName('nombre')[0].value;
    let apellidos = document.getElementsByName('apellidos')[0].value;
    let email = document.getElementsByName('email')[0].value;
    let contraseña = document.getElementsByName('password')[0].value;
    let fechaNacimiento = document.getElementsByName("fecha")[0].value;

    if (!document.getElementsByName('nombre')[0].validity.valid) {
		alert('Por favor ingresa tu nombre.');
		return false;
	}
	else if (document.getElementsByName('nombre')[0].value === ''){
		alert('Por favor ingresa tu nombre.');
		return false;
	}

    if (!document.getElementsByName('apellidos')[0].validity.valid) {
		alert('Por favor ingresa tus apellidos.');
		return false;
	}
	else if (document.getElementsByName('apellidos')[0].value === ''){
		alert('Por favor ingresa tus apellidos.');
		return false;
	}


    if (!document.getElementsByName('email')[0].validity.valid ) {
		alert('Por favor ingresa un correo electrónico válido.');
		return false;
	}
	else if(document.getElementsByName("email")[0].value === ""){
		alert('Por favor ingresa un correo electrónico válido.');
		return false;
	}

    if(!emailEnUso(email))
    {
        if (!document.getElementsByName('password')[0].validity.valid) {
            alert('Por favor ingresa una contraseña válida.');
            return false;
        }
        else if(document.getElementsByName("password")[0].value === ""){
            alert('Por favor ingresa una contraseña válida.');
            return false;
        }
    
        if (!document.getElementsByName('fecha')[0].validity.valid) {
            alert('Por favor ingresa una fecha de nacimiento válida.');
            return false;
        }
        else if(document.getElementsByName("fecha")[0].value === ""){
            alert('Por favor ingresa una fecha de nacimiento válida.');
            return false;
        }
        listaUsuarios.push(new Usuario(nombre, apellidos, email, contraseña, new Date(fechaNacimiento)));
	    alert("Usuario registrado correctamente!");
        localStorage.setItem('arrayDeUsers', JSON.stringify(listaUsuarios)); //Se guarda el array con la info de los usuarios registrados en el navegador en formato JSON
	    return true;
    }
    else
        alert("El correo electronico ya está en uso. Prueba con otro.");
};

/**
 * Función que comprueba que el usuario se encuentra registrado en la aplicación con el correo y la contraseña introducida
 * @param {*} email 
 * @param {*} contraseña 
 * @returns true si en el array hay un usuario con el email y la contraseña introducida, en caso contrario false
 */
const verificarUsuario = (email, contraseña) => {
    let listaUsers = localStorage.getItem("arrayDeUsers"); //Se recupera los datos de usuarios registrados y para trabajar con ellos se parsea por que se encuentra en JSON
    listaUsers = JSON.parse(listaUsers);

    if(listaUsers === null || listaUsers === undefined) {
        return false;
    }
    else{
        for (let i = 0; i < listaUsers.length; i++) {
            if (listaUsers[i]._email === email && listaUsers[i]._contraseña === contraseña) {
                return true;
            }
        }
        return false;
    }  
};

/**
 * Ejecuta el inicio de sesión con la ayuda de la función verificarUsuario() y si se encuentra registrado el usuario en el sistema, redirige a la vista de bienvenida.html
 */
const iniciarSesion = (event) => {
    event.preventDefault();
    let email = document.getElementsByName('email')[0].value;
    let contraseña = document.getElementsByName('password')[0].value;
    
    // Verificar si el usuario está registrado
    let loginCorrecto = verificarUsuario(email, contraseña);
    
    if (loginCorrecto) {
        // Si el usuario está registrado, redirigir a la página de bienvenida
        alert("¡Inicio de sesión correcto!");
        window.location.href = "bienvenido.html";       
    } else  // Si el usuario no está registrado y/o introdujo mal sus datos, mostrar mensaje de error
        alert('Correo electrónico o contraseña incorrectos'); 
    
};
/**
 * Función para que no haya registros con el mismo email mas de una vez
 * @param {*} email 
 * @returns true si ya existe en el array y false si no
 */

const emailEnUso = (email) => {
    
    let listaUsers = localStorage.getItem("arrayDeUsers"); //Se recupera los datos de usuarios registrados y para trabajar con ellos se parsea por que se encuentra en JSON
    listaUsers = JSON.parse(listaUsers);
    
    if(listaUsers === null || listaUsers === undefined) 
        return false;
    else{
        for (let i = 0; i < listaUsers.length; i++) {
            if (listaUsers[i]._email === email) {
                return true;
            }
        }
    }
    return false;
};
/**
 * Función necesaria para que pueda confirmar que quiere cerrar sesión y salir
 */
const confirmarCerrarSesion = () => {
    if (confirm('¿Seguro que quiere cerrar sesión?')) {
        window.location.href = 'index.html';
    }
}
const mostrar = () => {
    let listaUsers = localStorage.getItem("arrayDeUsers"); //Se recupera los datos de usuarios registrados y para trabajar con ellos se parsea por que se encuentra en JSON
    listaUsers = JSON.parse(listaUsers);

    if(listaUsers.length===undefined)
		alert("No hay datos de usuarios registrados que mostrar");
	else{
		const div = document.getElementById("info"); //Guardamos el div con id info en una variable
        console.log(info);
		let tabla = '<table id="tablaUsuarios">'; //creamos una variable con un table tag
		tabla += '<tr><th>Nombre y apellidos</th><th>Fecha de nacimiento</th><th>Email</th><th>Contraseña</th></tr>'; //Concatenamos la cabecera de la tabla
		//recorremos la lista de usuarios dados de alta y añadimos un registro (<tr>/row/fila) para cada uno y mostramos los valores de cada campo en cada celda (<td>)
		for (let i = 0; i < listaUsers.length; i++) {
			tabla += `<tr><td>${listaUsers[i]._nombre + " "+ listaUsers[i]._apellidos}</td><td>${listaUsers[i]._fechaNacimiento}</td><td>${listaUsers[i]._email}</td><td>${listaUsers[i]._contraseña}</td></tr>`;
		}
		tabla += '</table>'; //concatenamos al final el cierre del tag table
		div.innerHTML = tabla; // se le asigna al div tla tabla construida
	}
};
  

