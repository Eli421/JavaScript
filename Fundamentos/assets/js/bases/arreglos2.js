
let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
console.log('Largo:', juegos.length);

let primero = juegos[0];

let ultimo = juegos [juegos.length - 1]; 

console.log(primero, ultimo);

juegos.forEach((elemento, indice, arr) => {console.log({elemento, indice, arr});

});


let nuevaLongitud = juegos.push('F-zero'); //Agrega un elemento al final de un arreglo

console.log({nuevaLongitud, juegos}); 

nuevaLongitud = juegos.unshift('Fire Emble'); //Agrega un elemento al principio del arreglo
console.log({nuevaLongitud, juegos});

let juegoBorrado = juegos.pop();
console.log({juegoBorrado, juegos}); //Elimina el ultimo elemento del arreglo

let pos = 1;

let juegosBorrados = juegos.splice(pos, 2); 
console.log({juegosBorrados, juegos}); //Elimina elementos a partir de una posicion.

let metroidIndex = juegos.indexOf('Metroid');
console.log(metroidIndex);