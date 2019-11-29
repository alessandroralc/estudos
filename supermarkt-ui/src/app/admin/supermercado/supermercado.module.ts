import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupermercadoBuscaComponent } from './supermercado-busca/supermercado-busca.component';
import { SupermercadoGradeComponent } from './supermercado-grade/supermercado-grade.component';
import { SupermercadoFormularioComponent } from './supermercado-formulario/supermercado-formulario.component';
import { SupermercadoRoutingModule } from './supermercado-routing.module';
import { MessageModule } from 'primeng/message';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { SupermercadoService } from './servicos/supermercado.service';
import { ConfirmationService } from 'primeng/api';


@NgModule({
  declarations: [SupermercadoBuscaComponent, 
    SupermercadoGradeComponent, 
    SupermercadoFormularioComponent],
  imports: [
    CommonModule,
    SupermercadoRoutingModule,
    MessageModule,
    RouterModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    ConfirmDialogModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [SupermercadoService, ConfirmationService]
})
export class SupermercadoModule { }
