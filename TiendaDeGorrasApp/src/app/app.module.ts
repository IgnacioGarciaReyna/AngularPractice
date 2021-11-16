import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { TiendaComponent } from './components/tienda/tienda.component';
import { RouterModule } from '@angular/router';
import { appRouting } from './app.routes';
import { ChangeImageDirective } from './directives/change-image.directive';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactoComponent } from './components/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    TiendaComponent,
    ChangeImageDirective,
    SidebarComponent,
    AboutUsComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    appRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
