//Alcance de variables en JS
let variableGlobal = 5; 

variableGlobal = 10; 

//Definir funcion
function miFuncion(variableLocal){
    console.log("variableLocal", variableLocal); //variable local
 let variableGLobal = 20;   
}
miFuncion("variable local", variableGlobal);

console.log("log",variableGlobal); //10