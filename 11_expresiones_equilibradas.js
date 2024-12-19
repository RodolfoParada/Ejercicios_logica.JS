/*
#11 EXPRESIONES EQUILIBRADAS

 * Crea un programa que comprueba si los paréntesis, llaves y corchetes
 * de una expresión están equilibrados.
 * - Equilibrado significa que estos delimitadores se abren y cierran
 *   en orden y de forma correcta.
 * - Paréntesis, llaves y corchetes son igual de prioritarios.
 *   No hay uno más importante que otro.
 * - Expresión balanceada: { [ a * ( c + d ) ] - 5 }
 * - Expresión no balanceada: { a * ( c + d ) ] - 5 }
 */
// Declaración de la función
function estaEquilibrada(expresion) {
    /*
   pila: Se utiliza como una estructura de pila (stack) para almacenar los símbolos de apertura 
   (, {, [.
   pares: Es un objeto que asocia cada símbolo de cierre con su correspondiente símbolo de apertura.

    */
    const pila = [];
    const pares = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    // Recorrido de la expresión
    for (const char of expresion) {
    /*
    Se recorre cada carácter de la expresión:
    Si es un símbolo de apertura (, {, o [, se añade a la pila.
    Si es un símbolo de cierre ), }, o ]:
    Verifica si la pila está vacía (error, no hay apertura previa).
    Extrae el último símbolo de la pila (pila.pop()) y comprueba si corresponde con el 
    cierre actual utilizando el objeto pares.
    */

        if (['(', '{', '['].includes(char)) {
            pila.push(char);
        } else if ([')', '}', ']'].includes(char)) {
            if (pila.length === 0 || pila.pop() !== pares[char]) {
                return false;
            }
        }
    }
    // resultado
    /*
    Al final, si la pila está vacía, significa que todos los símbolos de apertura fueron correctamente 
    cerrados, y la función devuelve true.
    Si quedan elementos en la pila, significa que hay símbolos de apertura sin cerrar, y la función 
    devuelve false.
    */
    return pila.length === 0;
}

// Ejemplo de uso
const expresion1 = "{ [ a * ( c + d ) ] - 5 }";
const expresion2 = "{ a * ( c + d ) ] - 5 }";
console.log(estaEquilibrada(expresion1)); // true
console.log(estaEquilibrada(expresion2)); // false