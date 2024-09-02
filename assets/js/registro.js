const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	nombre: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras y espacios, pueden llevar acentos.
	apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	docu: /^\d{7,8}$/, // 7 a 14 numeros.
	telefono: /^\d{7,14}$/, // 7 a 14 numeros.
	fecha: /^(0[1-9]|[1-2]\d|3[01])(\/)(0[1-9]|1[012])\2(\d{4})$/
	
}

const campos = {
	nombre: false,
	apellido: false,
	password: false,
	correo: false,
	docu: false,
	telefono: false,
	fecha: false
	
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "apellido":
			validarCampo(expresiones.apellido, e.target, 'apellido');
		break;
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
			validarPassword2();
		break;
		case "password2":
			validarPassword2();
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		case "docu":
		 	validarCampo(expresiones.docu, e.target, 'docu');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
		case "fecha":
			validarCampo(expresiones.fecha, e.target, 'fecha');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

//Evaluamos los password si son iguales o no 
const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('password2');

	if(inputPassword1.value !== inputPassword2.value){
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['password'] = false;
	} else {
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['password'] = true;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});


formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const condicion__1 = document.getElementById('condicion__1');
	const condicion__2 = document.getElementById('condicion__2');
	const condicion__3 = document.getElementById('condicion__3');
	const foto= document.getElementById('foto');
	const selectElement = document.getElementById("inmueble");
	const terminos = document.getElementById('terminos');

	
	//pregunto si todos los campos estan completos, sies si activo el mensaje de exito para que sea removido en 5 segundos y ademas remuevo los iconos correctos y el mensaje de error al pie de la pagina de estar, de lo contrario activo el mensaje error al pie de la pagina
	if(campos.nombre && campos.apellido && campos.password && campos.correo  && campos.docu && campos.telefono && campos.fecha && (foto.value !== "") && (selectElement.selectedIndex !== 0) &&terminos.checked && (condicion__1.checked || condicion__2.checked || condicion__3.checked)){
	formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
		document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});


//Validacion de la carga de imagen
//function vacio(){
//	var archivoInput = document.getElementById('foto');
//	  if(foto.value == ""){
// 	   alert('Seleccione un Archivo');
// 	  return false;
// 	  }
// }

//Validacion de la extencion de la imagen a subir
function validarExt()
{
    var archivoInput = document.getElementById('foto');
    var files = document.getElementById('foto').files;
    var zero= document.getElementsByName('foto');
    var archivoRuta = foto.value;
    var extPermitidas = /(.png|.gif|.jpg|.jpeg)$/i;
    
 
    if(!extPermitidas.exec(archivoRuta)){
        alert('Solo se permiten formatos .png|.gif|.jpg|.jpeg');
        foto.value = '';
        return false;
    }
    if(zero.length=="") {
    	alert("selecciones un archivo");
    	return false;
    }
  
}