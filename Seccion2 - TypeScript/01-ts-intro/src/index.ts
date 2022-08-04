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

    constructor( alterEgo: string){
        this.alterEgo = alterEgo;
    }
}

/* interface Personaje3{
    alterEgo: string;
    edad: number;
    nombreReal: number;

    //Aquí solo definimos tipos de datos o esqueleto
    imprimirNombre: () => string;
}
 */


const ironman = new Heroe('Iron Man');

//const spiderman: Personaje3 = {};

console.log(ironman);



/**
 * Alternativa más común de como encontramos los constructores
 * y clases dentro de Typescript
 */
class Heroe2{
    constructor(
        public alterEgo: string,
        public edad?: number, //Opcional
        public nombreReal?: string //Opcional
    ){}
}

const capitanAmerica = new Heroe2('Capitan America', 33, "Steve Rogers");
console.log(capitanAmerica);