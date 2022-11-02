//Clase dispositivosEntrada
class DispositivosEntrada{

    constructor(tipoEntrada,marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }
    get tipoEntrada(){
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }

    /*nombreCompleto(){
        return `tipoEntrada: ${this._tipoEntrada}, marca: ${this._marca}`
    }*/

    toString(){
        return `TipoEntrada: ${this._tipoEntrada}, Marca: ${this._marca}`
        //return this.nombreCompleto();
    }

}

//Clase raton
class Raton extends DispositivosEntrada{

    static contadorRatones = 0;
    constructor(tipoEntrada,marca){
        super (tipoEntrada,marca);
        this._idRaton = ++Raton.contadorRatones;
    }

    get idRaton(){
        return this._idRaton;
    }

    toString(){
        return `idRaton: ${this._idRaton}, ${super.toString()}`
        //return 'idRaton: ' + ' ' + this._idRaton + ' ' + super.nombreCompleto();
    }

}

//Clase teclado
class Teclado extends DispositivosEntrada{
    static contadorTeclados = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada,marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }

    get idTeclado(){
        return this._idTeclado;
    }

    toString(){
        return `idTeclado: ${this._idTeclado}, ${super.toString()}`
        //return 'idTeclado' + ' ' + this._idTeclado + ' ' + super.nombreCompleto();
    }
}

//Clase monitor
class Monitor{

    static contadorMonitores = 0;
    constructor(marca,tamaño){
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamaño = tamaño;
    }

    get idMonitor(){
        return this._idMonitor;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }
    get tamaño(){
        return this._tamaño;
    }
    set tamaño(tamaño){
        this._tamaño = tamaño;
    }
    toString(){
        return `idMonitor: ${this._idMonitor}, Marca: ${this._marca}, Tamaño: ${this._tamaño}`
    }

}

//Clase computadora
class Computadora{

    static contadorComputadoras = 0;
    constructor(nombre,monitor,teclado,raton){
        this._idComputadora = ++Computadora.contadorComputadoras;

        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }
    /*
    get idComputadora(){
        return this._idComputadora;
    }
    get nombre (){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get monitor(){
        return this._monitor;
    }
    set monitor(monitor){
        this._monitor = monitor;
    }
    get teclado(){
        return this._teclado;
    }
    set teclado(teclado){
        this._teclado = teclado;
    }
    get raton(){
        return this._raton;
    }
    set raton(raton){
        this._raton = raton;
    }
    toString(){
        return `Computadora: ${this._idComputadora}, Nombre: ${this._nombre}, 
        Monitor: ${this._monitor}, 
        Teclado: ${this._teclado}, 
        Raton: ${this._raton}`;
    }
    */
    toString(){
        return `Computadora ${this._idComputadora}: ${this._nombre} \n ${this._monitor} \n ${this._raton} \n ${this._teclado}`;
    }

}

//Clase orden
class Orden{

    static contadorOrdenes = 0;

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }

    get idOrden(){
        return this._idOrden;
    }

    agregarComputadora(computadora){
        this._computadoras.push(computadora);
    }

    mostrarOrden(){
        let computadorasOrden = '';
        for (let computadora of this._computadoras){
            computadorasOrden +=`\n${computadora}`;
        }
        console.log(`Orden: ${this._idOrden}, Computadoras: ${computadorasOrden}`);
    }
}


let dispositivo1 = new DispositivosEntrada('Bluetooth','HP');
console.log(dispositivo1.toString());

let raton1 = new Raton('Alambrico','Dell');
console.log(raton1.toString());
let raton2 = new Raton('Bluetooth','Logitech');
console.log(raton2.toString());

let teclado1 = new Teclado('Bluetooth','Asus');
console.log(teclado1.toString());
let teclado2 = new Teclado('Alambrico','Dell');

let monitor = new Monitor('Dell','23 pulgadas');
console.log(monitor.toString());
let monitor1 = new Monitor('LG','24 pulgadas');

let computadora1 = new Computadora('Sala',monitor,teclado1,raton1);
console.log(computadora1.toString());
let computadora2 = new Computadora('Oficina',monitor1,teclado2,raton2);
console.log(computadora2.toString()); 

let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden1.mostrarOrden();
