import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { SubMenuHeaderComponent } from './components/sub-menu-header/sub-menu-header.component';
import { HeaderComponent } from './components/header/header.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { LoaderComponent } from './components/loader/loader.component';
import { CanaisComponent } from './components/pages/canais/canais.component';
import { LoginComponent } from './components/pages/login/login.component';
import { AdicionarCanalComponent } from './components/pages/canais/adicionar-canal/adicionar-canal.component';
import { EventosComponent } from './components/pages/eventos/eventos.component';
import { OcorrenciasEspeciaisComponent } from './components/pages/ocorrencias-especiais/ocorrencias-especiais.component';
import { ProdutosAuxiliaresComponent } from './components/pages/produtos-auxiliares/produtos-auxiliares.component';
import { AdicionarEventoComponent } from './components/pages/eventos/adicionar-evento/adicionar-evento.component';
import { ResponsiveComponent } from './components/responsive/responsive.component';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    SubMenuHeaderComponent,
    HeaderComponent,
    MainContentComponent,
    LoaderComponent,
    CanaisComponent,
    LoginComponent,
    AdicionarCanalComponent,
    EventosComponent,
    OcorrenciasEspeciaisComponent,
    ProdutosAuxiliaresComponent,
    AdicionarEventoComponent,
    ResponsiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
