// paso por referencia en js
// objetos (arrays, funciones, objetos)se pasan por referencia

function cambiarValor(parametro){
    parametro[0] = 20
    console.log("parametro", parametro);
}

let arreglo = [10];
console.log(`antes de la función: ${arreglo[0]}`);
cambiarValor(arreglo);
console.log(`después de la función: ${arreglo[0]}`);