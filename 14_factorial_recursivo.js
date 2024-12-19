/*
#14 FACTORIAL RECURSIVO

 * Escribe una función que calcule y retorne el factorial de un número dado
 * de forma recursiva.
 */

/*
El factorial de un número 𝑛 (denotado como 𝑛!) es el producto de todos los números 
enteros positivos desde 1 hasta 𝑛. En otras palabras, es el resultado de 
multiplicar todos los números enteros positivos menores o iguales a 𝑛.

La fórmula es:
              n!=n×(n−1)×(n−2)×⋯×2×1
Por ejemplo:
            5!=5×4×3×2×1=120

            3!=3×2×1=6
Además, por convención:
                       0!=1
El factorial se usa comúnmente en matemáticas y estadísticas, especialmente en 
combinatoria y probabilidad.
*/

/*
La forma recursiva se refiere a una definición o proceso en el que una función o 
algoritmo se llama a sí misma para resolver un problema más pequeño, similar 
al problema original. En el contexto de los factoriales, una forma recursiva es 
una forma de calcular el factorial de un número 𝑛 utilizando la propia función 
de forma repetitiva, con una llamada que resuelve el problema en pasos más pequeños.

Para el factorial, la definición recursiva es la siguiente:

n!=n×(n−1)!
Y el caso base es:

0!=1

Esto significa que para calcular el factorial de un número 𝑛, la función recursiva 
calcula el factorial de 𝑛 − 1
n−1, luego multiplica el resultado por 𝑛, repitiendo este proceso hasta llegar al 
caso base, que es 0!=1.
*/

function factorial(n) {
    // Caso base: el factorial de 0 es 1
    if (n === 0) {
      return 1;
    } else {
      // Llamada recursiva: n * factorial de (n-1)
      return n * factorial(n - 1);
    }
  }
  
  // Ejemplo de uso:
  console.log(factorial(5));  // Devuelve 120
  