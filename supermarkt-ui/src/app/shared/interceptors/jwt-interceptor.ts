import { HttpInterceptor, HttpRequest } from '@angular/common/http';
import { AutenticacaoService } from '../services/autenticacao.service';

export class JwtInterceptor implements HttpInterceptor {

    constructor(private autenticacaoService: AutenticacaoService) {}
    
    intercept(request: HttpRequest<any>, next: import("@angular/common/http").HttpHandler): import("rxjs").Observable<import("@angular/common/http").HttpEvent<any>> {
        const currentUser = this.autenticacaoService.currentUserValue;
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`
                }
            })
        }

        return next.handle(request);
    }
}
