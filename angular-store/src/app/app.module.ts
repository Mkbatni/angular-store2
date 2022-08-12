import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashbaordComponent } from './dashbaord/dashbaord.component';
import { FormsModule } from '@angular/forms';
import { MyAuthGaurd } from './myauthgaurd';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashbaordComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    FormsModule,
    BrowserModule
  ],
  providers: [MyAuthGaurd],
  bootstrap: [AppComponent]
})
export class AppModule { }
