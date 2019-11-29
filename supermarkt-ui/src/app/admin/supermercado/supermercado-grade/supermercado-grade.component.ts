import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Supermercado } from '../modelos/supermercado';

@Component({
  selector: 'app-supermercado-grade',
  templateUrl: './supermercado-grade.component.html',
  styleUrls: ['./supermercado-grade.component.scss']
})
export class SupermercadoGradeComponent {

  @Input() supermercados = [];
  @Output() delete = new EventEmitter();

  constructor() { }

  handleDelete(supermercado: Supermercado) {
    this.delete.emit(supermercado);
  }

}
