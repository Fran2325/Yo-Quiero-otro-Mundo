function mialerta() {
    let hola= document.getElementById("saludo")
    if (hola) {
        alert("¡Bienvenido a mi mundo!");     
    }
} 
mialerta();

$( "button" ).click(function() {
  $( "section" ).hide( "drop", { direction: "down" }, "slow" );
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