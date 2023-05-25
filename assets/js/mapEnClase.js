// ejercicio 1
let numeros = [1, 2, 3, 4, 5, 6];
let unoMenos = numeros.map(elemento => elemento - 1);
console.log(unoMenos);

//ejercicio 2
let cuantoFalta = numeros.map(elemento => 100 - elemento);
console.log(cuantoFalta);

//ejercicio 1.1
unoMenos = numeros.map(function(elemento) {
    return elemento -1;
});
console.log(unoMenos);

//ejercicio 3
let multiploDeTres = numeros.map(function(elemento) {
    return elemento % 3 === 0;
});
console.log(multiploDeTres);

//ejercicio 4
let mayorQueTres = numeros.map(function(elemento){
    if (elemento > 3) { 
        return elemento; 
    } 
}).filter(function(elemento){
    return elemento !== undefined;
})
console.log(mayorQueTres);