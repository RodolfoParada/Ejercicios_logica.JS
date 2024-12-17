/*
#5 ÁREA DE UN POLÍGONO.

 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */

/*
formula del área del triangulo = 1/2 * base * altura.
formula el área del cuadrado = lado al cuadrado.
formula del área del rectángulo = base + altura.
*/

/*
La función calcularArea recibe dos parámetros principales:

poligono: Es una cadena de texto (string) que indica qué tipo de polígono se va a calcular. Puede ser
'Triángulo', 'Cuadrado' o 'Rectángulo'.

...dimensiones: Es un parámetro rest que permite pasar un número variable de argumentos 
(las dimensiones necesarias para calcular el área).
*/

function calcularArea(poligono, ...dimensiones) {
    let area;//se declara una variable area sin asignarle valor inicialmente.
  

    //poligono es el parárametro de entrada según el tipo de figura.
    switch (poligono) {
      case 'Triángulo':
        if (dimensiones.length === 2) {
          // Base y altura
          area = 0.5 * dimensiones[0] * dimensiones[1];
        } else {
          console.log('Para un triángulo, se necesitan 2 parámetros: base y altura.');
          return;
        }
        break;
  
      case 'Cuadrado':
        if (dimensiones.length === 1) {
          // Lado
          area = Math.pow(dimensiones[0], 2);
        } else {
          console.log('Para un cuadrado, se necesita 1 parámetro: lado.');
          return;
        }
        break;
  
      case 'Rectángulo':
        if (dimensiones.length === 2) {
          // Base y altura
          area = dimensiones[0] * dimensiones[1];
        } else {
          console.log('Para un rectángulo, se necesitan 2 parámetros: base y altura.');
          return;
        }
        break;
  
      default:
        console.log('Polígono no reconocido');
        return;
    }
  
    console.log(`El área del ${poligono} es: ${area}`);
  }
  
  // Ejemplo de uso:
  calcularArea('Triángulo', 5, 10);  // Área de un triángulo con base 5 y altura 10
  calcularArea('Cuadrado', 4);       // Área de un cuadrado con lado 4
  calcularArea('Rectángulo', 5, 8);  // Área de un rectángulo con base 5 y altura 8
  