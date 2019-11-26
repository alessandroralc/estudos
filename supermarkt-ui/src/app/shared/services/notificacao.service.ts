import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { publish, refCount } from 'rxjs/operators';

@Injectable()
export class NotificacaoService {

  private notificacao: BehaviorSubject<Message> = new BehaviorSubject(undefined);
  readonly notificacoes: Observable<Message> = this.notificacao.asObservable().pipe(
    publish(),
    refCount()
  );

  constructor() {}

  notificar(message: Message): void {
    this.notificacao.next(message);
  }
}
