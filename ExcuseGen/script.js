let quien = ["Mi gato","Mi Perro","Un Ovni","El Compadre Moncho","Jorge Gonzalez"];
let hizo = ["enterro","quemo","envio por un tunel temporal","desintegro"];
let que = ["el informe","la facturacion","la cita de reunion","la guitarra"];
let cuando = ["ayer", "la semana pasada", "mientras revisaba la teoria terraplanista"];

var excusa_barata = quien[Math.floor(Math.random() * 5)] +" "+ hizo[Math.floor(Math.random() * 4)] +" "+ que[Math.floor(Math.random() * 4)] +" "+ cuando[Math.floor(Math.random() * 3)];


window.onload = function(){

document.getElementById("excuse").innerHTML = excusa_barata.toString();
}


