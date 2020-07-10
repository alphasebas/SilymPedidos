import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BdService {
  usuario: string;
  tipo: string;
  constructor(private httpClient: HttpClient) { }

  crearPedido(cliente: string, fechallegada: string, oc: string, fechadeseada: string, observaciones: string) {
    const body = new HttpParams()
    .set('Cliente', cliente)
    .set('FechaLlegada', fechallegada)
    .set('OC', oc)
    .set('FechaDeseada', fechadeseada)
    .set('ObservacionesVentas', observaciones);
    return this.httpClient.post('http://localhost:3000/ventas', body.toString(),
    {
    headers: new HttpHeaders()
    .set('Content-Type', 'application/x-www-form-urlencoded')
    });
  }

  getUsuarios() {
    return this.httpClient.get('http://localhost:3000/usuarios');
  }

  getPendientes() {
    return this.httpClient.get('http://localhost:3000/pendientes');
  }

  getFacturados() {
    return this.httpClient.get('http://localhost:3000/facturados');
  }

  getEmbarcados() {
    return this.httpClient.get('http://localhost:3000/embarcados');
  }

  getEntregados() {
    return this.httpClient.get('http://localhost:3000/entregados');
  }

  getEnProceso() {
    return this.httpClient.get('http://localhost:3000/enproceso');
  }
  autorizacion(estadoAuth:string, folio:string){
    const body = new HttpParams()
    .set('Estado', estadoAuth)
    .set('FolioInterno', folio)
    return this.httpClient.post('http://localhost:3000/autorizacion', body.toString(),
    {
    headers: new HttpHeaders()
    .set('Content-Type', 'application/x-www-form-urlencoded')
    });
  }
  setUsuario(user: string, tipo: string) {
    this.usuario = user;
    this.tipo = tipo;
  }
  getUsuario() {
    return this.usuario;
  }
  getTipoUsuario() {
    return this.tipo;
  }
  createUser(usuario: string, password: string, tipo: string) {
    const body = new HttpParams()
    .set('Usuario', usuario)
    .set('Password', password)
    .set('Tipo', tipo);
    return this.httpClient.post('http://localhost:3000/createuser', body.toString(),
    {
    headers: new HttpHeaders()
    .set('Content-Type', 'application/x-www-form-urlencoded')
    });
  }
  updateUser(usuario: string, password: string, tipo: string) {
    const body = new HttpParams()
    .set('Usuario', usuario)
    .set('Password', password)
    .set('Tipo', tipo);
    return this.httpClient.put('http://localhost:3000/edituser', body.toString(),
    {
    headers: new HttpHeaders()
    .set('Content-Type', 'application/x-www-form-urlencoded')
    });
  }
  deleteUser(usuario: string) {
    const body = new HttpParams()
    .set('Usuario', usuario);
    return this.httpClient.post('http://localhost:3000/borraruser', body.toString(),
    {
    headers: new HttpHeaders()
    .set('Content-Type', 'application/x-www-form-urlencoded')
    });
  }

}
