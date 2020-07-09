import { NavbarComponent } from './components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login/login.component';
import { PendientesComponent } from './components/pendientes/pendientes.component';
import { FacturadosComponent } from './components/facturados/facturados.component';
import { EmbarcadosComponent } from './components/embarcados/embarcados.component';
import { EntregadosComponent } from './components/entregados/entregados.component';
import { EnprocesoComponent } from './components/enproceso/enproceso.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'pendientes', component: PendientesComponent },
  { path: 'facturados', component: FacturadosComponent },
  { path: 'embarcados', component: EmbarcadosComponent },
  { path: 'entregados', component: EntregadosComponent },
  { path: 'enproceso', component: EnprocesoComponent },
  { path: 'navbar', component: NavbarComponent },
  {path: '**', pathMatch: 'full', redirectTo: '#'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
