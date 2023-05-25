const prompt = require('prompt-sync')();

//ejercicio 1
/*
let altura = parseFloat(prompt('Ingrese la altura de la pared: '));
let largo = parseFloat(prompt('Ingrese el largo de la pared: '));
let area = Math.ceil(altura*largo);
let bloque = 0.5;
console.log(`La pared mide ${area} m2, para construirla se necesitan ${area/bloque} bloques.`);

//ejercicio 2
let precioCosto = 30;
let ganancia = precioCosto * 0.4;
let precioVenta = Math.round(ganancia + precioCosto);
console.log(`El precio de venta es de USD ${precioVenta}`);

//ejercicio 3
let xA = parseInt(prompt('Ingrese el valor en x para el punto A: '));
let yA = parseInt(prompt('Ingrese el valor en y para el punto A: '));
let xB = parseInt(prompt('Ingrese el valor en x para el punto B: '));
let yB = parseInt(prompt('Ingrese el valor en y para el punto B: '));
let distanciaX = Math.sqrt(Math.pow((xA - xB), 2));
let distanciaY = Math.sqrt(Math.pow((yA - yB), 2));
let distanciaFinal = Math.sqrt(Math.pow(distanciaX, 2) + Math.pow(distanciaY, 2));
console.log(`La distancia entre A y B es de ${distanciaFinal.toFixed(2)} cm`);
*/

let newArray = [16, 68, 95, 69, 75, 14, 83, 34, 76, 89];
let primero = newArray[5];
let imprimir = function(elemento) {
    console.log('Imprimiendo desde la funcion anonima el numero ' + elemento);
}
imprimir(primero);
