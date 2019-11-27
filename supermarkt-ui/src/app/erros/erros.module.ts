import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrosComponent } from './erros/erros.component';
import { RouterModule } from '@angular/router';
import { NotificacaoService } from '../shared/services/notificacao.service';
import { ErrosService } from './servicos/erros.service';
import { ErrosHandler } from './erros-handler';



@NgModule({
  declarations: [ErrosComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    NotificacaoService,
    ErrosService,
    {
      provide: ErrorHandler,
      useClass: ErrosHandler
    }
  ]
})
export class ErrosModule { }
