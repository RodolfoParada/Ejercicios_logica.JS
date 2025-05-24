/*
#16 ¿CUÁNTOS DÍAS?

 * Crea una función que calcule y retorne cuántos días hay entre dos cadenas
 * de texto que representen fechas.
 * - Una cadena de texto que representa una fecha tiene el formato "dd/MM/yyyy".
 * - La función recibirá dos String y retornará un Int.
 * - La diferencia en días será absoluta (no importa el orden de las fechas).
 * - Si una de las dos cadenas de texto no representa una fecha correcta se
 *   lanzará una excepción.
 */

function calcularDiasEntreFechas(fecha1, fecha2) {
    /*
    Aquí se usa una expresión regular (regex) para verificar que las cadenas proporcionadas 
    (fecha1 y fecha2) sigan el formato dd/mm/yyyy.
    Si alguna de las fechas no cumple con este formato, se lanza un error (throw new Error).
    Explicación del regex:
    ^\d{2}: Comienza con exactamente dos dígitos (día). 
    \/: Sigue con un /.
    \d{2}: Luego, dos dígitos más (mes).
    \/: Otro /.
    \d{4}$: Termina con exactamente cuatro dígitos (año).
    */
    const regexFecha = /^\d{2}\/\d{2}\/\d{4}$/;

    if (!regexFecha.test(fecha1) || !regexFecha.test(fecha2)) {
        throw new Error("Una de las cadenas de texto no representa una fecha correcta");
    }

    /*
    Se convierten ambas fechas a objetos Date usando la función convertirFecha.
    Luego, se calcula la diferencia en milisegundos entre las dos fechas con Math.abs(date1 - date2). 
    Math.abs asegura que la diferencia sea positiva, sin importar cuál fecha sea mayor.
    */
    const convertirFecha = (fecha) => {
        const [dia, mes, año] = fecha.split('/').map(Number);
        return new Date(año, mes - 1, dia);
    };

    const date1 = convertirFecha(fecha1);
    const date2 = convertirFecha(fecha2);


    /*
    Los milisegundos se convierten a días dividiendo por:
    1000: Milisegundos en un segundo.
    60: Segundos en un minuto.
    60: Minutos en una hora.
    24: Horas en un día.
    Math.ceil redondea hacia arriba para garantizar un número entero de días, 
    incluso si la diferencia es una fracción.
    */
    const diferenciaMilisegundos = Math.abs(date1 - date2);
    const diferenciaDias = Math.ceil(diferenciaMilisegundos / (1000 * 60 * 60 * 24));

    /*
    Se devuelve la cantidad total de días como un número entero.
    */
    return diferenciaDias;
}

// Ejemplo de uso
/*
cha1 y fecha2 se pasan a la función.
La diferencia entre el 1 de enero y el 10 de enero de 2022 es 9 días
*/
const fecha1 = "01/01/2022";
const fecha2 = "10/01/2022";

console.log(calcularDiasEntreFechas(fecha1, fecha2));

