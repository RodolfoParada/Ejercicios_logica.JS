/*
#7 INVIRTIENDO CADENAS.

 * Crea un programa que invierta el orden de una cadena de texto
 * sin usar funciones propias del lenguaje que lo hagan de forma automática.
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
 */

/*
El método .charAt() es un método de los objetos de tipo String en JavaScript que se utiliza para obtener un carácter 
específico en una posición determinada de una cadena de texto.
*/

function invertirCadena(texto) {
    let resultado = '';  // Variable para almacenar la cadena invertida
    // con esto texto.length - 1 recorremos la cadena de texto desde el último carácter hasta el primero
    for (let i = texto.length - 1; i >= 0; i--) {
        resultado += texto.charAt(i);  // Concatenamos cada carácter al resultado
    }
    return resultado;
}

const texto = "Rodolfo Jacob Parada González";  // Cadena de texto de ejemplo
const textoInvertido = invertirCadena(texto);
console.log(textoInvertido);  // Imprime el texto invertido

/*
Explicación:
La función invertirCadena recorre la cadena de texto de derecha a izquierda utilizando un bucle for.
En cada iteración, se obtiene el carácter correspondiente con texto.charAt(i) y se agrega a la variable 
resultado, que va acumulando los caracteres en orden invertido.
Finalmente, el programa imprime el texto invertido usando console.log().
*/