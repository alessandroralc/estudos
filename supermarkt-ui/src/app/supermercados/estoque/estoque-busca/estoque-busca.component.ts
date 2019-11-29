import { Component, OnInit, EventEmitter } from '@angular/core';
import { Supermercado } from 'src/app/admin/supermercado/modelos/supermercado';
import { ItemEstoque } from 'src/app/pedido/modelos/item-estoque';
import { EstoqueService } from 'src/app/pedido/servicos/estoque.service';
import { SupermercadoService } from 'src/app/admin/supermercado/servicos/supermercado.service';
import { ActivatedRoute } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { NotificacaoService } from 'src/app/shared/services/notificacao.service';

@Component({
  selector: 'app-estoque-busca',
  templateUrl: './estoque-busca.component.html',
  styleUrls: ['./estoque-busca.component.scss']
})
export class EstoqueBuscaComponent implements OnInit {

  supermercado: Supermercado;
  itensEstoque: ItemEstoque[];
  inputSearch;

  constructor(
    private route: ActivatedRoute,
    private estoqueService: EstoqueService,
    private supermercadoService: SupermercadoService,
    private confirmationService: ConfirmationService,
    private notificacaoServico: NotificacaoService
  ) { }

  ngOnInit(): void {
    const supermercadoId = this.route.snapshot.params.supermercadoId;
    
    this.supermercadoService.getSupermercadoById(supermercadoId)
      .subscribe(supermercado => this.supermercado = supermercado);

    this.estoqueService.estoquePorSupermercadoId(supermercadoId)
      .subscribe(itensEstoque => this.itensEstoque = itensEstoque,
        erro => this.notificacaoServico.notificar({severity: 'error', summary: 'Erro', detail: 'Não foi possível carregar os itens. Tente novamente.'}));
  }

  dialogDelete(item: ItemEstoque) {
    
  }

  getItemEstoqueByName(nome: string): void {
    this.estoqueService.getByName(this.supermercado.id, nome)
      .subscribe(itensEstoque => {
        this.itensEstoque = itensEstoque;
      },
      error => {
        this.notificacaoServico.notificar({severity: 'error', summary: 'Erro',
          detail: 'Não foi possível carregar os itens. Tente novamente'});
      })
  }

}
