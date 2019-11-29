import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstoqueGradeComponent } from './estoque-grade/estoque-grade.component';
import { EstoqueBuscaComponent } from './estoque-busca/estoque-busca.component';



@NgModule({
  declarations: [EstoqueGradeComponent, EstoqueBuscaComponent],
  imports: [
    CommonModule
  ]
})
export class EstoqueModule { }
