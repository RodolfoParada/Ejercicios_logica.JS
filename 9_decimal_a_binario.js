/*
#9 DECIMAL A BINARIO

 * Crea un programa se encargue de transformar un número
 * decimal a binario sin utilizar funciones propias del lenguaje que lo hagan directamente.
 */

/*
Esta función toma un número entero decimal como entrada y devuelve una cadena 
que representa su equivalente binario.
*/
function decimalABinario(decimal) {
    /*
    Si el número de entrada es 0, la función retorna directamente la cadena '0', 
    ya que su representación binaria es simplemente 0.
    */
    if (decimal === 0) return '0';
    
    /*
    Se inicializa una variable binario como una cadena vacía. Esta variable 
    almacenará el resultado de la conversión binaria.
    */
    let binario = '';

    /*
    Paso 1: Se ejecuta el bucle mientras el número decimal sea mayor que 0.
    Paso 2: Dentro del bucle:
    - decimal % 2 calcula el residuo de dividir el número decimal entre 2 
    (es decir, obtiene el bit menos significativo).
    - Este residuo se convierte en una cadena y se concatena al inicio de la 
    cadena binario.
    - decimal = Math.floor(decimal / 2) actualiza el valor de decimal, 
    dividiéndolo entre 2 y redondeando hacia abajo. 
    Esto avanza el proceso de conversión eliminando el bit procesado.
    */    while (decimal > 0) {
        binario = (decimal % 2) + binario;
        decimal = Math.floor(decimal / 2);
    }
    
    return binario;
}

// Ejemplo de uso
const numeroDecimal = 100;
const numeroBinario = decimalABinario(numeroDecimal);
console.log(`El número ${numeroDecimal} en binario es: ${numeroBinario}`);