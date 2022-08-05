import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { HeroesModule } from './heroes/heroes.module';

@NgModule({
  declarations: [
    //Se deben importar todos los modulos a usar
    AppComponent, 
    ContadorComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModule //Importamos el modulo recien creado
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
