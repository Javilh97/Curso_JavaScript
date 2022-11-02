/*let a = 3, b = 2;

let z = a + b;
console.log("Resultado de la suma: " + z);

z = a - b;
console.log("Resultado de la resta: " + z);

z = a * b;
console.log("Resuktado de la multiplicacion: " + z);

z = a / b;
console.log("Resultado de la division: " + z);

z = a % b;//Residuo de la division
console.log("Resultado de la operacion modulo (residuo): " + z);

z = a ** b;
console.log("Resultado de operador exponente: " + z);


//Incremento
//Pre-incremento (el operador ++ antes de la variable)
z = ++a;
console.log(z);

//Pos-incremento (el operadpr ++ despues de la variable)
z = b++;
console.log(b);
console.log(z);

//Decremento
//Predecremento
z = --a;
console.log(a);
console.log(z);

//Postdecremento
z = b--;
console.log(b);
console.log(z);
*/

//Precedencia de operadores
/*
let a = 3, b = 2, c = 1, d = 4;

let z = a * b + c / d;
console.log(z);

z = c + a * b / d;
console.log(z);

z = (c + a) * b / c;
console.log(z);
*/

//Operadores de asignacion
/*
let a1 = 1;

a1 += 3;
console.log(a1);

a1 -= 2;
console.log(a1);
*/

//Operadores de comparacion
/*
let a = 3, b = 2, c = "3";

let z = a == b; // Se revisa el valor sin importar el tipo
console.log(z);

z = a === c; // Revisa si los valores son iguales pero tambien los tipos
console.log(z);

let z1 = a != c; // Se revisa el valor sin importar el tipo
console.log(z1);

let z2 = a !== c; // Revisa los valores y tambien el tipo
console.log(z2);
*/

//Operadores relacionales
/*
let a = 3, b = 3, c = "3";

let z = a < b;
console.log(z);

z = a <= b;
console.log(z);

z = a > b;
console.log(z);

z = a >= b;
console.log(z);
*/

//Determinar si un numero es par o impar
/*
let a = 10;
if (a % 2 == 0){
    console.log("Es un numero par");
}
else {
    console.log("Es un numero impar");
}


let edad = 19, adulto = 18;

if (edad >= adulto){
    console.log("Eres mayor de edad");
}
else{
    console.log("Eres menor de edad");
}
*/

//Operadores logicos en JavaScript
//Ejemplo de AND (&&), regresa true solo si ambos operandos son true
let a = 12;
let valMin = 0, valMax = 10;

if(a >= valMin && a <= valMax){
    console.log("Dentro del rango");
}
else{
    console.log("Fuera de rango");
}


//Ejemplo de OR (||), regresa true si cualquiera de los operandos es true
let vacaiones = false, diaDescanso = true ;

if(vacaiones || diaDescanso){
    console.log("El padre puede asistir al juego del hijo");
}
else{
    console.log("El padre esta ocupado");
}

//Operador ternario
let resultado = (1>2) ? "verdadero" : "falso";
console.log(resultado);

let numero = 10;
resultado = (numero % 2 == 0) ? "Numero par" : "Numero impar";
console.log(resultado);

//Convertir string a number
let miNumero = "18";
console.log(typeof miNumero);


let edad =  Number(miNumero);
console.log(typeof edad);

if(edad >= 18){
    console.log("La persona puede votar");
}
else{
    console.log("No puede votar");
}

let edad2 = (edad>=18) ? "Puede votar" : "Muy joven para votar";
console.log(edad2);


//Funcion isNaN
let miNumero2 = "18";

let edad3 =  Number(miNumero2);
console.log(edad3);

if(isNaN(edad3)){
    console.log("No es un numero");
}
else{
    if(edad3 >= 18){
        console.log("La persona puede votar");
    }
    else{
        console.log("No puede votar");
    }
}


if(isNaN(edad3)){
    console.log("No es un numero");
}
else{
    let edad4 = (edad3>=18) ? "Puede votar" : "Muy joven para votar";
    console.log(edad4);
}


//Precedencia de operadores en JavaScript
let x = 5;
let y = 10;
let z = ++x + y--;
console.log(x);
console.log(y);
console.log(z);


let resul = 4 + 5 * 6 / 3;
console.log(resul);


resul = (4 + 5) * 6 / 3;
console.log(resul);










