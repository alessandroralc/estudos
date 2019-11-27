import { Injectable, ErrorHandler, Injector, NgZone } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NotificacaoService } from '../shared/services/notificacao.service';
import { ErrosService } from './servicos/erros.service';
import { Router } from '@angular/router';

@Injectable()
export class ErrosHandler implements ErrorHandler {
    constructor(
        private injector: Injector,
        private ngZone: NgZone
    ) {}

    handleError(error: Error | HttpErrorResponse): void {
        const notificacaoServico = this.injector.get(NotificacaoService);
        const errosService = this.injector.get(ErrosService);
        const router = this.injector.get(Router);

        if (error instanceof HttpErrorResponse) {
            if (!navigator.onLine) {
                notificacaoServico.notificar({severity: 'error', summary: 'Erro', detail: 'Sem conexão.'});
                return;
            }

            notificacaoServico.notificar({severity: 'error', summary: 'Erro', detail: `${error.status} - ${error.message}`});
        } else {
            notificacaoServico.notificar({severity: 'error', summary: 'Erro', detail: ` ${error.message}`});
        }

        errosService.log(error)
            .subscribe(errorWithContextInfo => {
                this.ngZone.run(() => router.navigate(['/error'], {queryParams: errorWithContextInfo})).then();
            });
    }
}
