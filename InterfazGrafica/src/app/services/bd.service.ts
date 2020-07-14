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

  autorizacion(estadoAuth:string, folio:string){
    const body = new HttpParams()
    .set('Estado', estadoAuth)
    .set('FolioInterno', folio);
    return this.httpClient.post('http://localhost:3000/autorizacion', body.toString(),
    {
    headers: new HttpHeaders()
    .set('Content-Type', 'application/x-www-form-urlencoded')
    });
  }
  facturar(folio: string, factura: string, estado: string) {
    const body = new HttpParams()
    .set('FolioInterno', folio)
    .set('Factura', factura)
    .set('Estado', estado);
    return this.httpClient.put('http://localhost:3000/factura', body.toString(),
    {
    headers: new HttpHeaders()
    .set('Content-Type', 'application/x-www-form-urlencoded')
    });
  }
  surtir(folio: string, estado: string , surtidor: string) {
    const body = new HttpParams()
    .set('FolioInterno', folio)
    .set('Estado', estado)
    .set('Surtidor', surtidor);
    return this.httpClient.post('http://localhost:3000/surtido', body.toString(),
    {
    headers: new HttpHeaders()
    .set('Content-Type', 'application/x-www-form-urlencoded')
    });
  }
  parcialEmbarcado(folio: string, estado: string, surtidor: string, chofer: string, obsAlmacen: string,
                   embarcador: string, fechaembarcada: string) {
    const body = new HttpParams()
    .set('FolioInterno', folio)
    .set('Estado', estado)
    .set('Chofer', chofer)
    .set('ObservacionesAlmacen', obsAlmacen)
    .set('Embarcador', embarcador)
    .set('FechaEmbarcada', fechaembarcada)
    .set('Surtidor', surtidor);
    return this.httpClient.post('http://localhost:3000/parcialembarcado', body.toString(),
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

  getporFacturar() {
    return this.httpClient.get('http://localhost:3000/porfacturar');
  }

  getporEmbarcar() {
    return this.httpClient.get('http://localhost:3000/porembarcar');
  }
  getporAutorizar() {
    return this.httpClient.get('http://localhost:3000/porautorizar');
  }

  getEntregados() {
    return this.httpClient.get('http://localhost:3000/entregados');
  }

  getEnProceso() {
    return this.httpClient.get('http://localhost:3000/enproceso');
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
