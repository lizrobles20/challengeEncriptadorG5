/* La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

Requisitos:

Debe funcionar solo con letras minúsculas

No deben ser utilizados letras con acentos ni caracteres especiales

Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original. */

function encriptar(){
    var mensaje = textoIngresado.value;
    var verificar = regex.test(mensaje);
    if ((mensaje != "") && (verificar == true)){
        var nuevo = mensaje
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
        mostrarTexto(nuevo);
        textoIngresado.value = "";
        textoIngresado.focus();
    } else {
        alert("Recuerda omitir mayúsculas, acentos o cualquier otro caracter especial");
        textoIngresado.value = "";
        textoIngresado.focus();
    }
}

function desencriptar(){
    var mensaje = textoIngresado.value;
    var verificar = regex.test(mensaje);
    if ((mensaje != "") && (verificar == true)){
        var nuevo = mensaje
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
        mostrarTexto(nuevo);
        textoIngresado.value = "";
        textoIngresado.focus();
    } else {
    alert("Recuerda omitir mayúsculas, acentos o cualquier otro caracter especial");
    textoIngresado.value = "";
    textoIngresado.focus();
    }
}

function mostrarTexto(mensaje){
    beforeResultado.style.display = "none";
    textoResultado.style.display = "block";

    resultado.value = mensaje;
    textoIngresado.focus();
}

function copiar(){
    navigator.clipboard.writeText(resultado.value);
    alert("Texto copiado al portapapeles!");

    beforeResultado.style.display = "block";
    textoResultado.style.display = "none";
    textoIngresado.focus();
}

const regex = /^[a-z0-9\s]*$/;
var textoIngresado = document.getElementById('txtarea-ingresar');
var resultado = document.getElementById("txtarea-resultado");
var beforeResultado = document.getElementById("before-resultado");
var textoResultado = document.getElementById("texto-resultado");

textoIngresado.focus();

var botonEncriptar = document.getElementById('btn-encriptar');
botonEncriptar.onclick = encriptar;

var botonDesencriptar = document.getElementById('btn-desencriptar');
botonDesencriptar.onclick = desencriptar;

var copiarTexto = document.getElementById('btn-copiar');
copiarTexto.onclick = copiar;



