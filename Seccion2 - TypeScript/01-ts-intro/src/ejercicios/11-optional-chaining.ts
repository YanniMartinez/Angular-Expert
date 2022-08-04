/*
    ===== Código de TypeScript =====
*/

/**
 * Encadenamiento Opcional:
 * 
 */

interface Pasajero{
    nombre: string;
    hijos?: string[]; //EL signo ? aquí signfica OPCIONAL
}

const pasajero1: Pasajero = {
    nombre: 'Fernando'
}

const pasajero2: Pasajero = {
    nombre: 'Yann',
    hijos: ['Natalia', 'Sam']
}

function imprimeHijos( pasajero: Pasajero): void{
    const cuantosHijos = pasajero.hijos.length;
    console.log( cuantosHijos);
}

imprimeHijos(pasajero2);

//Error de encadenamiento de opcionales
imprimeHijos(pasajero1); //Marcará error porque no hay tamaño de un opcional undefined

/**
 * Encadenamiento opcional
 * @param pasajero objeto de pasajero
 */
//Para solucionarlo podemos emplear la siguiente definición:
function imprimeHijos2( pasajero: Pasajero): void{
    //Si existen los hijos dime cuantos hay, sino es un undefined y ponle 0
    const cuantosHijos = pasajero.hijos?.length || 0; //Imprime el lenght o 0 en caso de que no existan
    console.log( cuantosHijos);
}