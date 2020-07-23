import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BdService {
  ip = 'http://192.168.0.152:3000/';
  usuario: string;
  tipo: string;
  constructor(private httpClient: HttpClient) { }

  crearPedido(cliente: string, fechallegada: string, oc: string, fechadeseada: string, observaciones: string, atendido: string) {
    const body = new HttpParams()
    .set('Cliente', cliente)
    .set('FechaLlegada', fechallegada)
    .set('OC', oc)
    .set('FechaDeseada', fechadeseada)
    .set('ObservacionesVentas', observaciones)
    .set('Atendido', atendido);
    return this.httpClient.post(this.ip + 'ventas', body.toString(),
    {
    headers: new HttpHeaders()
    .set('Content-Type', 'application/x-www-form-urlencoded')
    });
  }
  addCliente(cliente:string){
    const body = new HttpParams()
    .set('Cliente', cliente)

    return this.httpClient.post(this.ip +  'addcliente', body.toString(),
    {
    headers: new HttpHeaders()
    .set('Content-Type', 'application/x-www-form-urlencoded')
    });
  }
  autorizacion(estadoAuth: string, folio: string, autorizadopor: string) {
    const body = new HttpParams()
    .set('Estado', estadoAuth)
    .set('AutorizadoPor', autorizadopor)
    .set('FolioInterno', folio);
    return this.httpClient.post(this.ip +  'autorizacion', body.toString(),
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
    return this.httpClient.post(this.ip + 'factura', body.toString(),
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
    return this.httpClient.post(this.ip + 'surtido', body.toString(),
    {
    headers: new HttpHeaders()
    .set('Content-Type', 'application/x-www-form-urlencoded')
    });
  }
  cobranza(folio: string, tipoCobranza: string, obsCob: string, fechaEnt: string, estado: string) {
    const body = new HttpParams()
    .set('FolioInterno', folio)
    .set('TipoCobranza', tipoCobranza)
    .set('ObservacionesCobranza', obsCob)
    .set('FechaEntregado', fechaEnt)
    .set('Estado', estado);
    return this.httpClient.post(this.ip + 'cobranza', body.toString(),
    {
    headers: new HttpHeaders()
    .set('Content-Type', 'application/x-www-form-urlencoded')
    });
  }
  updateenProceso(folio: string, estado: string) {
    const body = new HttpParams()
    .set('FolioInterno', folio)
    .set('Estado', estado);
    return this.httpClient.post(this.ip + 'proceso', body.toString(),
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
    return this.httpClient.post(this.ip + 'parcialembarcado', body.toString(),
    {
    headers: new HttpHeaders()
    .set('Content-Type', 'application/x-www-form-urlencoded')
    });
  }
  modifbuscar(folio: string) {
    const body = new HttpParams()
    .set('FolioInterno', folio);
    return this.httpClient.post(this.ip + 'modifbuscar', body.toString(),
    {
    headers: new HttpHeaders()
    .set('Content-Type', 'application/x-www-form-urlencoded')
    });
  }
  getTodosClientes() {
    return this.httpClient.get(this.ip + 'todosClientes');
  }
  getUsuarios() {
    return this.httpClient.get(this.ip + 'usuarios');
  }

  getPendientes() {
    return this.httpClient.get(this.ip + 'pendientes');
  }

  getporFacturar() {
    return this.httpClient.get(this.ip + 'porfacturar');
  }

  getporEmbarcar() {
    return this.httpClient.get(this.ip + 'porembarcar');
  }
  getporAutorizar() {
    return this.httpClient.get(this.ip + 'porautorizar');
  }

  getporEntregar() {
    return this.httpClient.get(this.ip + 'porentregar');
  }

  getEnProceso() {
    return this.httpClient.get(this.ip + 'enproceso');
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
    return this.httpClient.post(this.ip + 'createuser', body.toString(),
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
    return this.httpClient.put(this.ip + 'edituser', body.toString(),
    {
    headers: new HttpHeaders()
    .set('Content-Type', 'application/x-www-form-urlencoded')
    });
  }
  deleteUser(usuario: string) {
    const body = new HttpParams()
    .set('Usuario', usuario);
    return this.httpClient.post(this.ip + 'borraruser', body.toString(),
    {
    headers: new HttpHeaders()
    .set('Content-Type', 'application/x-www-form-urlencoded')
    });
  }
  getFolio(folio: string) {
    const body = new HttpParams()
    .set('FolioInterno', folio);
    return this.httpClient.post(this.ip + 'folio', body.toString(),
    {
    headers: new HttpHeaders()
    .set('Content-Type', 'application/x-www-form-urlencoded')
    });
  }
  getCliente(cliente: string) {
    const body = new HttpParams()
    .set('Cliente', cliente);
    return this.httpClient.post(this.ip + 'cliente', body.toString(),
    {
    headers: new HttpHeaders()
    .set('Content-Type', 'application/x-www-form-urlencoded')
    });
  }
  getFechaEntregados(fechaDe: string, fechaHasta: string) {
    const body = new HttpParams()
    .set('FechaDe', fechaDe)
    .set('FechaHasta', fechaHasta);
    return this.httpClient.post(this.ip + 'fechasentregados', body.toString(),
    {
    headers: new HttpHeaders()
    .set('Content-Type', 'application/x-www-form-urlencoded')
    });
  }

}
