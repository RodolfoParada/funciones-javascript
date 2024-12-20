//Subcadenas en JS
let cadena3 = 'Hola Mundo';

//substring(inicio, fin); 
let cadena1 = cadena3.substring(5, 10);
console.log(cadena1); // Hola

for (let i = 0; i <= cadena3.length; i++) {
    console.log(cadena3.substring(5, i));
}