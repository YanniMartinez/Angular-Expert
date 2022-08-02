/*
    ===== Código de TypeScript =====
*/

/**
 * Funcion que no retorna nada
 */
interface PersonajeLOR{
    nombre: string;
    pv: number;
}

function curar(personaje: PersonajeLOR, curarX: number):void{
    //personaje.hp += curarX; Marcará error porque no existe hp
    personaje.pv += curarX;
    console.log(personaje);
}

/**
 * Definiendo un personaje
 */
const nuevoPersonaje: PersonajeLOR ={
    nombre: 'Strider',
    pv: 50
}

curar(nuevoPersonaje,20);


/****************************************************************
 * *************************************************************
 * Tambien podemos definir métodos dentro de las interfaces. Ej: 
 * *************************************************************
 * */
interface PersonajeLOR2{
    nombre: string;
    pv: number;
    mostrarHp: () => void; //Definimos método
}
const nuevoPersonaje2: PersonajeLOR2 ={
    nombre: 'Strider',
    pv: 50, 
    mostrarHp() {
        console.log("Puntos de vida: ", this.pv);
    }
}
function curar2(personaje: PersonajeLOR, curarX: number):void{
    //personaje.hp += curarX; Marcará error porque no existe hp
    personaje.pv += curarX;
}

curar(nuevoPersonaje2,20);
nuevoPersonaje2.mostrarHp();