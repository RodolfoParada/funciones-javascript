// funciones recursivas 
//imprimir 3,2,1
function funcionRecursiva(numero){
    //case base
    if(numero == 1)
        console.log(numero);
    else{
            console.log(numero);
            funcionRecursiva(numero-1);
        }
    }
// llamamos la funcion recursiva
funcionRecursiva(3); //3,2,1