import { Directive, TemplateRef, ViewContainerRef, OnInit } from '@angular/core';
import { Autenticacao } from '../modelos/autenticacao';
import { AutenticacaoService } from '../services/autenticacao.service';

@Directive({
  selector: '[appTemAcesso]'
})
export class TemAcessoDirective implements OnInit {

  private currentUser: Autenticacao;
  private isHidden = true;

  private roles: string[];

  constructor(
    private templateRef: TemplateRef<any>,
    private vcr: ViewContainerRef,
    private autenticacaoService: AutenticacaoService
  ) { }

  ngOnInit(): void {
    this.autenticacaoService.currentUser.subscribe(user => {
      this.currentUser = user;
      this.updateView();
    });
  }

  private updateView(): void {
    if (this.autenticacaoService.hasRole(this.roles)) {
      if (this.isHidden) {
        this.vcr.createEmbeddedView(this.templateRef);
        this.isHidden = false;
      }
    } else {
      this.vcr.clear();
      this.isHidden = true;
    }
  }

}
