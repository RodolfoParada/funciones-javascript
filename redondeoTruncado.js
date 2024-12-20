//Redondeo y truncado en JS.

let numero = 8.5, redondeo, truncado;

// Redondeo.
// Math.round() redondea al número entero más cercano.
// .5 o superior, redondea el valor entero superior más cercano.
redondeo = Math.round(numero);
console.log(`Redondeo: ${redondeo}`); // 9

// Truncado.
// Math.trunc() elimina la parte decimal de un número.
truncado = Math.trunc(numero);
console.log(`Truncado: ${truncado}`); // 8

