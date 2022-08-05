import { Component} from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  agregar( event : any){
    event.preventDefault(); //Evita la recarga automatica de un fomr
    console.log("Hey!!")
  }
}
