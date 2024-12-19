/*
#15 ¿ES UN NÚNERO DE ARMSTRONG?

 * Escribe una función que calcule si un número dado es un número de Armstrong
 * (o también llamado narcisista).
 * Si no conoces qué es un número de Armstrong, debes buscar información
 * al respecto.
 */

/*

Un número de Armstrong o número narcisista es un número que es igual a la suma de sus 
propios dígitos elevados a la potencia del número total de dígitos del número.

Por ejemplo:
153 es un número Armstrong porque tiene 3 dígitos y si sumas cada uno de sus dígitos 
elevados a la potencia 3, obtienes el mismo número:

1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153     
 
*/ 

// Convertir el número a cadena
function numeroAmstrong(numero) {
    // obtener la longitud de la cadena.
    /*
    La función recibe un número (numero) y lo convierte a una cadena (num). 
    Esto permite acceder a cada uno de los dígitos individualmente, ya que
    ahora el número es tratado como un string.
    */
    let num = numero.toString();
    
  //Obtener longitud de la cadena.
    let longitud = num.length;
    /*
    La variable longitud almacena la cantidad de dígitos que tiene el número, 
    es decir, el número de caracteres en la cadena num.
    */
    
   // inicialización de la variable suma.}
   /*
   Se inicializa la variable suma en 0. Esta variable acumulará la suma de cada uno
   de los dígitos elevados a la potencia correspondiente.
   */
    let suma = 0;

  //Bucle para recorrer cada dígito:
  /*
  El bucle for recorre cada uno de los dígitos del número (que ahora están en la cadena 
  num). En cada iteración:
  num[i] accede al i-ésimo carácter de la cadena (un dígito).
  parseInt(num[i]) convierte ese carácter de nuevo a número.
  Math.pow(parseInt(num[i]), longitud) eleva ese dígito a la potencia de longitud, 
  es decir, al número total de dígitos.
  La operación suma += ... acumula los resultados en la variable suma.
  */
    for (let i = 0; i < longitud; i++) {
        suma += Math.pow(parseInt(num[i]), longitud);
    }
    // comprueba si la suma es igual al número original
    /*
    Finalmente, se compara la suma de los dígitos elevados con el número original. 
    Si son iguales, el número es un número de Armstrong y la función devuelve true, 
    de lo contrario, devuelve false.
    */
    return suma === numero;
}

console.log(numeroAmstrong(153)); // true