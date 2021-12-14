import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideBarComponent } from './components/side-bar/side-bar.component';


// #pages
import { AuthHomeComponent } from './Pages/private/auth-home/auth-home.component';
import { LogInComponent } from './Pages/Public/log-in/log-in.component';
import { HomeComponent } from './Pages/Public/home/home.component';
import { RegisterComponent } from './Pages/Public/register/register.component';
import { FrameComponent } from './components/frame/frame.component';

// #angular material 
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    LogInComponent,
    HomeComponent,
    FrameComponent,
    RegisterComponent,
    AuthHomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
