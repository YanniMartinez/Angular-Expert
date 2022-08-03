/*
    ===== Código de TypeScript =====
*/

/**
 * Tarea: Crear una interfaz que acepte el objeto SuperHeroe
 */
interface SuperHeroe {
    nombre: string;
    edad: number;
    //Declaración de un objeto anidado, opción pero no eficiente
    /*direccion: {
        calle: string;
        pais: string;
        ciudad: string;
    };*/
    direccion: Direccion;
    //Declaración del método
    mostrarDireccion: () => string;
}

/**
 * Mejor práctica de implementar elementos anidados sin
 * perder el control entre cada uno de ellos.
 */
interface Direccion {
    calle: string;
    pais: string;
    ciudad: string;
}

const superHeroe: SuperHeroe = {
    nombre: 'Spiderman',
    edad:30,
    direccion:{
        calle: 'Main ST',
        pais: 'USA',
        ciudad: 'NY'
    },
    mostrarDireccion(){
        return this.nombre +', '+this.direccion.ciudad + ', '+this.direccion.pais;
    }
}

const direccion = superHeroe.mostrarDireccion();
console.log( direccion );

