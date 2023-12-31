import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HomeComponent } from './components/home/home.component';
import { ServicosCarrouselComponent } from './components/home/servicos-carrousel/servicos-carrousel.component';
import { NavComponent } from './components/nav/nav.component';

import { MainScreenComponent } from './components/mainScreen/mainscreen.component';
import { FooterComponent } from './components/home/footer/footer.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicosCarrouselComponent,
    NavComponent,
    MainScreenComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
