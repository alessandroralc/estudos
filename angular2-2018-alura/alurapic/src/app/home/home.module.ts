import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { VMessageModule } from '../shared/components/vmessage/vmessage.module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';
import { SignupService } from './signup/signup.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VMessageModule,
    RouterModule,
    FormsModule,
    HomeRoutingModule
  ],
  declarations: [
    SigninComponent,
    SignupComponent,
    HomeComponent
  ],
  providers: [
    SignupService
  ]
})
export class HomeModule { }
