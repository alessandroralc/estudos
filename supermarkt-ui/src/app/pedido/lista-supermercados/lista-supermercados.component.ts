import { Component, OnInit } from '@angular/core';
import { SupermercadoComAvaliacao } from '../modelos/supermercado-com-avaliacao';
import { PedidoService } from '../servicos/pedido.service';
import { Router } from '@angular/router';
import { SupermercadoService } from 'src/app/admin/supermercado/servicos/supermercado.service';
import { NotificacaoService } from 'src/app/shared/services/notificacao.service';
import { Supermercado } from 'src/app/admin/supermercado/modelos/supermercado';

@Component({
  selector: 'app-lista-supermercados',
  templateUrl: './lista-supermercados.component.html',
  styleUrls: ['./lista-supermercados.component.scss']
})
export class ListaSupermercadosComponent implements OnInit {

  supermercadosComAvaliacao: Array<SupermercadoComAvaliacao>;

  constructor(
    private pedidoService: PedidoService,
    private router: Router,
    private supermercadoService: SupermercadoService,
    private notificacaoServico: NotificacaoService
  ) { }

  ngOnInit(): void {
    this.pedidoService.getSupermercadosComAvaliacao()
      .subscribe(supermercados => {
        this.supermercadosComAvaliacao = supermercados;
      },
        error => {
          this.notificacaoServico.notificar({ severity: 'error', summary: 'Erro', detail: 'Não foi possível carregar os supermercados.' });
        }
      );
  }

  escolher(supermercado: Supermercado): void {
    this.router.navigateByUrl(`/pedidos/supermercado/${supermercado.id}`);
  }

  favoritar(supermercado: Supermercado): void {
    supermercado.favorito = supermercado.favorito ? false : true;
    this.supermercadoService.favoritar(supermercado).subscribe(() => {
      this.notificacaoServico.notificar({ severity: 'success', summary: 'Sucesso', detail: 'Supermercado favoritado.' });
    }
    );
  }

}
