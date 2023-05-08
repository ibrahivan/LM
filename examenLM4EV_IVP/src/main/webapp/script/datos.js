/**
 * Clase que representa a la entidad usuario y donde se define cuales son sus atributos, get y set
 */
class Usuario{
	
	constructor(nombre,apellidos,pregunta,respuesta,email,contraseña,verificar){
		this._nombre=nombre;
        this._apellidos=apellidos;
        this._pregunta=pregunta;
        this._respuesta=respuesta;
        this._email=email;
        this._contraseña=contraseña;
		this._verificar=verificar;
	}
	get nombre(){
		return this._nombres;
	}
	set nombre(valor){
		this._nombre=valor;
	}
    get apellidos(){
		return this._apellidos;
	}
	set apellidos(valor){
		this._apellidos=valor;
	}
	get pregunta(){
		return this._pregunta;
	}
	set pregunta(valor){
		this._pregunta=valor;
	}
	get respuesta(){
		return this._respuesta;
	}
	set respuesta(valor){
		this._respuesta=valor;
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
	get verificar(){
		return this._verificar;
	}
	set verificar(valor){
		this._verificar=valor;
	}
	
	
};

let listaUsuarios = []; //Array que nos sirve de base de datos
/**
 * Registra en la aplicación al usuario con los datos introducidos en el formulario.
 * 
 */
const registrarUsuario = (event) => {

	event.preventDefault();

    let nombre = document.getElementsByName('nombre')[0].value;
    let apellidos = document.getElementsByName('apellidos')[0].value;
    let pregunta = document.getElementsByName('pregunta')[0].value;
    let respuesta = document.getElementsByName('respuesta')[0].value;
    let email = document.getElementsByName('email')[0].value;
    let contraseña = document.getElementsByName('password')[0].value;
    let verificar = document.getElementsByName('verificar')[0].value;
    
    if (document.getElementsByName("password")[0].value!=document.getElementsByName("verificar")[0].value){
            alert('Las contraseñas no coinciden. Prueba de nuevo.');
            return false;
        }

	else{
		
	
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

    if (!document.getElementsByName('password')[0].validity.valid) {
            alert('Por favor ingresa una contraseña válida.');
            return false;
     }
     else if(document.getElementsByName("password")[0].value === ""){
     alert('Por favor ingresa una contraseña válida.');
      return false;
     }

     listaUsuarios.push(new Usuario(nombre,apellidos,pregunta,respuesta,email,contraseña,verificar));
	 alert("¡Usuario registrado correctamente!");
     localStorage.setItem('arrayDeUsers', JSON.stringify(listaUsuarios)); //Se guarda el array con la info de los usuarios registrados en el navegador en formato JSON
	 window.location.href = "iniciosesion.html";
	 return true;
	 }
	   
	
     
 };

/**
 * Función que comprueba que el usuario se encuentra registrado en la aplicación con el correo y la contraseña introducida
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
 * Función necesaria para que pueda confirmar que quiere cerrar sesión y salir
 */
const confirmarCerrarSesion = () => {
    if (confirm('¿Seguro que quiere cerrar sesión?')) {
        window.location.href = 'index.html';
    }
}
/**
 * Funcion que muestra la pregunta de seguridad
 */
function mostrar(){
	let listaUsers = localStorage.getItem("arrayDeUsers");
	listaUsers = JSON.parse(listaUsers);
	let mensaje = document.getElementById("mensaje");
	for (let i = 0; i < listaUsers.length; i++)
    	mensaje.innerHTML = listaUsers[i]._pregunta
}

/**Funcion que comprueba la respuesta a la pregunta de seguridad */
const recuperar = (event) => {

	event.preventDefault();
	let respuesta = document.getElementsByName('respuesta')[0].value;
	let listaUsers = localStorage.getItem("arrayDeUsers");
	listaUsers = JSON.parse(listaUsers);
	 for (let i = 0; i < listaUsers.length; i++) {
            if (respuesta!=listaUsers[i]._respuesta){
            alert('Respuesta incorrecta. Prueba de nuevo');
            return false;
        }
	
     else {
 	 window.location.href = "index.html";
	 return true;
	 }
 }
}