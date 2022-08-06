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
    
    personajes: Personaje [] = [
        {
            nombre: 'Goku',
            poder: 15000
        },
        {
            nombre: 'Vegeta',
            poder: 8500
        }
    ]

    constructor(){
        console.log("Servicio inicializado")
    }
}