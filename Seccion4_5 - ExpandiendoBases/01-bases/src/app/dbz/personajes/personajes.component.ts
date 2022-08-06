import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {
  
  /**Indica que recibirá info del componente padre */
  @Input() personajes: any [] = [];
  //También podemos ponerle un nuevo nombre, ej:
  //@Input("Guerreros") personajes: any [] = [];

}
