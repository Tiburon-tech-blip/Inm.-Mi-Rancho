
//clase 07

// let nombre =  prompt("Ingresa Tu Nombre") 
// let edad = parseInt(prompt("Ingresa Tu Edad"))
// alert("Hola "+ nombre + " de " + edad +" años, te interesaria adquirir tickets")

//*******************************************************


//clase 08

// let nombre = prompt("Cuál es tu nombre?").toUpperCase();
// const p = document.querySelector("#welcome");

// if (nombre =="") {
//     alert("Debes completar un nombre");
//     nombre= prompt("Ingresa de Nuevo el nombre").toUpperCase();
// }
//     else if (nombre.length < 2) {
//     nombre = prompt("Demasiado corto, dinos, cuál es realmente tu nombre?").toUpperCase();
// }

// p.textContent = "Hola, " + nombre;

//*********************************************************

//clase 09

let nombre = prompt("Cuál es tu nombre?").toUpperCase();
while (nombre.length < 3) {
    nombre = prompt(
        "Mmmm, tu nombre no puede ser tan corto, ingresa al menos 3 letras",
    ).toUpperCase();
}

const span = document.getElementById("welcome");
span.textContent = `Hola, ${nombre}`;
const i = document.querySelector("i");
i.setAttribute("class", "fa fa-ticket");