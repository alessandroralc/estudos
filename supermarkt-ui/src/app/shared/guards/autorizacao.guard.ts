import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AutenticacaoService } from '../services/autenticacao.service';
import { NotificacaoService } from '../services/notificacao.service';

@Injectable({
  providedIn: 'root'
})
export class AutorizacaoGuard implements CanActivate {

  constructor(private router: Router,
    private autenticacaoService: AutenticacaoService,
    private notificacaoServico: NotificacaoService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const role = next.data.role;
    if (role && this.autenticacaoService.hasRole(role)) {
      return true;
    }
    this.notificacaoServico.notificar({ severity: 'warn', summary: 'Aviso', detail: 'Efetue o login para ter acesso.' });
    this.router.navigate(['/login']);
    return false;
  }

}
