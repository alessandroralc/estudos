import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidoPendenteComponent } from './pedido-pendente/pedido-pendente.component';
import { SupermercadosRoutingModule } from './supermercados-routing.module';
import { ButtonModule } from 'primeng/button';
import { SharedModule } from '../shared/shared.module';
import { InjectableRxStompConfig, RxStompService, rxStompServiceFactory } from '@stomp/ng2-stompjs';
import { rxStompConfig } from '../rx-stomp.config';


@NgModule({
  declarations: [PedidoPendenteComponent],
  imports: [
    CommonModule,
    SupermercadosRoutingModule,
    ButtonModule,
    SharedModule
  ],
  providers: [
    {
      provide: InjectableRxStompConfig,
      useValue: rxStompConfig
    },
    {
      provide: RxStompService,
      useFactory: rxStompServiceFactory,
      deps: [InjectableRxStompConfig]
    }
  ]
})
export class SupermercadosModule { }
