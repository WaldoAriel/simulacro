/* Crear una función que reciba como parámetro una nota y retorne una de 
estas 3 palabras: LIBRE, REGULAR o PROMOCIONADO, en dependencia de:

Nota es menor a 4 - LIBRE
Nota es menor a 7 y no es LIBRE - REGULAR 
Nota mayor que 6  - PROMOCIONADO. */

function puntuacion(nota1 , nota2 , nota3) {
    let nota = (nota1 + nota2 + nota3) / 3;
if (nota > 0 && nota < 4) {
    return console.log('Quedaste Libre');    
} else if (nota < 7 && nota >= 4) {
    return console.log('Regularizaste la Materia');    
} else if (nota > 6 && nota <= 10) {
    return console.log('Materia Promocionada');
} else return console.log('El número ingresado no es una nota válida');
}

puntuacion(10 , 9 , 8);