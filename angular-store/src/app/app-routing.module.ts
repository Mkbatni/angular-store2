import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbaordComponent } from './dashbaord/dashbaord.component';
import { LoginComponent } from './login/login.component';
import { MyAuthGaurd } from './myauthgaurd';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:"\login", component:LoginComponent},
  {path:"\signup", component:SignupComponent},
  {path:"\dashboard", component:DashbaordComponent,canActivate:[MyAuthGaurd]},
  { path: '', redirectTo: 'login', pathMatch: 'full' },
	{ path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
