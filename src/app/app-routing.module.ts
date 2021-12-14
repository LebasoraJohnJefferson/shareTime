import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './Pages/Public/log-in/log-in.component';
import { HomeComponent } from './Pages/Public/home/home.component';
import { RegisterComponent } from './Pages/Public/register/register.component';
import { AuthHomeComponent } from './Pages/private/auth-home/auth-home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'auth/login',component:LogInComponent},
  {path:'auth/register',component:RegisterComponent},
  {path:'ShareTime',component:AuthHomeComponent},
  {path:"**",redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
