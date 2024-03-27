{{
console.log('');
console.log('--> 1-Escribe una función llamada imprimirNumeros que tome un número como parámetro e imprima todos los números desde 1 hasta ese número utilizando un ciclo for.');
console.log('');


     function imprimirNumeros(numero) {
     for (let i = 1 ; i <= numero; i++) {
         console.log(i); 
     }
 }

imprimirNumeros(3); 

//________________________________________________//

console.log('');
console.log('--> 2-Crea una función llamada contarCaracteres que tome una cadena de texto y un carácter como parámetros, y devuelva la cantidad de veces que el carácter aparece en la cadena. Utiliza un ciclo for para recorrer la cadena.');
console.log('');

function contarCaracteres(cadena , caracter) {
    let cantidad = 0;
     for (let i = 0 ; i < cadena.length ; i++) {
         if (cadena[i] === caracter) {
            cantidad++;
        }
    }
    return cantidad;
}

let cadena = 'esternocleidomastoideo';
let caracter = 'o';
let cantidad = contarCaracteres(cadena , caracter);
console.log(`la letra "${caracter}" se repite ${cantidad} veces`);

//________________________________________________//

console.log('');
console.log('--> 3-Implementa una función llamada duplicarCaracteres que tome una cadena de texto como parámetro y devuelva una nueva cadena donde cada carácter se duplique. Utiliza un ciclo for para iterar sobre la cadena original.');
console.log('');

function duplicarCaracteres(texto) {
    let nuevoTexto = '';
    for (let i = 0; i < texto.length; i++) {
        nuevoTexto = nuevoTexto + texto[i] + texto[i]             
    }
    return nuevoTexto;
}
console.log('cuando tomo alcohol, las palabras me salen así: ' + duplicarCaracteres('dobles'));

//________________________________________________//

console.log('');
console.log('--> 4-Desarrolla una función llamada invertirNumero que tome un número como parámetro y devuelva el número invertido. Por ejemplo, si se pasa el número 123, la función debería devolver 321. Utiliza un ciclo for para invertir el número.');
console.log('');

function invertirNumero(numero) {
    let numeroInvertido = '';
    for (let i = numero.length-1; i >= 0 ; i--) {
        numeroInvertido = numeroInvertido + numero[i];      
    }
    return parseInt(numeroInvertido);
}

console.log('al invertir el número ingresado, queda así: ' , invertirNumero('54321'));

//________________________________________________//

console.log('');
console.log('--> 5-Escribe una función llamada calcularPotencia que tome dos números como parámetros, la base y el exponente, y devuelva el resultado de elevar la base al exponente. Utiliza un ciclo for para realizar la multiplicación');
console.log('');

function calcularPotencia(numBase , numExpo) {
    var resultado = 1;
    for ( i = 1 ; i <= numExpo ; i++ ) {
        resultado *=numBase;
    }
    return resultado;
}
console.log(calcularPotencia(10 , 3));

//________________________________________________//

console.log('');
console.log('--> 6-Crea una función llamada contarDigitos que tome un número como parámetro y devuelva la cantidad de dígitos que tiene. Utiliza un ciclo for para contar los dígitos.');
console.log('');

let contarDigitos = 65485;


}}
