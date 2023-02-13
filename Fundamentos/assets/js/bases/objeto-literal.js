

let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat:34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    }
};


console.log(personaje);
console.log('Nombre', personaje.nombre);
console.log('Nombre', personaje['nombre']);

console.log('Coords', personaje.coords.lat);

console.log('No. trajes', personaje.trajes.length);

console.log('Ultimo traje', personaje.trajes[personaje.trajes.length - 1]);

const x = 'vivo' //Es como si estuviera preguntando si esta vivo?

console.log('Vivo:', personaje[x]);

////////////////////////////////

//para borrar algo dentro del objeto:

delete personaje.edad;

console.log(personaje);


// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Object