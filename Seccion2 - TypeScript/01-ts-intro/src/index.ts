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