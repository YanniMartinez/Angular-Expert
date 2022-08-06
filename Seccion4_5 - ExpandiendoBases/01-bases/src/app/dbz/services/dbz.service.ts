import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

/**Decorador para los servicios en Angular
 * En resumen lo que dice es que es una clase que se podrá inyectar
 * Este servicio se va a ejecutar hasta que alguien lo requiera, cuando se
 * requiere genera una unica instancia la cual atenderá todo lo que se necesite
 * siempre la misma instancia
 */
@Injectable()
export class DbzService{
    
    /**
     * Sólo queremos que la modificación del arreglo de personajes
     * Sólo sea usando este servicio, no por otro componente, por eso
     * ponemos _personajes y private al inicio
     */
    private _personajes: Personaje [] = [
        {
            nombre: 'Goku',
            poder: 15000
        },
        {
            nombre: 'Vegeta',
            poder: 8500
        }
    ]

    get personajes(): Personaje[]{
        //return this._personajes Mandaria arreglo por referencia
        return [...this._personajes]; //Lo manda como copia para no modificar
    }

    constructor(){
        console.log("Servicio inicializado")
    }


    agregarPersonaje( personaje : Personaje){
        this._personajes.push( personaje );
    }
}