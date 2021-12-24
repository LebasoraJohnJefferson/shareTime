import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './clients/Pages/home/home.component';
import { SettingsComponent } from './clients/Pages/settings/settings.component';
import { StoresComponent } from './clients/Pages/stores/stores.component';
import { MessagesComponent } from './clients/Pages/messages/messages.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'settings',component:SettingsComponent},
  {path:'stores',component:StoresComponent},
  {path:'messages',component:MessagesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
