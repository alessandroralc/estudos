import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesModule } from './directives/directives.module';
import { PipesModule } from './pipes/pipes.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './interceptors/jwt-interceptor';
import { ErroServidorInterceptor } from './interceptors/erro-servidor-interceptor';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PipesModule,
    DirectivesModule
  ],
  exports: [
    PipesModule,
    DirectivesModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErroServidorInterceptor, multi: true }
  ]
})
export class SharedModule { }
