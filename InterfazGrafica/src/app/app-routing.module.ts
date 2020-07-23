import { CrearpedidoComponent } from './components/crearpedido/crearpedido.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login/login.component';
import { PendientesComponent } from './components/pendientes/pendientes.component';
import { FacturadosComponent } from './components/facturados/facturados.component';
import { EmbarcadosComponent } from './components/embarcados/embarcados.component';
import { EntregadosComponent } from './components/entregados/entregados.component';
import { EnprocesoComponent } from './components/enproceso/enproceso.component';
import { AutorizarComponent } from './components/autorizar/autorizar.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { CrearcomprasComponent } from './components/crearcompras/crearcompras.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'pendientes', component: PendientesComponent },
  { path: 'autorizacion', component: AutorizarComponent },
  { path: 'crearpedidos', component: CrearpedidoComponent },
  { path: 'crearcompras', component: CrearcomprasComponent },
  { path: 'facturados', component: FacturadosComponent },
  { path: 'embarcados', component: EmbarcadosComponent },
  { path: 'entregados', component: EntregadosComponent },
  { path: 'enproceso', component: EnprocesoComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'buscar', component: BuscarComponent },
  {path: '**', pathMatch: 'full', redirectTo: '#'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
