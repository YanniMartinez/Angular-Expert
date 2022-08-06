import { Component, Input} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {
  
  /**Indica que recibirá info del componente padre */
  //@Input() personajes: Personaje [] = [];
  //También podemos ponerle un nuevo nombre, ej:
  //@Input("Guerreros") personajes: any [] = [];

  //Llamando al Getter del dbzService
  get personajes(){
    return this.dbzService.personajes;
  }

  constructor( private dbzService: DbzService){
    
  }
}
