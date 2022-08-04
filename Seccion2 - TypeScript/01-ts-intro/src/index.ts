/*
    ===== Código de TypeScript =====
*/

/**
 * Las interfaces no existen en JS, pero las clases si, por lo
 * que esas si podremos verlas sin ningun problema
 * aun que son muy semejantes tiene claras diferencias de uso:
 * 
 * La interfaz no define como funcionan los metodos, constructores, gets o sets
 * Las clases permiten instanciar
 */

class Heroe{
    alterEgo: string;
    edad: number;
    nombreReal: number;

    //Aquí si podemos decir que hace y como lo hace
    imprimirNombre(){
        return this.alterEgo + ' ' + this.nombreReal;
    }
}

interface Personaje3{
    alterEgo: string;
    edad: number;
    nombreReal: number;

    //Aquí solo definimos tipos de datos o esqueleto
    imprimirNombre: () => string;
}

const ironman = new Heroe();

//const spiderman: Personaje3 = {};

console.log(ironman);