/*
#4 ¿ES UN NÚMERO PRIMO?

 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */

/*
Concepto de números primos:
Un número primo es un número natural mayor que 1 que tiene exactamente dos divisores positivos: 
1 y él mismo. Por ejemplo, el número 5 es primo porque sus únicos divisores son 1 y 5. En cambio,
 el número 6 no es primo porque tiene divisores adicionales (1, 2, 3 y 6).
*/



// Función para comprobar si un número es primo
function esPrimo(num){
    if(num <= 1) return false; // Los números menores o iguales a 1 no son primos
    for(let i=2; i<num; i++){
        if(num % i === 0){
        return false; 
    }
}
    return true; // Si no se encontró ningún divisor, es primo


}
console.log(esPrimo(3))



// Imprimir los números primos entre 1 y 100
for(let i = 1; i<=100; i++){
    if(esPrimo(i)){
        console.log(i);
    }
}