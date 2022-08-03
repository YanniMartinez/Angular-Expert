/*
    ===== Código de TypeScript =====
*/

interface Reproductor{
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles{
    autor: string;
    anio: number;
}

const reproductor: Reproductor ={
    volumen: 90,
    segundo: 36,
    cancion: 'Sweet child of mine',
    detalles: {
        autor: "Guns and roses",
        anio: 1997
    }
}

/**
 * DESESTRUCTURACION
 * De objetos se hace mediante {}
 * Y lo realiza mediante el nombre del atributo
 */

const { volumen, segundo, cancion, detalles } = reproductor;
const { autor, anio } = detalles;
//Alternativa de una sola linea:
//const { volumen, segundo, cancion, detalles: {autor} } = reproductor;
//Dandole un alias a la extracción:
//const { volumen, segundo, cancion, detalles: {autor: autorDetalle} } = reproductor;

console.log('El volumen actual es: ', volumen)
console.log('El segundo actual es: ', segundo)
console.log('La canción actual es: ', cancion)
console.log('El autor es: ', autor)
console.log('El anio es: ', anio)


/**
 * Desestructuración de arreglos:
 * Se hace mediante []
 * Se hace por posición, no por nombre de atributos
 */
const dbz: string[] = ['Goku', 'Vegeta', 'Trunks']
const [ p1, p2, p3 ] = dbz;

//console.log('Personaje 1: ', dbz[0]);
//console.log('Personaje 2: ', dbz[1]);
//console.log('Personaje 3: ', dbz[2]);

console.log('Personaje 1: ', p1);
console.log('Personaje 2: ', p2);
console.log('Personaje 3: ', p3);

//Si sólo nos interesara Trunks Posicion 3 podriamos usar:
const [ , , pos3 ] = dbz;
console.log('Personaje 3: ', pos3);