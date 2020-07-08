import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BdService {
  usuario: string;
  tipo: string;
  constructor(private httpClient: HttpClient) { }

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


}
