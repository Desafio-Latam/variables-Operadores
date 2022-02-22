/*
2. Realizar operaciones con dos números.
Pedir al usuario que ingrese dos números diferentes y mayores a cero. Para ambos
números, calcular lo siguiente:
Suma
● Resta
● División
● Multiplicación
● Módulo

*/



const numer1 = parseInt(prompt("Ingrese Numero 1 mayor a cero"));
const numer2 = parseInt(prompt("Ingrese Numero 2 mayor a cero"));

const resta = numer1 - numer2;
const division = numer1 / numer2;
const multiplicacion = numer1 / numer2;
const modulo= numer1 % numer2;

if (numer1>0 || numer2>0) {
   
      document.write('<h3>Resta :'+' '+resta+'</h3>');
      document.write('<h3>Division :'+' '+division+'</h3>');
      document.write('<h3>Multiplicación :'+' '+multiplicacion+'</h3>');
      document.write('<h3>Modulo:'+' '+modulo+'</h3>');


console.log("resta : "+resta); 
console.log("Division : "+division); 
console.log("Multiplicación : "+multiplicacion); 
console.log("Modulo : "+modulo); 
} else {
    alert("Solo Numeros Mayores que cero")
}


