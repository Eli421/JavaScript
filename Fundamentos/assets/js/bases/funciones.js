

function saludar(nombre) {
    console.log('Hola' + nombre ) ;
}


const saludar2 = function(nombre) {
    console.log('Hola' + nombre ) ;
}


const saludarFlecha = () => {
    console.log('Hola Flecha');
}
const saludarFlecha2 = (nombre) => {
    console.log('Hola Flecha' + nombre ) ;
}

// saludar(' Eli');
// saludar2(' Eli')

// saludarFlecha();
// saludarFlecha2(' Pandy');


// const sumar2 = (a,b) => a+b;

// function getAleatorio() {
//     return Math.random();
// }

const getAleatorio = () => Math.random();

console.log(getAleatorio());