
/* 4. Crear un programa que pida al usuario una cantidad de días y que muestre su
equivalente en Años, Semanas y Días. Por ejemplo, si el usuario ingresa 373, el
resultado debe ser 1 año, 1 semana y 1 día.
Se debe considerar lo siguiente:
● 1 año tiene 365 días
● 1 semana tiene 7 días
Se recomienda usar la función Math.floor para obtener la parte entera de un número
decimal.
 */

const numer1 = parseInt(prompt("Ingrese Cantidad de dias.."));

const anio =  Math.floor(numer1/365);
const semana = Math.floor(numer1/7);
//console.log(anio)

document.write('<h3>La cantidad de Años de :'+' '+numer1+' es :'+anio+' años'+'</h3>');
document.write('<h3>La cantidad de Semanas de :'+' '+numer1+' es :'+semana+' semanas'+'</h3>');