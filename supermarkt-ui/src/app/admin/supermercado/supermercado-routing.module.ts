import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SupermercadoBuscaComponent } from './supermercado-busca/supermercado-busca.component';
import { AutorizacaoGuard } from 'src/app/shared/guards/autorizacao.guard';
import { SupermercadoFormularioComponent } from './supermercado-formulario/supermercado-formulario.component';

const routes: Routes = [
  {
    path: '',
    component: SupermercadoBuscaComponent,
    canActivate: [AutorizacaoGuard],
    data: { role: ['ADMIN'] }
  },
  {
    path: 'novo',
    component: SupermercadoFormularioComponent,
    canActivate: [AutorizacaoGuard],
    data: { role: ['ADMIN'] }
  },
  {
    path: ':idSupermercado',
    component: SupermercadoFormularioComponent,
    canActivate: [AutorizacaoGuard],
    data: { role: ['ADMIN'] }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SupermercadoRoutingModule { }
