import { Component} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

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

  nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 1000
  }

  agregarNuevoPersonaje( guerrero: Personaje){
    //debugger; //Permite depurar código cuando llega a este punto
    this.personajes.push( guerrero );
    //console.log(guerrero)
  }
  
  /**Creamos instancia del service 
   * A esto se le conoce como inyección de dependecias.
   * Lo que hicimos fue inyectar el servicio en este componente
  */
  constructor( private dbzService: DbzService ){}
}
