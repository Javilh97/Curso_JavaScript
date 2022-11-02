//Funcion: es un codigo reutilizale, se puede llamar tantas veces como sea posible
//Las funciones se pueden llamar antes o depues de su declaracion
//Hoisting
//miFuncion(4,2);

//Declaracion de la funcion
function miFuncion(a, b){
    //console.log("Suma: " + (a+b));
    //Propiedad que se utiliza dentro de la funcion para saber el numero de argumentos que recibe la funcion
    console.log(arguments.length);
    return a + b;

}

//Llamando a la funcion
let resultado = miFuncion(3,6);
console.log(resultado);

//Funciones de tipo expresion o anonimas
//Declaracion 
let sumar = function (a, b){return a + b};

resultado = sumar(1, 2);
console.log(resultado);

//Funcion que se manda a llamar asi misma
(function(a, b){
    console.log('Ejecutando la funcion: ' + (a + b));
})(3, 4);


console.log(typeof miFuncion);

var miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);


//Funciones flecha (arrow)
const sumarFuncionTipoFlecha = (a,b) => a + b;
resultado = sumarFuncionTipoFlecha(3,5);
console.log(resultado);

//Parametros y argumentos de Js
let sumar1 = function (c,d){
    console.log(arguments[0]);
    console.log(arguments[1]);
    return c + d + arguments[2];
};

resultado = sumar1 (3,6,5);
console.log(resultado);

//Sumar argumentos 
let resultado1 = sumarTodo(5,4,13,10,9,9,10);
console.log(resultado1);

function sumarTodo(){
    let suma2 = 0;
    for(let i = 0; i < arguments.length; i++){
        suma2 += arguments[i]; // suma = suma + arguments[i]...
    }
    return suma2;
}

//paso por valor y paso por referencia
//Tipos primitivos
let x = 10;

function cambiarValor(a){
    a = 20;
    
}

//Paso por valor
cambiarValor(x); //10
console.log(x); 


//Paso por referencia Js
const persona = {
    nombre: 'Javier',
    apellido: 'Lopez'
} 


function cambiarValorObjeto(p1){
    p1.nombre = 'Sergio';
    p1.apellido = 'Hernandez';
}

//Paso por referencia
cambiarValorObjeto(persona);
console.log(persona);








