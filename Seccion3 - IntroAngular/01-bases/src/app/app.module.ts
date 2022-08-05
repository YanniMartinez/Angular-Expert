import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorModule } from './contador/contador.module';
import { HeroesModule } from './heroes/heroes.module';

@NgModule({
  declarations: [
    //Se deben importar todos los modulos a usar
    AppComponent
  ],
  imports: [
    BrowserModule,
    ContadorModule,
    HeroesModule, //Importamos el modulo recien creado
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
