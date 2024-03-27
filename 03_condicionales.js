//ejercicio 51
let edad = 26;
if (edad >= 18) {
    console.log("Eres mayor de edad!");
}

//ejercicio 52
let puntuacion = 61;
if (puntuacion >= 60) {
console.log("Aprobado!");
} else {
    console.log("Reprobaste");
}

//ejercicio 53
let diaSemana = "Juernes";0
switch (diaSemana) {
    case "Lunes":
    case "Martes":
    case "Miércoles":
    case "Jueves":
    case "Viernes":
        console.log("Se trabaja");        
        break;
    case "Sábado":
    case "Domingo":
        console.log("Se descansa");
        break;
    default:
        console.log("No es un día válido");
}

//ejercicio 54
let numero1 = 50;
let numero2 = 20;
if (numero1>numero2) {
    console.log(numero1);
}

//ejercicio 55
let color = "Verde";
if (color === "Rojo") {
    console.log("Este color es Rojo");
} else if (color === "Verde") {
    console.log("Este es el color Verde");
} else {
    console.log("Este color es Azul");        
}

//ejercicio 56
let calificacion = 80;
if (calificacion <= 49) {
    console.log("Reprobaste!");
} else if (calificacion >= 50 && calificacion < 80) {
    console.log("Aprobado");
} else { 
    console.log("Excelente!");
}

//ejercicio 57
let numero = -77;
if (numero <= 0) {
    console.log("este número es negativo");
} else {
    console.log("este número es positivo");
}

//ejercicio 58
function esPar(number) {
    return number % 2 === 0;
}
let number = 9;
console.log(esPar(number));

//ejercicio 59
let hora = 11;
if (hora < 12) {
    console.log("Buenos Días");
} else if (hora >= 12 && hora < 19) {
    console.log("Buenas Tardes");
} else { 
    console.log("Buenas noches");
}

//ejercicio 60
let lado1 = 50;
let lado2 = 60;
let lado3 = 50;

if (lado1 === lado2 && lado1 === lado3) {
    console.log("este es un triángulo equilatero");
} else if (lado1 !== lado2 && lado1 !== lado3 && lado2 !== lado3) {
    console.log("este triángulo es escaleno");
} else {
    console.log("este triángulo es isóceles");
}

//ejercicio 61
function esPrimo(numero) {
    if (numero <= 1) {
        return false;        
    }
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(esPrimo(7));

//ejercicio 62
function invierteCadena(texto) {
    let resultado = '';
    for(let i = texto.length - 1; i >= 0; i--) {
        resultado = resultado + texto [i];
    }
    return resultado;
}
console.log(invierteCadena("Sé verlas al revés"));
console.log(invierteCadena("Somos o no somoS"));
console.log(invierteCadena("¿Acaso hubo búhos acá?"));

//ejercicio 63
function calcularFactorial() {
    if (numer === 0 || numer === 1) {
        return 1;        
    } else {
        let factorial = 1;
        for (let i = 2; i <= numer; i++) {
            factorial *= i;
        }
        return factorial;
    }
} 
let numer = 4;
let resultado = calcularFactorial(numer);
console.log("el factorial de " + numer + " es " + resultado);

//ejercicio 63 +

function calcularFactorial(numeri) {
    if (numeri === 0 || numeri === 1) {
        return 1;
    } else {
        return numeri * calcularFactorial(numeri - 1);
    }
}
console.log(calcularFactorial(4));


//ejercicio 64
function contarPalabras(cadenaDeTexto) {
    let palabras = cadenaDeTexto.split(' ');  
    return palabras.length;
}
console.log(contarPalabras('Todas las hojas son del viento'));

