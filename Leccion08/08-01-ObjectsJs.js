let x = 10;
console.log(x.length);
//Agregar metodo a objeto
let persona = {
    nombre: 'Javier',
    apellido: 'Lopez',
    email: 'javier97@gmail.com',
    edad: 23,
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

//Metodo get en objetos
let persona1 = {
    nombre1: 'Javier',
    apellido1: 'Lopez',
    email1: 'javier97@gmail.com',
    edad1: 23,
    idioma: 'es',
    get lang(){
        return this.idioma.toUpperCase();

    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
    get nombreCompleto1() {
        return this.nombre1 + ' ' + this.apellido1;
    }
}

console.log(persona1.lang);
persona1.lang = 'en';

console.log(persona1.lang);


console.log(persona1.nombreCompleto1);

//Agregar y eliminar propiedades al objeto
//Agregar propiedad al objeto
persona.telefono = '9513584017';
persona.telefono = '9513613108';
console.log(persona);
//Eliminar propiedad de un objeto
delete persona.telefono;

//Formas de imprimir un objeto
//Concatenar cada valor de cada propiedad
console.log(persona.nombre + ', ' + persona.apellido);

//for in
for( nombrePropiedad1 in persona){
    console.log(persona[nombrePropiedad1]);
}

//sintaxis object
let personaArray = Object.values(persona);
console.log(personaArray);

//Objeto Json
let personaString = JSON.stringify(persona);
console.log(personaString);

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.email);

console.log(persona);
console.log(persona.nombreCompleto());

//Otra manera de acceder al objeto
console.log(persona.nombre);
console.log(persona['apellido']);
//for in
for ( nombrePropiedad in persona){
    console.log(nombrePropiedad);
    console.log(persona[nombrePropiedad]);
}

//Otra manera de crear un objeto
let persona2 = new Object();
persona2.nombre = 'Sergio';
persona2.direccion = 'Agustin Melgar';
persona2.tel = '9513584017';

console.log(persona2.nombre);


//Funcion constructor de objetos de tipo persona
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;

    this.nombreCompleto2 = function(){
        return this.nombre + ' ' + this.apellido;
    }
}

//Prototype = Modificar tanto atributos como metodos asociados a un objeto
Persona.prototype.tel = '44332211';


let padre = new Persona('Juan', 'Perez','jperez@mail.com');
padre.tel = '9513584017';
console.log(padre);

let madre = new Persona('Laura','Quintero','lquintero@mail.com');
madre.tel = '66889900';
console.log(madre);

padre.nombre = 'Carlos';
console.log(padre);
console.log(madre);

console.log(padre.nombreCompleto2());
console.log(madre.nombreCompleto2());


let miObjeto = new Object();
let miObjeto2 = {};

let miCadena1 = new String('Hola');
let miCadena2 = 'Hola';

let miNumero1 = new Number(1);
let miNumero2 = 1;

let miBoolean1 = new Boolean(false);
let miBoolean2 = false;

let miArreglo1 = new Array();
let miArreglo2 = [];

let miFuncion1 = new Function();
let miFuncion2 = function(){};



let persona3 = {
    nombre: 'Javier',
    apellido: 'Lopez',
    nombreCompleto: function(titulo, tel) {
        return titulo + ': ' + this.nombre + ' ' + this.apellido + ' ' + tel;
        //return this.nombre + ' ' + this.apellido;
    }
}

let persona4 = {
    nombre: 'Sergio',
    apellido: 'Hernandez'
}

//USO DE CALL
//Uso de call para usar el metodo persona3.nombreCompleto con los datos de la persona4
console.log(persona3.nombreCompleto('Lic', '95136056498'));

console.log( persona3.nombreCompleto.call(persona4, 'Ing', '9513584017'));

//USO DE APPLY
//Uso de apply para usar el metodo persona3.nombreCompleto con los datos de la persona4
console.log(persona3.nombreCompleto('Lic', '66887711'));

let arreglo = ['Ing', '951654789'];
console.log( persona3.nombreCompleto.apply(persona4, arreglo));
