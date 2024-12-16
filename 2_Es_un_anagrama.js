/*
 #2 ¿ES UN ANAGRAMA?
 
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

 function sonAnagramas(palabra1, palabra2){
    //Convertir ambas palabras a minúsculas y eliminar espacios
    const palabra1Procesada = palabra1.toLowerCase().trim(); 
    const palabra2Procesada = palabra2.toLowerCase().trim();

    //Si las palabras son exactamente iguales, no son anagramas.
    if(palabra1Procesada === palabra2Procesada){
        return false; 
    }

    //Convertir las palabras en arreglos de caracteres, ordenarlos y unirlos nuevamente
    const palabra1Ordenada = palabra1Procesada.split('').sort().join('');
    const palabra2Ordenada = palabra2Procesada.split('').sort().join('');
 
   return palabra1Ordenada === palabra2Ordenada; 

 }

// Ejemplo de uso
console.log(sonAnagramas("enrique", "quieren"));
console.log(sonAnagramas("llenaba", "ballena"));
console.log(sonAnagramas("NEPAL", "PANEL")); 
console.log(sonAnagramas("España", "apañes")); 
console.log(sonAnagramas("Raza", "zara")); 



/*
toLowerCase() asegura que las palabras no sean afectadas por diferencias en mayúsculas/minúsculas.

trim() elimina espacios extra que puedan interferir al inicio y al final.

split(''): El método split('') convierte la cadena de texto en un arreglo, separando cada carácter 
como un elemento individual. El delimitador en este caso es una cadena vacía (''), lo que significa 
que cada letra será un elemento separado. convierte la palabra en un arreglo de caracteres.

sort(): el método sort() ordena los elementos de un arreglo. 
Para cadenas de texto, los elementos se ordenan según su valor Unicode,
 lo cual corresponde al orden alfabético. 
 entonces ordena las letras para facilitar la comparación.

join(''): El método join('') convierte un arreglo en una cadena de texto. El argumento que pases a 
join() será el separador entre los elementos. En este caso, el separador es una cadena vacía (''),
por lo que los elementos se unirán sin espacio. vuelve a juntar los caracteres en una palabra 
ordenada para comparar.
*/