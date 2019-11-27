import { Component } from '@angular/core';
import { Usuario } from 'src/app/shared/modelos/usuario';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/shared/services/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginInfo: Usuario = new Usuario('', '');

  constructor(private router: Router,
    private autenticacaoService: AutenticacaoService) { }

  efetuaLogin(): void {
    this.autenticacaoService.login(this.loginInfo)
      .subscribe(() => this.router.navigate(['']));
  }

}
