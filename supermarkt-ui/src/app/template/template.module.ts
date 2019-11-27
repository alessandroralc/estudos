import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [NavbarComponent, SidebarComponent],
  imports: [
    CommonModule,
    MenuModule,
    ButtonModule,
    SharedModule
  ],
  exports: [
    NavbarComponent,
    SidebarComponent
  ]
})
export class TemplateModule { }
