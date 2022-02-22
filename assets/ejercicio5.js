/* 5. Crear un programa que solicite al usuario 5 números y realice los cálculos que se
piden a continuación.
● La suma de todos los números.
● El promedio de los 5 números ingresados. */



const numer1 = parseInt(prompt("Ingrese Numero #1"));
const numer2 = parseInt(prompt("Ingrese Numero #2"));
const numer3 = parseInt(prompt("Ingrese Numero #3"));
const numer4 = parseInt(prompt("Ingrese Numero #4"));
const numer5 = parseInt(prompt("Ingrese Numero #5"));

const suma = numer1 + numer2 + numer3 + numer4 + numer5;
const promedio = Math.floor(suma / 5) ;


document.write('<h3>La Suma de los 5 Numeros Ingresados es:'+' '+suma+'</h3>');
document.write('<h3>El promedio de los 5 Numeros Ingresados es:'+' '+promedio+'</h3>');