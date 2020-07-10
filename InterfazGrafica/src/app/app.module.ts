import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { PendientesComponent } from './components/pendientes/pendientes.component';
import { FacturadosComponent } from './components/facturados/facturados.component';
import { EmbarcadosComponent } from './components/embarcados/embarcados.component';
import { EntregadosComponent } from './components/entregados/entregados.component';
import { EnprocesoComponent } from './components/enproceso/enproceso.component';
import { CrearpedidoComponent } from './components/crearpedido/crearpedido.component';
import { AutorizarComponent } from './components/autorizar/autorizar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    PendientesComponent,
    FacturadosComponent,
    EmbarcadosComponent,
    EntregadosComponent,
    EnprocesoComponent,
    CrearpedidoComponent,
    AutorizarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
