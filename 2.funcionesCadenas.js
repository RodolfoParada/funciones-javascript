
// cadenas y funciones en js
// cadenas inmutables en JS (no se pueden modificar su valor)

function cambiarValor(parametro){
 parametro = 'adios'; 
}

//Llamamos a la funcion
let argumento = 'Hola';
console.log(`antes funcion: ${argumento}`);
cambiarValor(argumento);
console.log(`despues funcion: ${argumento}`);