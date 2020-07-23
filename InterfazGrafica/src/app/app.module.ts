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
import { BuscarComponent } from './components/buscar/buscar.component';
import { CrearcomprasComponent } from './components/crearcompras/crearcompras.component';

import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatRadioModule} from '@angular/material/radio';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AltaclienteComponent } from './components/altacliente/altacliente.component';

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
    AutorizarComponent,
    BuscarComponent,
    CrearcomprasComponent,
    AltaclienteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    BrowserAnimationsModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
