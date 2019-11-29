import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ItemEstoque } from 'src/app/pedido/modelos/item-estoque';
import { Supermercado } from 'src/app/admin/supermercado/modelos/supermercado';

@Component({
  selector: 'app-estoque-grade',
  templateUrl: './estoque-grade.component.html',
  styleUrls: ['./estoque-grade.component.scss']
})
export class EstoqueGradeComponent {

  @Input() itensEstoque: ItemEstoque[];

  @Input() supermercado: Supermercado;

  @Output() delete = new EventEmitter();

  handleDelete(itemEstoque: ItemEstoque): void {
    this.delete.emit(itemEstoque);
  }

}
