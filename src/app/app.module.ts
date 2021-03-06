import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

// #angular material 
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { NavComponent } from './clients/components/nav/nav.component';
import { HomeComponent } from './clients/Pages/home/home.component';
import { SettingsComponent } from './clients/Pages/settings/settings.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { StoresComponent } from './clients/Pages/stores/stores.component';
import { MessagesComponent } from './clients/Pages/messages/messages.component';
import { AuthGuardGuard } from './clients/services/auth-guard.guard';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    SettingsComponent,
    StoresComponent,
    MessagesComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatTabsModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass:'toast',
      preventDuplicates: true,
    }),  
  ],
  providers: [AuthGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
