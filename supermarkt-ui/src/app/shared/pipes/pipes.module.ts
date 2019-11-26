import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextoFavoritoPipe } from './texto-favorito.pipe';
import { SituacaoPedidoPipe } from './situacao-pedido.pipe';



@NgModule({
  declarations: [TextoFavoritoPipe, SituacaoPedidoPipe],
  imports: [
    CommonModule
  ],
  exports: [
    TextoFavoritoPipe,
    SituacaoPedidoPipe
  ]
})
export class PipesModule { }
