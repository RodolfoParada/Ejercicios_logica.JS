/*
#10 CÓDIGO MORSE

 * Crea un programa que sea capaz de transformar texto natural a código
 * morse y viceversa.
 * - Debe detectar automáticamente de qué tipo se trata y realizar
 *   la conversión.
 * - En morse se soporta raya "—", punto ".", un espacio " " entre letras
 *   o símbolos y dos espacios entre palabras "  ".
 * - El alfabeto morse soportado será el mostrado en
 *   https://es.wikipedia.org/wiki/Código_morse.
 */

/*
El objeto morseCode actúa como un diccionario donde cada letra, número y 
espacio tiene un valor correspondiente en código Morse.
*/
const morseCode = {
    'A': '•-', 'B': '-•••', 'C': '-•-•', 'D': '-••', 'E': '•', 'F': '••-•',
    'G': '--•', 'H': '••••', 'I': '••', 'J': '•---', 'K': '-•-', 'L': '•-••',
    'M': '--', 'N': '-•', 'O': '---', 'P': '•--•', 'Q': '--•-', 'R': '•-•',
    'S': '•••', 'T': '-', 'U': '••-', 'V': '•••-', 'W': '•--', 'X': '-••-',
    'Y': '-•--', 'Z': '--••', '1': '•----', '2': '••---', '3': '•••--',
    '4': '••••-', '5': '•••••', '6': '-••••', '7': '--•••', '8': '---••',
    '9': '----•', '0': '-----', ' ': '  '
};

const textToMorse = (text) => {
    return text.toUpperCase() // Convierte el texto a mayúsculas.
    .split('')               // Divide el texto en un array de caracteres.
    .map(char => morseCode[char] || '') // Convierte cada caracter a código Morse.
    .join(' ');             // Une los códigos Morse con un espacio entre ellos.
};

const morseToText = (morse) => {
    /*
    El método reduce en JavaScript se utiliza para iterar sobre un arreglo y reducirlo a un solo valor, 
    aplicando una función acumuladora a cada elemento. Este método es muy útil para operaciones como sumar, 
    concatenar, o calcular valores complejos a partir de un arreglo.
    */
    const morseToChar = Object.entries(morseCode).reduce((acc, [key, value]) => {
        acc[value] = key; // Intercambia las claves y valores del objeto morseCode.
        return acc;
    }, {});
    return morse.split(' ')  // Divide el código Morse en un array de códigos.
                .map(code => morseToChar[code] || '') // Convierte cada código a un caracter.
                .join(''); // Une los caracteres sin espacios entre ellos.
};

// Detecta si la entrada es texto o código Morse y llama a la función adecuada.
const detectAndConvert = (input) => {
    if (input.includes('•') || input.includes('-')) {  // Detecta si es código Morse.
        return morseToText(input);
    } else { // Si no es código Morse, se asume que es texto.
        return textToMorse(input);
    }
};

// Ejemplo de uso
const texto = "Hola mundo ";
const morse = "`•••• --- •-•• •- -- ••- -• -•• --- •••••";

const frase = "Rodolfo Parada eres un genio";
console.log(`'texto convertido',${frase} ${textToMorse(frase)}`); // Convierte texto a morse

console.log("texto",detectAndConvert(texto)); // Convierte texto a morse
console.log("morse",detectAndConvert(morse)); // Convierte morse a texto