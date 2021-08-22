// Funcion cuadro de bienvenida
function mialerta() {
    let hola= document.getElementById("saludo")
    if (hola) {
        alert("¡Bienvenido a mi mundo!");     
    }
} 
mialerta();


// funcion para ocultar y mostrar
$(document).ready(function(){
	$("#ocultar").click(function(){
		$('#target').hide(3000);
		$('.target').hide("ocultar");
	});
	$("#mostrar").click(function(){
		$('#target').show(3000);
		$('.target').show("mostrar");
	});
});



// funcion para cambiar el fondo de color
function generarNuevoColor(){
	var simbolos, color;
	simbolos = "0123456789ABCDEF";
	color = "#";

	for(var i = 0; i < 6; i++){
		color = color + simbolos[Math.floor(Math.random() * 16)];
	}

	document.body.style.background = color;
	document.getElementById("hexadecimal").innerHTML = color;
	document.getElementById("text").innerHTML = "Copiar Color";
}

function copiarAlPortapapeles(hexadecimal) {
	var aux = document.createElement("input");
	aux.setAttribute("value", document.getElementById(hexadecimal).innerHTML);
	document.body.appendChild(aux);
	aux.select();
	document.execCommand("copy");
	document.body.removeChild(aux);
	document.getElementById("text").innerHTML = "Copiado!";
}

// funcion para mostra fecha y hora
let dia= new Date();
document.getElementById("fecha").innerHTML=dia;

// Funcion para validar formulario
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    var nombre = document.getElementById('nombreId').value;
    if(nombre.length == 0) {
      alert('Ingresa tu nombre');
      return;
    }
	var apellido = document.getElementById('apellidosId').value;
    if(apellido.length == 0) {
      alert('Ingresa tu apellido');
      return;
    }
    var correo = document.getElementById('correoId').value;
    if (correo.length == 0) {
      alert('Ingrese un correo válido');
      return;
    }
    var mensaje = document.getElementById('mensaje').value;
    if (mensaje.length == 0) {
      alert('No haz escrito nada en el mensaje');
      return;
    }
    this.submit();
  }