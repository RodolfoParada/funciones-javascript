// paso por valor en  js
// pasando información de tipo primitivo(number, boolean, string); 
function cambiarValor(parametro){
    parametro = 20;
    console.log("referencia", parametro);
}
let argumento = 10; 
 cambiarValor()
console.log("argumento", argumento);