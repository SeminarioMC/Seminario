import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// rutas
import { APP_ROUTES} from './app.routes';
import { AppComponent } from './app.component';

import { HeaderComponent } from './component/header/header.component';
import { SideBarComponent } from './component/side-bar/side-bar.component';
import { SideSponsorComponent } from './component/side-sponsor/side-sponsor.component';
import { FooterComponent } from './component/footer/footer.component';
import { RegisterComponent } from './component/register/register.component';
import {RegisterService} from './component/register/register.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';


import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import { InicioComponent } from './component/Pages/inicio/inicio.component';
import { ProgramaComponent } from './component/Pages/programa/programa.component';
import { LlamamientoComponent } from './component/Pages/llamamiento/llamamiento.component';
import { RegistroComponent } from './component/Pages/registro/registro.component';
import { InvitacionComponent } from './component/Pages/invitacion/invitacion.component';
import { ComiteComponent } from './component/Pages/comite/comite.component';
import { LugarComponent } from './component/Pages/lugar/lugar.component';
import { NopageComponent } from './component/nopage/nopage.component';
import { TallerComponent } from './component/Pages/taller/taller.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    SideSponsorComponent,
    FooterComponent,
    RegisterComponent,
    InicioComponent,
    ProgramaComponent,
    LlamamientoComponent,
    RegistroComponent,
    InvitacionComponent,
    ComiteComponent,
    LugarComponent,
    NopageComponent,
    TallerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    APP_ROUTES
  ],
  providers: [
    HttpClient,
    RegisterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
