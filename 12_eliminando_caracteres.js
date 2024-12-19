/*
#12 ELIMINANDO CARACTERES

 * Crea una función que reciba dos cadenas como parámetro (str1, str2)
 * e imprima otras dos cadenas como salida (out1, out2).
 * - out1 contendrá todos los caracteres presentes en la str1 pero NO
 *   estén presentes en str2.
 * - out2 contendrá todos los caracteres presentes en la str2 pero NO
 *   estén presentes en str1.
 */

// inicialicación del método eliminarCaracteres
function eliminarCaracteres(str1, str2) {
/*
out1 y out2 se inicializan como cadenas vacías. Aquí almacenaremos los 
caracteres únicos correspondientes.
*/
  let out1 = " ";
  let out2 = " ";

  //Filtrar caracteres únicos de str1
  /*
  Recorremos cada carácter de str1 usando un bucle for...of.
  En cada iteración, verificamos si el carácter actual (char) no está 
  presente en str2 usando str2.includes(char).
  Si el carácter no está en str2, lo añadimos a out1 (out1 += char).
  */
  for (const char of str1) {
    if (!str2.includes(char)) {
        out1 += char;
    }
}
  //Filtrar caracteres únicos de str2
  /*
  recorremos cada carácter de str2 usando un bucle for...of.
  Verificamos si el carácter actual (char) no está presente en str1 usando 
  str1.includes(char).
  Si el carácter no está en str1, lo añadimos a out2 (out2 += char).

  */
for (const char of str2) {
    if (!str1.includes(char)) {
        out2 += char;
    }
}

console.log(`out1: ${out1}`);
console.log(`out2: ${out2}`);
}

eliminarCaracteres("abcdef", "acfghi");