/*
#13 ¿ES UN PALÍNDROMO?
 * Escribe una función que reciba un texto y retorne verdadero o
 * falso (Boolean) según sean o no palíndromos.
 * Un Palíndromo es una palabra o expresión que es igual si se lee
  * de izquierda a derecha que de derecha a izquierda.
 * NO se tienen en cuenta los espacios, signos de puntuación y tildes.
 * Ejemplo: Ana lleva al oso la avellana.
 */

/*
Un palíndromo es una palabra, frase o número que se lee igual de izquierda a 
derecha que de derecha a izquierda, ignorando espacios, signos de puntuación 
y diferencias entre mayúsculas y minúsculas.
*/

function esPalindromo(texto){
    //Convertir el texto a minúsculas, eliminar espacios y caracteres no alfabéticos, además de tildes
    const textoProcesado = texto
        .toLowerCase() // Convertir todo a minúsculas
        .replace(/[\W_áéíóúÁÉÍÓÚ]/g, ''); // Eliminar espacios, signos de puntuación y tildes

    //Convertir el texto en un arreglo de caracteres, invertirlo y unirlo nuevamente
    const textoInvertido = textoProcesado.split('').reverse().join('');
    
    return textoProcesado === textoInvertido;
}

console.log(esPalindromo("Ana lleva al oso la avellana")); // true