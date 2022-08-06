import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [
    SidebarComponent
  ],
  exports: [
    SidebarComponent //Exportando el SideBar
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
