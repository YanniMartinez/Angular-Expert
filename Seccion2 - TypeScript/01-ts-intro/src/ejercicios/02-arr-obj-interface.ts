/*
    ===== Código de TypeScript =====
*/

//Arrays: any[] significa que puede aceptar lo que sea
//En el siguiente ejemplo vemos una combinación de String y number
let habilidades = ['Bash', 'Counter','Healing',100] 

//De igual manera se le puede definir:
let habilidades2: (string)[] = ['Bash', 'Counter','Healing'] 


/**
 * Objetos: Normalmente se definirán como constantes, sin embargo,
 * con la siguiente sintaxis no permite agregar una nueva caracteristica
 */
const personajeMalo={
    nombre:'Strider',
    hp:100,
    habilidades: ['Bash', 'Counter','Healing'] 
}

//Marcará error al poner lo siguiente:
//personaje.puebloNatal='Pueblo paleta';

/**
 * Para solucionar la problematica anterior podemos definir interfaces
 * la cual nos permite hacer que un objeto luzca como nosotros queramos
 */
interface Personaje{
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string; //Indica que el pueblo natal es opcional
}

const personaje: Personaje={
    nombre:'Strider',
    hp:100,
    habilidades: ['Bash', 'Counter','Healing'] 
}

personaje.puebloNatal='Pueblo Paleta'; //Ahora si es valido


console.table(personaje); //Imprime el objeto como tabla