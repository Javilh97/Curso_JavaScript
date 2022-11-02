//NO es posible crear objetos antes de declarar la clase
//let persona2 = new Persona('Karla', 'Juarez');

//Clases en JavaScript
/*class Persona{
    constructor (nombre, apellido){
         this._nombre = nombre;
         this._apellido = apellido;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

}

let persona1 = new Persona('Javier', 'Lopez');
persona1.nombre = 'Sergio'; //Llama al metodo set nombre, para cambiar el valor de la propiedad nombre
console.log(persona1.nombre); //Llama al metodo get nombre
//console.log(persona1);

let persona2 = new Persona('Sergio', 'Hernandez');
console.log(persona2);
*/

//Herencia
class Persona{

    static contadorPersonas = 0;//atributo de la clase

    email = 'Valor default email';//atributo de los objetos

    static get MAX_OBJ(){
        return 5;
    }

    constructor (nombre, apellido){
         this._nombre = nombre;
         this._apellido = apellido;
         if(Persona.contadorPersonas < Persona.MAX_OBJ){
             this.idPersona = ++Persona.contadorPersonas;
         }
         else{
             console.log('Se han superado el maximo de objetos permitidos');
         }
         //console.log('Se incrementa contador a ' + Persona.contadorPersonas);
    }

    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    nombreCompleto(){
        return this.idPersona + ' ' + this._nombre + ' ' + this._apellido;
    }
    //Sobreescribiendo el metodo de la clase padre (Object)
    toString(){
        //Se aplica polimorfismo(Multiples formas en tiempo de ejecucion)
        //el metodo que se ejecuta depende si es una referencia de tipo padre o de tipo hijo
        return this.nombreCompleto();
    }
    static  saludar(){
        console.log('Saludos desde metodo static');
    }
    static saludar2(persona){
        console.log(persona.nombre);
    }
}

class Empleado extends Persona{
    constructor(nombre,apellido,departamento){
        super (nombre,apellido);//Llamar al constructor de la clase padre
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
    //Sobreescritura
    nombreCompleto(){
        return super.nombreCompleto() + ', ' + this._departamento;
        //return this._nombre + ' ' + this._apellido + ', ' + this._departamento;
    }
}

let persona1 = new Persona('Javier', 'Hernandez');
console.log(persona1.toString());

let empleado1 = new Empleado('Sergio', 'Lopez', 'Sistemas');
console.log(empleado1.toString());

console.log(Persona.contadorPersonas);

let persona2 = new Persona('Sergio','Hernandez');
console.log(persona2.toString());
console.log(Persona.contadorPersonas);

let persona3 = new Persona('Jose', 'Perez');
let persona4 = new Persona('Luis', 'Ponce');
let persona5 = new Persona('Carlos', 'Ramirez');



console.log(Persona.MAX_OBJ);
Persona.MAX_OBJ = 10;
console.log(Persona.MAX_OBJ);
 
/*let persona1 = new Persona('Javier', 'Lopez');
console.log(persona1.nombre); //Llama al metodo get nombre

let empleado1 = new Empleado('Sergio','Hernandez','Sistemas');
console.log(empleado1);
console.log(empleado1.nombreCompleto());
console.log(empleado1.toString());


//persona1.saludar(); no es posible llamar un metodo static desde un objeto
Persona.saludar();
Persona.saludar2(persona1);

Empleado.saludar();
Empleado.saludar2(empleado1);

console.log(persona1.contadorPersonas);
console.log(Persona.contadorPersonas);
console.log(Empleado.contadorPersonas);

console.log(persona1.email);
console.log(empleado1.email);
console.log(Persona.email);
console.log(Empleado.email);*/

