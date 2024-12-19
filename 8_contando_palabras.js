/*
#8 CONTANDO PALABRAS

 * Crea un programa que cuente cuantas veces se repite cada palabra
 * y que muestre el recuento final de todas ellas.
 * - Los signos de puntuación no forman parte de la palabra.
 * - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
 * - No se pueden utilizar funciones propias del lenguaje que
 *   lo resuelvan automáticamente.
 */

function contarPalabras(texto) {
    // Eliminar signos de puntuación y convertir a minúsculas
    const textoLimpio = texto.replace(/[^\w\s]/gi, '').toLowerCase();
    /*
    `replace(/[^\w\s]/gi, '').toLowerCase()` elimina los signos de puntuación y convierte el texto a minúsculas.
    Usa una expresión regular para eliminar cualquier carácter que no sea una palabra (\w) o un espacio (\s).
    [^\w\s] significa "todo lo que no sea una palabra o un espacio".
    gi son las banderas de la expresión regular:
    g: búsqueda global (aplica a todo el texto).
    i: insensible a mayúsculas y minúsculas.
    */ 
    
    // Dividir el texto en palabras
    /*
    `split(/\s+/)` divide el texto en palabras utilizando espacios en blanco como delimitadores.
    Divide el texto en un arreglo de palabras.
    La expresión regular \s+ significa "uno o más espacios en blanco" 
    (incluye espacios, tabulaciones y saltos de línea).  
     */    
    const palabras = textoLimpio.split(/\s+/);
    // Contar la frecuencia de cada palabra
    /*
    Un bucle `for` cuenta la frecuencia de cada palabra.
    const recuento = {}:
    Inicializa un objeto vacío para almacenar las palabras y sus frecuencias.
    for (const palabra of palabras):
    Itera sobre cada palabra en el arreglo palabras.
    if (recuento[palabra]):
    Comprueba si la palabra ya existe como una clave en el objeto recuento.
    Si existe, incrementa su valor en 1 (recuento[palabra]++).
    Si no existe, la añade con un valor inicial de 1 (recuento[palabra] = 1).
    */
    const recuento = {};
    for (const palabra of palabras) {
        if (recuento[palabra]) {
            recuento[palabra]++;
        } else {
            recuento[palabra] = 1;
        }
    }
    
    // Mostrar el recuento final.
    /*
    Object.entries(recuento):
    Convierte el objeto recuento en un arreglo de pares [clave, valor] (por ejemplo, 
    [["hola", 2], ["cómo", 1], ["estás", 1]]).
    for (const [palabra, cantidad] of Object.entries(recuento)):
    Itera sobre estos pares y usa la desestructuración para asignar cada clave a palabra y cada valor a cantidad.
    console.log():
    */
    for (const [palabra, cantidad] of Object.entries(recuento)) {
        console.log(`${palabra}: ${cantidad}`);
    }
}

// Ejemplo de uso
const texto = "Hola, hola! ¿Como estas? ESTOY BIEN bien, gracias. ¿Y tú, cómo estás?";
contarPalabras(texto);