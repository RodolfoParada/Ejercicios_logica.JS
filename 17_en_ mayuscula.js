/*
#17 EN MAYÚSCULA

 * Crea una función que reciba un String de cualquier tipo y se encargue de
 * poner en mayúscula la primera letra de cada palabra.
 * - No se pueden utilizar operaciones del lenguaje que
 *   lo resuelvan directamente.
 */
function capitalizarPalabras(texto) {
  let resultado = '';
  let nuevaPalabra = true;

  for (let i = 0; i < texto.length; i++) {
    const char = texto[i];

    if (nuevaPalabra && char >= 'a' && char <= 'z') {
      // Convertir letra minúscula a mayúscula manualmente
      const mayuscula = String.fromCharCode(char.charCodeAt(0) - 32);
      resultado += mayuscula;
      nuevaPalabra = false;
    } else {
      resultado += char;
      // Si el caracter actual es un espacio, la próxima será una nueva palabra
      nuevaPalabra = (char === ' ');
    }
  }

  return resultado;
}

// Ejemplo de uso
const texto = "hola mundo desde javascript";
console.log(capitalizarPalabras(texto));  // "Hola Mundo Desde Javascript"
