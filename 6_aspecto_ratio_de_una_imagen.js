/*
#6 ASPERCT RATIO DE UNA IMAGEN

 * Crea un programa que se encargue de calcular el aspect ratio de una
 * imagen a partir de una url.
 * - Url de ejemplo:
 *   https://imgs.search.brave.com/Hk2gsXqiN21d_3_bgHw25OwdL9-DAKSeQdjvyt8KvOk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNi8x/Mi8yMy8xMi80MC9u/aWdodC0xOTI3MjY1/XzY0MC5qcGc
 * - Por ratio hacemos referencia por ejemplo a los "16:9" de una
 *   imagen de 1920*1080px.
 */

/*
El aspect ratio (relación de aspecto) es la proporción entre el ancho y la altura de una imagen, pantalla o video. Se expresa como una relación matemática, donde los números indican las dimensiones relativas de la anchura frente a la altura.

Por ejemplo:

16:9 es un aspect ratio común para televisores y videos en alta definición.
4:3 era más común en monitores y televisores antiguos.
1:1 es el aspect ratio de las imágenes cuadradas, como las de algunas redes sociales.
La relación de aspecto es importante porque determina cómo se verá una imagen o video 
en una pantalla o dispositivo. Si se cambia el aspect ratio sin ajustar el contenido, 
puede distorsionarse, estirarse o comprimir.
*/

/*
npm install image-size
*/
/*
se visualiza este programa en el index.html
*/

const fs = require('fs');// Es el módulo de Node.js que permite trabajar con el sistema de archivos, aunque en este caso no se usa.
const https = require('https');//  Permite realizar solicitudes HTTP sobre el protocolo seguro (HTTPS). Aquí se usa para descargar la imagen desde la URL proporcionada.
const sizeOf = require('image-size'); // Es una librería que permite obtener las dimensiones (ancho y alto) de una imagen desde un buffer.

// Función para calcular el aspect ratio
function calcularAspectRatio() {
    const urlImagen = document.getElementById('urlImagen').value;
    const img = new Image(); // Crear un nuevo objeto Image
  
    // cuando la imagen se carga correctamente el evento img.onload se dispara.
    img.onload = function() {
      // Obtener el ancho y alto de la imagen
      const ancho = img.width;
      const alto = img.height;
  
      // Calcular el máximo común divisor (MCD) para simplificar la relación
      const mcd = calcularMCD(ancho, alto);
  
      // Simplificar las dimensiones
      const ratioAncho = ancho / mcd;
      const ratioAlto = alto / mcd;
  
      // Mostrar el resultado en el HTML
      document.getElementById('resultado').textContent = `Aspect Ratio: ${ratioAncho}:${ratioAlto}`;
    };
  
    img.onerror = function() {
      document.getElementById('resultado').textContent = 'Error al cargar la imagen. Asegúrate de que la URL sea correcta.';
    };
  
    // Establecer la URL de la imagen
    img.src = urlImagen;
  }
  //Esta función implementa el algoritmo de Euclides para calcular el máximo común divisor (MCD) entre dos números.
  /*
  Mientras que b no sea cero:
  Guarda el valor de b en una variable temporal (temporal).
  Actualiza b con el residuo de a dividido por b (a % b).
  Actualiza a con el valor de b.
  Cuando b se convierte en cero, el valor de a es el MCD de los dos números.
  */
  function calcularMCD(a, b) {
    while (b !== 0) {
      let temporal = b;
      b = a % b;
      a = temporal;
    }
    return a;
  }
