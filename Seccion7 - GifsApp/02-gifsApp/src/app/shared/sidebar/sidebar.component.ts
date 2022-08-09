import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  //Inyectando el servicio
  constructor( private gifsService: GifsService){}  

  get historial(){
    return this.gifsService.historial
  }

  buscar( query: string){
    console.log(query);
    this.gifsService.buscarGifs(query);
  }

}
