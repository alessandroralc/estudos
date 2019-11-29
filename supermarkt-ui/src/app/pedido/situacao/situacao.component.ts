import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Pedido } from '../modelos/pedido';
import { Avaliacao } from '../modelos/avaliacao';
import { ActivatedRoute } from '@angular/router';
import { RxStompService } from '@stomp/ng2-stompjs';
import { PedidoService } from '../servicos/pedido.service';
import { AvaliacoesService } from '../servicos/avaliacoes.service';
import { NotificacaoService } from 'src/app/shared/services/notificacao.service';
import { Message } from '@stomp/stompjs';

@Component({
  selector: 'app-situacao',
  templateUrl: './situacao.component.html',
  styleUrls: ['./situacao.component.scss']
})
export class SituacaoComponent implements OnInit, OnDestroy {

  private topicSubscription: Subscription;

  pedido: Pedido;
  avaliacao: Avaliacao;

  constructor(
    private route: ActivatedRoute,
    private rxStompService: RxStompService,
    private pedidoService: PedidoService,
    private avaliacoesService: AvaliacoesService,
    private notificacaoServico: NotificacaoService
  ) { }

  ngOnInit(): void {
    const pedidoId = this.route.snapshot.params.pedidoId;
    this.pedidoService.porId(pedidoId)
      .subscribe(pedido => this.pedido = pedido,
        error => this.notificacaoServico.notificar({ severity: 'error', summary: 'Erro', detail: 'Não foi possível carregar o resumo do pedido.' })
      );

    this.topicSubscription = this.rxStompService.watch(`/pedidos/${pedidoId}/situacao`).subscribe((message: Message) => {
      const pedido = JSON.parse(message.body);
      this.pedido.situacao = pedido.situacao;
    });
    this.avaliacao = new Avaliacao();
  }

  ngOnDestroy(): void {
    this.topicSubscription.unsubscribe();
  }

  salvaAvaliacao(): void {
    this.avaliacao.pedido = this.pedido;
    this.avaliacoesService.salva(this.avaliacao, this.pedido.supermercado.id)
      .subscribe(avaliacao => this.avaliacao = avaliacao,
        error => this.notificacaoServico.notificar({
          severity: 'error', summary: 'Erro',
          detail: 'Erro ao salvar a avaliação do pedido.'
        }));
  }

}
