import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { HeaderComponent } from './component/header/header.component';
import { SideBarComponent } from './component/side-bar/side-bar.component';
import { BodyComponent } from './component/body/body.component';
import { SideSponsorComponent } from './component/side-sponsor/side-sponsor.component';
import { FooterComponent } from './component/footer/footer.component';
import { RegisterComponent } from './component/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    BodyComponent,
    SideSponsorComponent,
    FooterComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
