/*
 #3 LA SUCESIÓN DE FIBONACCI.
 
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */

function imprimirFibonacci(n){
    // Iniciamos la serie con los dos primeros números dentro del array
    const fibonacci = [0,1];

  //Generamos la serie hasta alcanzar 'n' números.
  for(let i = 2; i <= n; i++){
    const siguiente = fibonacci[i-1] + fibonacci[i-2]; // Suma de los dos anteriores
    fibonacci.push(siguiente); // Agregamos el siguiente número a la serie
  }   
   // Imprimimos cada número con su índice
   fibonacci.forEach((numero, indice) => {
    console.log(`${indice}: ${numero}`);
});

}


imprimirFibonacci(50);


/*
El método .push() se utiliza para agregar uno o más elementos al final de un array y devuelve la 
nueva longitud del array. Es una forma muy común de añadir elementos a un array sin modificar su 
estructura original.

El método .forEach() se utiliza para ejecutar una función en cada uno de los elementos de un array. 
Este método no retorna un nuevo array, simplemente ejecuta la función para cada elemento del array, 
uno por uno.

*/


