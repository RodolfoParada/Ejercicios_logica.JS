/*
#18 LA CARRERA DE OBSTÁCULOS

 * Crea una función que evalúe si un/a atleta ha superado correctamente una
 * carrera de obstáculos.
 * - La función recibirá dos parámetros:
 *      - Un array que sólo puede contener String con las palabras
 *        "run" o "jump"
 *      - Un String que represente la pista y sólo puede contener "_" (suelo)
 *        o "|" (valla)
 * - La función imprimirá cómo ha finalizado la carrera:
 *      - Si el/a atleta hace "run" en "_" (suelo) y "jump" en "|" (valla)
 *        será correcto y no variará el símbolo de esa parte de la pista.
 *      - Si hace "jump" en "_" (suelo), se variará la pista por "x".
 *      - Si hace "run" en "|" (valla), se variará la pista por "/".
 * - La función retornará un Boolean que indique si ha superado la carrera.
 * Para ello tiene que realizar la opción correcta en cada tramo de la pista.
 */

function evaluarCarrera(acciones, pista) {
  let pistaFinal = '';
  let exito = true;

  for (let i = 0; i < pista.length; i++) {
    const accion = acciones[i];
    const obstaculo = pista[i];

    if ((accion === 'run' && obstaculo === '_') || (accion === 'jump' && obstaculo === '|')) {
      pistaFinal += obstaculo; // Acción correcta, pista sin cambios
    } else {
      exito = false;
      if (accion === 'jump' && obstaculo === '_') {
        pistaFinal += 'x'; // Saltó cuando debía correr
      } else if (accion === 'run' && obstaculo === '|') {
        pistaFinal += '/'; // Corrió cuando debía saltar
      }
    }
  }

  console.log(pistaFinal);
  return exito;
}

// Ejemplo de uso:
const acciones = ["run", "jump", "run", "jump", "run"];
const pista =     "_|_|_";

const resultado = evaluarCarrera(acciones, pista);
// Imprimirá la pista final y retornará true o false
console.log("¿Carrera superada?", resultado);
