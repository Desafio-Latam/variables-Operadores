/* 3. Crear un programa que pida al usuario ingresar la temperatura en grados Celsius y
que la transforme a grados Kelvin y Fahrenheit.
Se debe considerar la siguiente información respecto a la equivalencia de las
escalas de temperatura:
● 0 Grados Celsius corresponden a 273,15 Kelvin. La fórmula para convertirlos
es 0 °C + 273.15 = 273.15 K
● 0 Grados Celsius corresponden a 32 Fahrenheit. La fórmula para convertirlos
es (0 °C × 9/5) + 32 = 32 °F
 */


const celcius = parseInt(prompt("Ingrese Temp. en grados Celcius"));

if (celcius > 0 ) {
    const kelvin = celcius * 273.15;
    const faren = ((celcius*9)/35)+32;

 document.write('<h3>'+celcius+' '+'Grados Celcius Equivalen a:</h3>');
    document.write('<h3>En Grados Kelvin :'+' '+kelvin+'</h3>');
    document.write('<h3>En Grados Fahrenheit:'+' '+faren+'</h3>');
}